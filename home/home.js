import { initHero } from './components/hero/hero.js';
import { initComparison } from './components/comparison/comparison.js';
import { initSuites } from './components/suites/suites.js';
import { initServices } from './services/services.js';
import { initPricing } from './components/pricing/pricing.js';
import { initAddons } from './components/addons/addons.js';
import { initFaq } from './components/faq/faq.js';

const HOME_TEMPLATE = `
  <div class="hp w-full">
    <div id="home-hero-slot"></div>
    <div id="home-comparison-slot"></div>
    <div id="home-suites-slot"></div>
    <div id="home-services-slot"></div>
    <div id="home-pricing-slot"></div>
    <div id="home-addons-slot"></div>
    <div id="home-faq-slot"></div>

    <footer class="border-t border-borderWarm py-12 bg-obsidian">
      <div class="hp-wrap grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span class="font-serif italic text-2xl font-bold gold-text">Shaadi Saathi</span>
          <p class="mt-2 text-sm text-muted">Complete Wedding Hospitality &amp; Planning OS.</p>
        </div>
        <div class="space-y-2 text-sm">
          <h4 class="font-sans font-bold text-cream">Explore</h4>
          <a href="#all-services-deepdives" class="block text-muted hover:text-gold">All Services</a>
          <a href="#pricing" class="block text-muted hover:text-gold">Pricing &amp; Add-Ons</a>
          <a href="#faq" class="block text-muted hover:text-gold">FAQ</a>
        </div>
        <div class="space-y-2 text-sm">
          <h4 class="font-sans font-bold text-cream">Switch Role Portal</h4>
          <button onclick="switchRootMode('creator')" class="block text-gold font-bold hover:underline">👑 Open Planner OS (All Weddings by Role)</button>
          <button onclick="switchRootMode('host')" class="block text-muted hover:text-gold">🏠 Open Family Host Portal</button>
          <button onclick="switchRootMode('guest')" class="block text-muted hover:text-gold">🎟️ Open Private Guest Pass</button>
        </div>
      </div>
    </footer>
  </div>
`;

export async function initHomePage(selector = '#root-home') {
  const root = document.querySelector(selector);
  if (root && !root.querySelector('#home-hero-slot')) {
    root.innerHTML = HOME_TEMPLATE;
  }

  if (root && root.dataset.initialized === 'true') return;
  if (root) root.dataset.initialized = 'true';

  await Promise.all([
    initHero('#home-hero-slot'),
    initComparison('#home-comparison-slot'),
    initSuites('#home-suites-slot'),
    initServices('#home-services-slot'),
    initPricing('#home-pricing-slot'),
    initAddons('#home-addons-slot'),
    initFaq('#home-faq-slot')
  ]);
}