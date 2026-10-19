import { initHero } from '../home/components/hero/hero.js';
import { initComparison } from '../home/components/comparison/comparison.js';
import { initSuites } from '../home/components/suites/suites.js';
import { initScrollbar } from '../home/components/scrollbar/scrollbar.js';
import { initServices } from '../home/services/services.js';
import { initPricing } from '../home/components/pricing/pricing.js';
import { initAddons } from '../home/components/addons/addons.js';
import { initFaq } from '../home/components/faq/faq.js';

export function loadCss(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  document.head.appendChild(l);
}

window.switchRootMode = function(mode) {
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openWorkspaceDirect = function(moduleId) {
  console.log('Open module:', moduleId);
};

window.showToast = function(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = msg;
  box.classList.remove('hidden');
  clearTimeout(window._t);
  window._t = setTimeout(() => box.classList.add('hidden'), 2800);
};

export async function initAllModules() {
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

  document.getElementById('home-header-slot').innerHTML = await (await fetch('./global/components/header/header.html')).text();
  document.getElementById('home-navigation-slot').innerHTML = await (await fetch('./global/components/navigation/navigation.html')).text();

  await initHero('#home-hero-slot');
  await initComparison('#home-comparison-slot');
  await initSuites('#home-suites-slot');
  await initServices('#home-services-slot');
  await initPricing('#home-pricing-slot');
  await initAddons('#home-addons-slot');
  await initFaq('#home-faq-slot');
  await initScrollbar('#home-scrollbar-slot');

  document.getElementById('home-footer-slot').innerHTML = await (await fetch('./global/components/footer/footer.html')).text();
}