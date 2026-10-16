import { initHero } from './components/hero/hero.js';
import { initComparison } from './components/comparison/comparison.js';
import { initServices } from './components/services/services.js';
import { initPricing } from './components/pricing/pricing.js';
import { initFaq } from './components/faq/faq.js';

export async function initHomePage() {
  await Promise.all([
    initHero('#home-hero-slot'),
    initComparison('#home-comparison-slot'),
    initServices('#home-services-slot'),
    initPricing('#home-pricing-slot'),
    initFaq('#home-faq-slot')
  ]);
}