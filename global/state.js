// global/state.js
import { initHero } from '../home/components/hero/hero.js';
import { initComparison } from '../home/components/comparison/comparison.js';
import { initSuites } from '../home/components/suites/suites.js';
import { initScrollbar } from '../home/components/scrollbar/scrollbar.js';
import { initServices } from '../home/services/services.js';
import { initPricing } from '../home/components/pricing/pricing.js';
import { initAddons } from '../home/components/addons/addons.js';
import { initFaq } from '../home/components/faq/faq.js';
import { initWeddingsView, openWeddingWorkspace, backToAllWeddings } from '../pages/weddings/weddings.js';
import { getRouteMode, navigateTo } from './router.js';

const SITE_ROOT = new URL('./', import.meta.url);
function rootUrl(relPath) {
  const clean = relPath.replace(/^\.\//, '');
  return new URL('../' + clean, SITE_ROOT).pathname;
}

export function loadCss(href) {
  const resolved = href.startsWith('./') ? rootUrl(href) : href;
  if (document.querySelector(`link[href="${resolved}"]`)) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = resolved;
  document.head.appendChild(l);
}

async function ensureCreatorLoaded() {
  loadCss('./pages/weddings/weddings.css');
  const creatorEl = document.getElementById('root-creator');
  if (creatorEl && !creatorEl.children.length) {
    const res = await fetch(rootUrl('./pages/weddings/weddings.html'));
    creatorEl.innerHTML = await res.text();
    initWeddingsView();
  }
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

  if (mode === 'creator') {
    await ensureCreatorLoaded();
    backToAllWeddings(true);
  }

  if (!skipPush) {
    navigateTo(mode);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openWorkspaceDirect = async function(moduleId) {
  await window.switchRootMode('creator', true);
  navigateTo('creator', 'w1', moduleId || 'overview');
  openWeddingWorkspace('w1', moduleId || 'overview', true);
};

window.showToast = function(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = msg;
  box.classList.remove('hidden');
  clearTimeout(window._t);
  window._t = setTimeout(() => box.classList.add('hidden'), 2800);
};

async function handleRouting(event) {
  const st = event?.state || window.history.state || {};
  const mode = st.mode || getRouteMode();

  if (mode === 'creator') {
    await window.switchRootMode('creator', true);
    if (st.wedding) {
      openWeddingWorkspace(st.wedding, st.module || 'overview', true);
    } else {
      backToAllWeddings(true);
    }
  } else if (mode === 'host') {
    await window.switchRootMode('host', true);
  } else if (mode === 'guest') {
    await window.switchRootMode('guest', true);
  } else {
    await window.switchRootMode('home', true);
  }
}

export async function initAllModules() {
  const initialPath = window.location.pathname;
  if (initialPath !== rootUrl('./index.html').replace(/index\.html$/, '')) {
    window.history.replaceState({ mode: getRouteMode(initialPath) }, '', initialPath);
  }

  loadCss('./home/home.css');
  loadCss('./global/components/header/header.css');
  loadCss('./global/components/footer/footer.css');
  loadCss('./global/components/navigation/navigation.css');
  loadCss('./home/components/scrollbar/scrollbar.css');
  loadCss('./home/components/hero/hero.css');
  loadCss('./home/components/comparison/comparison.css');
  loadCss('./home/components/suites/suites.css');
  loadCss('./home/services/services.css');
  loadCss('./home/components/pricing/pricing.css');
  loadCss('./home/components/addons/addons.css');
  loadCss('./home/components/faq/faq.css');

  document.getElementById('home-header-slot').innerHTML = await (await fetch(rootUrl('./global/components/header/header.html'))).text();
  document.getElementById('home-navigation-slot').innerHTML = await (await fetch(rootUrl('./global/components/navigation/navigation.html'))).text();

  await initHero('#home-hero-slot');
  await initComparison('#home-comparison-slot');
  await initSuites('#home-suites-slot');
  await initServices('#home-services-slot');
  await initPricing('#home-pricing-slot');
  await initAddons('#home-addons-slot');
  await initFaq('#home-faq-slot');
  await initScrollbar('#home-scrollbar-slot');

  document.getElementById('home-footer-slot').innerHTML = await (await fetch(rootUrl('./global/components/footer/footer.html'))).text();

  await handleRouting();
  window.addEventListener('popstate', handleRouting);
}