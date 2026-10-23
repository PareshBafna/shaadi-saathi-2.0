// App shell: header, rail, dock, mode switching (home / weddings / host / guest), click actions.
import { parseHashRoute, navigateTo } from './router.js';
import { showToast } from '../components/toast.js';
import { renderHeader } from '../components/header.js';
import { renderNavigation, setActiveDock } from '../components/navigation.js';
import { renderRail, bindRail } from '../home/scrollbar.js';
import { mountHome } from '../home/home.js';

const ROOTS = ['home', 'creator', 'host', 'guest'];
let current = null;
let homeMounted = false;
let weddings = null;
let updateRail = () => {};

// Weddings feature loads on demand. Missing module => friendly message, no crash.
async function loadWeddings() {
  if (weddings) return weddings;
  try {
    weddings = await import('../features/weddings/weddings.js');
  } catch (err) {
    console.warn('Weddings module not available yet:', err.message);
  }
  return weddings;
}

export async function switchRootMode(mode, skipPush = false) {
  if (!ROOTS.includes(mode)) mode = 'home';

  if (mode === 'creator' && !(await loadWeddings())) {
    showToast('Weddings workspace is moving to the new structure. Next step.');
    return false;
  }

  ROOTS.forEach(m => document.getElementById(`root-${m}`)?.classList.toggle('hidden', m !== mode));
  document.getElementById('rail').classList.toggle('hidden', mode !== 'home');
  setActiveDock(mode);

  if (mode === 'home' && !homeMounted) {
    mountHome(document.getElementById('root-home'));
    homeMounted = true;
  }
  if (mode === 'creator') {
    await weddings.initWeddingsView('#root-creator');
    if (!skipPush) weddings.backToAllWeddings(true);
  }

  if (!skipPush) navigateTo(mode);
  if (mode === 'home') updateRail();
  if (current !== mode) window.scrollTo({ top: 0, behavior: 'smooth' });
  current = mode;
  return true;
}

export async function openWorkspaceDirect(moduleId) {
  const mod = moduleId || 'overview';
  if (!(await switchRootMode('creator', true))) return;
  navigateTo('creator', { wedding: 'w1', module: mod });
  weddings.openWeddingWorkspace('w1', mod, true);
}

async function onRoute() {
  const { mode, wedding, module } = parseHashRoute();
  if (mode === 'home' && current === 'home') return; // in-page anchor like #pricing: let the browser scroll

  const ok = await switchRootMode(mode, true);
  if (!ok) {
    if (current === null) await switchRootMode('home', true);
    return;
  }
  if (mode === 'creator') {
    wedding ? weddings.openWeddingWorkspace(wedding, module, true) : weddings.backToAllWeddings(true);
  }
}

// One click listener for every button: data-go="mode", data-open="module", data-toast="text".
function bindActions() {
  document.addEventListener('click', e => {
    const go = e.target.closest('[data-go]');
    if (go) return switchRootMode(go.dataset.go);

    const open = e.target.closest('[data-open]');
    if (open) return openWorkspaceDirect(open.dataset.open);

    const toast = e.target.closest('[data-toast]');
    if (toast) showToast(toast.dataset.toast);
  });
}

export function initApp() {
  document.getElementById('app-header').innerHTML = renderHeader();
  document.getElementById('rail').innerHTML = renderRail();
  document.getElementById('app-nav').innerHTML = renderNavigation();
  updateRail = bindRail(document.getElementById('rail'));
  bindActions();

  window.addEventListener('hashchange', onRoute);
  window.addEventListener('popstate', onRoute);
  onRoute();
}
