import { initHomePage } from '../home/home.js';
import { initScrollbar } from '../home/components/scrollbar/scrollbar.js';
import { initWeddingsView, openWeddingWorkspace, backToAllWeddings } from '../pages/weddings/weddings.js';
import { rootUrl, parseHashRoute, navigateTo } from './router.js';

export function loadCss(href) {
  const resolved = href.startsWith('./') || href.startsWith('../')
    ? rootUrl(href.replace(/^(\.\/|\.\.\/)+/, ''))
    : href;
  if (document.querySelector(`link[href="${resolved}"]`)) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = resolved;
  document.head.appendChild(l);
}

window.switchRootMode = async function(mode, skipPush = false) {
  ['home', 'creator', 'host', 'guest'].forEach(m => {
    const el = document.getElementById('root-' + m);
    if (el) el.classList.toggle('hidden', m !== mode);
    const d = document.getElementById('dock-' + m);
    if (d) {
      d.className = m === mode
        ? 'flex flex-col items-center justify-center py-2 px-2 rounded-xl text-xs font-bold transition bg-gold text-obsidian shadow'
        : 'flex flex-col items-center justify-center py-2 px-2 rounded-xl text-xs font-semibold text-cream hover:text-gold transition';
    }
  });

  const sbSlot = document.getElementById('home-scrollbar-slot');
  if (sbSlot) sbSlot.classList.toggle('hidden', mode !== 'home');

  if (mode === 'home') {
    await initHomePage('#root-home');
  } else if (mode === 'creator') {
    loadCss('./pages/weddings/weddings.css');
    await initWeddingsView('#root-creator');
    if (!skipPush) {
      backToAllWeddings(true);
    }
  }

  if (!skipPush) {
    navigateTo(mode);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openWorkspaceDirect = async function(moduleId) {
  const mod = moduleId || 'overview';
  await window.switchRootMode('creator', true);
  navigateTo('creator', { wedding: 'w1', module: mod });
  openWeddingWorkspace('w1', mod, true);
};

window.showToast = function(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = msg;
  box.classList.remove('hidden');
  clearTimeout(window._t);
  window._t = setTimeout(() => box.classList.add('hidden'), 2800);
};

async function handleRouting() {
  const { mode, wedding, module } = parseHashRoute();

  await window.switchRootMode(mode, true);

  if (mode === 'creator') {
    if (wedding) {
      openWeddingWorkspace(wedding, module, true);
    } else {
      backToAllWeddings(true);
    }
  }
}

export async function initAllModules() {
  if (window.location.pathname.includes('/weddings')) {
    window.history.replaceState(null, '', rootUrl('') + (window.location.hash || '#weddings'));
  }

  const { mode } = parseHashRoute();

  loadCss('./global/components/header/header.css');
  loadCss('./global/components/footer/footer.css');
  loadCss('./global/components/navigation/navigation.css');

  const navSlot = document.getElementById('home-navigation-slot');
  if (navSlot) navSlot.innerHTML = await (await fetch(rootUrl('global/components/navigation/navigation.html'))).text();

  if (mode === 'home') {
    loadCss('./home/home.css');
    loadCss('./home/components/scrollbar/scrollbar.css');
    loadCss('./home/components/hero/hero.css');
    loadCss('./home/components/comparison/comparison.css');
    loadCss('./home/components/suites/suites.css');
    loadCss('./home/services/services.css');
    loadCss('./home/components/pricing/pricing.css');
    loadCss('./home/components/addons/addons.css');
    loadCss('./home/components/faq/faq.css');

    const headerSlot = document.getElementById('home-header-slot');
    if (headerSlot) headerSlot.innerHTML = await (await fetch(rootUrl('global/components/header/header.html'))).text();
    await initScrollbar('#home-scrollbar-slot');

    const footerSlot = document.getElementById('home-footer-slot');
    if (footerSlot) footerSlot.innerHTML = await (await fetch(rootUrl('global/components/footer/footer.html'))).text();
  }

  await handleRouting();
  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('popstate', handleRouting);
}