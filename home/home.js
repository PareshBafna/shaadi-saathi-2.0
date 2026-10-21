import { initHero } from './components/hero/hero.js';
import { initComparison } from './components/comparison/comparison.js';
import { initPricing } from './components/pricing/pricing.js';
import { initAddons } from './components/addons/addons.js';
import { initFaq } from './components/faq/faq.js';

export async function initHomePage() {
  await Promise.all([
    initHero('#home-hero-slot'),
    initComparison('#home-comparison-slot'),
    initPricing('#home-pricing-slot'),
    initAddons('#home-addons-slot'),
    initFaq('#home-faq-slot')
  ]);
}