import { initHeader } from '../../global/components/header/header.js';
import { initFooter } from '../../global/components/footer/footer.js';
import { initHero } from './components/hero/hero.js';
import { initComparison } from './components/comparison/comparison.js';
import * as suitesMod from './components/suites/suites.js';
import * as featuresMod from './features/features.js';
import { initPricing } from './components/pricing/pricing.js';
import { initAddons } from './components/addons/addons.js';
import { initFaq } from './components/faq/faq.js';

const htmlTemplate = `<div class="hp w-full">
  <div id="home-header-slot"></div>
  <div id="home-hero-slot"></div>
  <div id="home-comparison-slot"></div>
  <div id="home-suites-slot"></div>
  <div id="home-features-slot"></div>
  <div id="home-pricing-slot"></div>
  <div id="home-addons-slot"></div>
  <div id="home-faq-slot"></div>
  <div id="home-footer-slot"></div>
</div>`;

if (typeof window !== 'undefined' && !window.__ssExploreBound) {
  window.__ssExploreBound = true;
  document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('a[href^="#"], button, .btn, [data-scroll]');
    if (!targetBtn) return;

    const href = targetBtn.getAttribute('href');
    const text = (targetBtn.textContent || '').trim().toLowerCase();

    if (href && href.startsWith('#') && href.length > 1) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (text.includes('explore features')) {
      e.preventDefault();
      const featuresEl = document.querySelector('#home-features-slot') || document.querySelector('#grouped-features') || document.querySelector('#all-features-deepdives');
      if (featuresEl) {
        featuresEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

export async function initHomePage(rootSelector = '#root-home') {
  const rootEl = document.querySelector(rootSelector);
  if (rootEl && !document.getElementById('home-hero-slot')) {
    rootEl.innerHTML = htmlTemplate;
  }

  if (!document.getElementById('home-suites-slot')) {
    const compSlot = document.getElementById('home-comparison-slot');
    if (compSlot) {
      const suitesDiv = document.createElement('div');
      suitesDiv.id = 'home-suites-slot';
      compSlot.insertAdjacentElement('afterend', suitesDiv);
    }
  }

  if (!document.getElementById('home-features-slot')) {
    const anchor = document.getElementById('home-suites-slot') || document.getElementById('home-comparison-slot');
    if (anchor) {
      const featuresDiv = document.createElement('div');
      featuresDiv.id = 'home-features-slot';
      anchor.insertAdjacentElement('afterend', featuresDiv);
    }
  }

  const runSuites = suitesMod.initSuites || suitesMod.renderSuites || suitesMod.default;
  const runFeatures = featuresMod.initFeatures || featuresMod.renderFeaturess || featuresMod.default;

  await Promise.all([
    initHeader('#home-header-slot'),
    initHero('#home-hero-slot'),
    initComparison('#home-comparison-slot'),
    typeof runSuites === 'function' ? runSuites('#home-suites-slot') : Promise.resolve(),
    typeof runFeatures === 'function' ? runFeatures('#home-features-slot') : Promise.resolve(),
    initPricing('#home-pricing-slot'),
    initAddons('#home-addons-slot'),
    initFaq('#home-faq-slot'),
    initFooter('#home-footer-slot')
  ]);
}