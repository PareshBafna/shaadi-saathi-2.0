// Shared screen for Flights and Trains. Each module passes its own config.
import { guests } from './store.js';
import { esc, editInput } from './ui.js';
import { showToast } from '../../../components/toast.js';

const paxOf = list => list.reduce((s, x) => s + Number(x.pax || 1), 0);

function groupBy(list, keyFn) {
  const groups = {};
  list.forEach(g => (groups[keyFn(g)] ||= []).push(g));
  return Object.entries(groups);
}

const groupCard = (color, badge, icon, label, list) => `
  <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
    <div><strong class="text-sm ${color} block">${icon} ${esc(label)}</strong><span class="text-xs text-muted">${list.map(x => esc(x.name)).join(', ')}</span></div>
    <span class="px-2.5 py-1 rounded ${badge} text-xs font-bold">${paxOf(list)} Pax</span>
  </div>`;

const column = (spec, title, entries) => `
  <div class="bento-card p-5 space-y-3">
    <span class="text-xs font-mono uppercase ${spec.titleColor} font-bold">${title}</span>
    ${entries.map(([label, list]) => groupCard(spec.nameColor, spec.badge, spec.icon, label, list)).join('')}
  </div>`;

export function renderTravelManifest(viewport, cfg) {
  const list = guests.filter(cfg.include);
  const d = cfg.defaults;
  const tr = g => g.travel || {};

  const byRoute = groupBy(list, g => `${tr(g).fromCity || d.from} → ${tr(g).toCity || d.to}`);
  const byNumber = groupBy(list, g => tr(g).number || d.number);
  const byDate = groupBy(list, g => `${tr(g).date || d.date} (${tr(g).arrivalTime || 'Time TBD'})`);

  const pending = cfg.pending
    ? list.filter(g => !g.travel || !g.travel.number || !g.travel.pnr || g.travel.pnr === 'Pending')
    : [];

  const pendingBox = cfg.pending ? `
    <div class="bento-card p-5 space-y-3 border-amberSS/40">
      <div class="flex justify-between items-center">
        <h4 class="font-serif text-xl font-bold text-cream">⏳ ${cfg.pending.title} (${pending.length})</h4>
        <span class="text-xs text-amberSS font-bold">Follow up for ticket copy</span>
      </div>
      ${pending.length === 0
        ? `<p class="text-xs text-emeraldSS font-bold">${cfg.pending.allDone}</p>`
        : `<div class="flex flex-wrap gap-3">${pending.map(u => `
          <div class="bg-obsidian px-4 py-2 rounded-xl border border-amberSS/40 text-xs"><strong class="text-cream">${esc(u.name)} (${esc(u.pax)} Pax)</strong> • ${esc(tr(u).fromCity || 'Origin TBD')} → ${esc(tr(u).toCity || 'Udaipur')}</div>`).join('')}</div>`}
    </div>` : '';

  const field = (g, t, key, fallback, cls) =>
    `<td>${editInput({ action: 'updateTravelFieldInline', args: [g.id, key, cfg.mode], value: t[key] || fallback, cls: `text-xs ${cls}` })}</td>`;

  const rows = list.map(g => {
    const t = g.travel || cfg.rowDefault;
    return `
      <tr>
        <td class="font-bold text-cream">${esc(g.name)}</td>
        <td class="font-mono ${cfg.paxColor}">${esc(g.pax)}</td>
        ${field(g, t, 'fromCity', '', '')}
        ${field(g, t, 'toCity', d.to, '')}
        ${field(g, t, 'number', '', `font-bold ${cfg.numberColor}`)}
        ${field(g, t, 'date', d.date, '')}
        ${field(g, t, 'arrivalTime', '', 'text-emeraldSS font-bold')}
        ${field(g, t, 'pnr', '', 'font-mono text-gold')}
      </tr>`;
  }).join('');

  viewport.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      ${column(cfg.columns[0], cfg.columns[0].title, byRoute)}
      ${column(cfg.columns[1], cfg.columns[1].title, byNumber)}
      ${column(cfg.columns[2], cfg.columns[2].title, byDate)}
    </div>
    ${pendingBox}
    <div class="bento-card p-6 space-y-4">
      <h4 class="font-serif text-2xl font-bold text-cream">${cfg.table.title}</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead><tr>${cfg.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

// Edits to the manifest table. Needs the same config as the screen.
export const createTravelActions = cfg => ({
  updateTravelFieldInline(guestId, field, _mode, val) {
    const g = guests.find(x => x.id === guestId);
    if (!g) return false;
    if (!g.travel) g.travel = { ...cfg.rowDefault };
    g.travel.mode = cfg.mode;
    g.travel[field] = val;
    showToast(`Updated ${g.name} travel (${field})`);
  }
});
