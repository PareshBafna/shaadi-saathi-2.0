import { HOME_SERVICE_SLUGS } from '../pages/home/api/home-api.js';
import { initHero } from '../pages/home/components/hero/hero.js';
import { initComparison } from '../pages/home/components/comparison/comparison.js';
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
  loadCss('./pages/home/components/hero/hero.css');
  loadCss('./pages/home/components/comparison/comparison.css');
  loadCss('./pages/home/services/services.css');
  loadCss('./pages/home/components/pricing/pricing.css');
  loadCss('./pages/home/components/addons/addons.css');
  loadCss('./pages/home/components/faq/faq.css');

  await initHero('#home-hero-slot');
  await initComparison('#home-comparison-slot');

  document.getElementById('home-services-slot').innerHTML = await (await fetch('./pages/home/services/services.html')).text();
  const container = document.getElementById('servicesDeepDivesContainer');
  if (container) {
    for (const slug of HOME_SERVICE_SLUGS) {
      loadCss(`./pages/home/services/${slug}/${slug}.css`);
      const res = await fetch(`./pages/home/services/${slug}/${slug}.html`);
      const wrap = document.createElement('div');
      wrap.innerHTML = await res.text();
      container.appendChild(wrap);
    }
  }

  await initPricing('#home-pricing-slot');
  await initAddons('#home-addons-slot');
  await initFaq('#home-faq-slot');
}

initAllModules();