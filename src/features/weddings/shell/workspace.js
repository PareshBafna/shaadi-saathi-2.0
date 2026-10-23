// Single-wedding screen: banner, app launcher, active module.
import { weddingsPortfolio, session } from '../shared/store.js';
import { computeLiveTelemetry, formatINR } from '../shared/helpers.js';
import { MODULES, findModule, resolveModuleId } from '../modules/registry.js';
import { buildModuleHeader } from './module-header.js';
import { renderDirectory } from './directory.js';
import { setModuleActions } from './module-actions.js';
import { navigateTo } from '../../../core/router.js';

export function buildWorkspaceHTML() {
  return `
    <div id="creator-single-workspace" class="hidden space-y-6">
      <div class="bento-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button type="button" data-action="backToAllWeddings" class="px-4 py-2 rounded-xl bg-card border border-borderWarm text-xs font-bold text-cream hover:bg-gold hover:text-obsidian transition">← All Weddings</button>
          <div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <h2 id="wsBannerCouple" class="font-serif text-3xl font-bold text-cream">Wedding Workspace</h2>
              <span id="wsBannerRoleBadge" class="px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-gold text-obsidian">ROLE: CREATOR</span>
            </div>
            <span id="wsBannerDates" class="text-xs text-gold block mt-0.5"></span>
          </div>
        </div>
        <button type="button" data-action="toggleLauncher" class="px-4 py-2.5 rounded-xl bg-gold/20 border border-gold/40 text-gold text-xs font-bold hover:bg-gold hover:text-obsidian transition">📂 Toggle App Launcher</button>
      </div>

      <div id="wsAppLauncherSection" class="bento-card p-6 space-y-5">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h3 class="font-serif text-xl font-bold text-cream">Shaadi Saathi OS App Launcher (${MODULES.length} Modules)</h3>
          <span class="text-xs text-muted">Click any module icon to switch service workspace</span>
        </div>
        <div id="wsAppIconGrid" class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-3"></div>
        <div id="wsCriticalAlertsBox" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-borderWarm"></div>
      </div>

      <div id="activeModuleViewport" class="space-y-6"></div>
    </div>`;
}

const TILE_ON  = 'p-3 rounded-xl bg-gold text-obsidian font-bold flex flex-col items-center justify-center gap-1.5 text-center shadow transition';
const TILE_OFF = 'p-3 rounded-xl bg-surface border border-borderWarm text-cream hover:border-gold/50 flex flex-col items-center justify-center gap-1.5 text-center transition';

const alertHtml = (label, value, color) =>
  `<div class="p-3 rounded-xl bg-surface border border-borderWarm"><span class="text-[11px] text-muted block">${label}</span><strong class="text-sm ${color}">${value}</strong></div>`;

export function renderLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  if (!grid) return;
  const active = resolveModuleId(session.moduleId);

  grid.innerHTML = MODULES.map(m => `
    <button type="button" data-action="openModule" data-args="${m.id}" class="${m.id === active ? TILE_ON : TILE_OFF}"${m.id === active ? ' aria-current="true"' : ''}>
      <span class="text-2xl" aria-hidden="true">${m.icon}</span>
      <span class="text-[11px] leading-tight">${m.label}</span>
    </button>`).join('');

  const t = computeLiveTelemetry();
  document.getElementById('wsCriticalAlertsBox').innerHTML = [
    alertHtml('Awaiting RSVPs', `${t.awaitingCount} Families Pending`, 'text-amberSS'),
    alertHtml('Vacant Rooms', `${t.roomsVacant} Available`, 'text-emeraldSS'),
    alertHtml('Vendor Balance Due', formatINR(t.budgetDue), 'text-gold'),
    alertHtml('Pending Tasks', `${t.tasksPending + t.tasksInProg} Open Tasks`, 'text-skySS')
  ].join('');
}

export function toggleLauncher() {
  document.getElementById('wsAppLauncherSection')?.classList.toggle('hidden');
}

let active = null;   // { render, body } of the open module
let openToken = 0;   // ignore slow loads that finished after a newer click

// Redraw the open module (after data changed). Keeps keyboard focus on the same field.
export function refreshModule() {
  if (!active) return;
  const el = document.activeElement;
  const key = el && active.body.contains(el) && el.dataset.change ? [el.dataset.change, el.dataset.args] : null;

  renderLauncher();
  active.render(active.body);

  if (!key) return;
  const next = [...active.body.querySelectorAll('[data-change]')].find(n => n.dataset.change === key[0] && n.dataset.args === key[1]);
  if (!next) return;
  next.focus();
  try { next.setSelectionRange(next.value.length, next.value.length); } catch { /* selects have no caret */ }
}

export async function openModule(moduleId, skipPush = false) {
  const token = ++openToken;
  active = null;
  setModuleActions({});
  const mod = findModule(moduleId);
  session.moduleId = mod ? mod.id : moduleId;

  const workspaceOpen = !document.getElementById('creator-single-workspace')?.classList.contains('hidden');
  if (!skipPush && workspaceOpen) navigateTo('creator', { wedding: session.weddingId, module: session.moduleId });

  renderLauncher();
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  if (!mod) {
    viewport.innerHTML = `<div class="bento-card p-6 text-cream">Module <strong>${moduleId}</strong> does not exist.</div>`;
    return;
  }

  viewport.innerHTML = buildModuleHeader(mod) + '<div id="moduleBody" class="space-y-6"></div>';
  try {
    const loaded = await mod.load();
    if (token !== openToken) return;
    setModuleActions(loaded.actions);
    active = { render: loaded.render, body: viewport.querySelector('#moduleBody') };
    loaded.render(active.body);
  } catch (err) {
    console.error(`Module "${mod.id}" failed to load:`, err);
    viewport.querySelector('#moduleBody').innerHTML = '<div class="bento-card p-6 text-crimsonSS">This screen could not load. Check the console.</div>';
  }
}

export function openWeddingWorkspace(weddingId = 'w1', initialModule = 'overview', skipPush = false) {
  session.weddingId = weddingId;
  const w = weddingsPortfolio.find(item => item.id === weddingId) || weddingsPortfolio[0];

  document.getElementById('creator-all-weddings')?.classList.add('hidden');
  document.getElementById('creator-single-workspace')?.classList.remove('hidden');

  document.getElementById('wsBannerCouple').textContent = w.couple;
  document.getElementById('wsBannerDates').textContent = `${w.dates} • ${w.city}`;
  const role = document.getElementById('wsBannerRoleBadge');
  role.textContent = `ROLE: ${w.userRole.toUpperCase()}`;
  role.className = `px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase ${w.roleBadgeColor}`;

  if (!skipPush) navigateTo('creator', { wedding: w.id, module: initialModule });
  return openModule(initialModule, true);
}

export function backToAllWeddings(skipPush = false) {
  document.getElementById('creator-single-workspace')?.classList.add('hidden');
  document.getElementById('creator-all-weddings')?.classList.remove('hidden');
  if (!skipPush) navigateTo('creator');
  renderDirectory();
}
