// Home page: builds every section, then wires the interactive ones.
import { renderHero, bindHero } from './hero.js';
import { renderComparison } from './comparison.js';
import { renderSuites, bindSuites } from './suites.js';
import { renderDeepDives } from './deep-dives.js';
import { renderPricing } from './pricing.js';
import { renderAddons, bindAddons } from './addons.js';
import { renderFaq, bindFaq } from './faq.js';
import { renderFooter } from '../components/footer.js';

export function mountHome(root) {
  root.innerHTML = [
    renderHero(),
    renderComparison(),
    renderSuites(),
    renderDeepDives(),
    renderPricing(),
    renderAddons(),
    renderFaq(),
    renderFooter()
  ].join('');

  bindHero(root);
  bindSuites(root);
  bindAddons(root);
  bindFaq(root);
}
