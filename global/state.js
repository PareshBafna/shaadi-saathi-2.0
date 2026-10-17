import { initHero } from '../pages/home/components/hero/hero.js';
import { initComparison } from '../pages/home/components/comparison/comparison.js';
import { initSuites } from '../pages/home/components/suites/suites.js';
import { initServices } from '../pages/home/services/services.js';
import { initPricing } from '../pages/home/components/pricing/pricing.js';
import { initAddons } from '../pages/home/components/addons/addons.js';
import { initFaq } from '../pages/home/components/faq/faq.js';

function loadCss(href) {
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

async function initAllModules() {
  loadCss('./pages/home/home.css');
  loadCss('./global/components/header/header.css');
  loadCss('./global/components/footer/footer.css');
  loadCss('./global/components/navigation/navigation.css');
  loadCss('./pages/home/components/hero/hero.css');
  loadCss('./pages/home/components/comparison/comparison.css');
  loadCss('./pages/home/components/suites/suites.css');
  loadCss('./pages/home/services/services.css');
  loadCss('./pages/home/components/pricing/pricing.css');
  loadCss('./pages/home/components/addons/addons.css');
  loadCss('./pages/home/components/faq/faq.css');

  document.getElementById('home-header-slot').innerHTML = await (await fetch('./global/components/header/header.html')).text();
  document.getElementById('home-navigation-slot').innerHTML = await (await fetch('./global/components/navigation/navigation.html')).text();

  await initHero('#home-hero-slot');
  await initComparison('#home-comparison-slot');
  await initSuites('#home-suites-slot');
  await initServices('#home-services-slot');
  await initPricing('#home-pricing-slot');
  await initAddons('#home-addons-slot');
  await initFaq('#home-faq-slot');

  document.getElementById('home-footer-slot').innerHTML = await (await fetch('./global/components/footer/footer.html')).text();
}

initAllModules();