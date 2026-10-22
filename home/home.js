import { initHero } from './components/hero/hero.js';
import { initComparison } from './components/comparison/comparison.js';
import * as suitesMod from './components/suites/suites.js';
import * as servicesMod from './services/services.js';
import { initPricing } from './components/pricing/pricing.js';
import { initAddons } from './components/addons/addons.js';
import { initFaq } from './components/faq/faq.js';
import { rootUrl } from '../global/router.js';

export async function initHomePage(rootSelector = '#root-home') {
  const rootEl = document.querySelector(rootSelector);
  if (rootEl && !document.getElementById('home-hero-slot')) {
    const res = await fetch(rootUrl('home/home.html'));
    rootEl.innerHTML = await res.text();
  }

  // Ensure #home-suites-slot exists even if index.html had hardcoded slots without it
  if (!document.getElementById('home-suites-slot')) {
    const compSlot = document.getElementById('home-comparison-slot');
    if (compSlot) {
      const suitesDiv = document.createElement('div');
      suitesDiv.id = 'home-suites-slot';
      compSlot.insertAdjacentElement('afterend', suitesDiv);
    }
  }

  // Ensure #home-services-slot exists
  if (!document.getElementById('home-services-slot')) {
    const anchor = document.getElementById('home-suites-slot') || document.getElementById('home-comparison-slot');
    if (anchor) {
      const servicesDiv = document.createElement('div');
      servicesDiv.id = 'home-services-slot';
      anchor.insertAdjacentElement('afterend', servicesDiv);
    }
  }

  const runSuites = suitesMod.initSuites || suitesMod.renderSuites || suitesMod.default;
  const runServices = servicesMod.initServices || servicesMod.renderServices || servicesMod.default;

  await Promise.all([
    initHero('#home-hero-slot'),
    initComparison('#home-comparison-slot'),
    typeof runSuites === 'function' ? runSuites('#home-suites-slot') : Promise.resolve(),
    typeof runServices === 'function' ? runServices('#home-services-slot') : Promise.resolve(),
    initPricing('#home-pricing-slot'),
    initAddons('#home-addons-slot'),
    initFaq('#home-faq-slot')
  ]);
}