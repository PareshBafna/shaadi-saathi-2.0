import { formatINR } from '../utils/weddings-helpers.js';

export function renderBudgetModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Master Wedding Budget Allocation</h4>
    </div>
  `;
}