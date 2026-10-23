import { formatINR } from '../shared/helpers.js';

export function render(viewport) {
  const budgetItems = [
    { id: 'b-1', category: 'Venue & Accommodation', allocated: 2500000, spent: 2200000, status: 'On Track' },
    { id: 'b-2', category: 'Catering & Food', allocated: 1800000, spent: 1750000, status: 'On Track' },
    { id: 'b-3', category: 'Decor & Floral', allocated: 1200000, spent: 1300000, status: 'Over Budget' },
    { id: 'b-4', category: 'Photography & Films', allocated: 600000, spent: 550000, status: 'Saved' }
  ];

  const totalAllocated = budgetItems.reduce((s, x) => s + x.allocated, 0);
  const totalSpent = budgetItems.reduce((s, x) => s + x.spent, 0);

  viewport.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Allocated Budget</span><strong class="text-2xl text-gold">${formatINR(totalAllocated)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Spent Outflow</span><strong class="text-2xl text-emeraldSS">${formatINR(totalSpent)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Variance / Balance</span><strong class="text-2xl text-skySS">${formatINR(totalAllocated - totalSpent)}</strong></div>
    </div>

    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Financial Control</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Master Wedding Budget Allocation</h4>
        </div>
        <button type="button" data-toast="Opened budget allocator" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Expense Category</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Allocated Budget</th>
              <th>Actual Spent</th>
              <th>Variance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${budgetItems.map(b => `
              <tr>
                <td class="font-bold text-cream">${b.category}</td>
                <td class="font-mono text-gold">${formatINR(b.allocated)}</td>
                <td class="font-mono text-cream">${formatINR(b.spent)}</td>
                <td class="font-mono text-emeraldSS">${formatINR(b.allocated - b.spent)}</td>
                <td><span class="px-2.5 py-1 rounded text-xs font-bold bg-obsidian text-gold border border-borderWarm">${b.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}