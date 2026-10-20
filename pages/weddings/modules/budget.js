import { vendors, AVAILABLE_WEDDING_DATES } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { formatINR, computeLiveTelemetry, showToast } from '../utils/weddings-helpers.js';

export function renderBudgetModule(onRefresh) {
  const t = computeLiveTelemetry();
  const categories = [...new Set(vendors.map(v => v.category))];

  const html = renderModuleHeader('budget') + `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Planned Budget</span><strong class="text-2xl text-cream">${formatINR(t.budgetTotal)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Advance Paid</span><strong class="text-2xl text-emeraldSS">${formatINR(t.budgetPaid)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Remaining Balance Due</span><strong class="text-2xl text-amberSS">${formatINR(t.budgetTotal - t.budgetPaid)}</strong></div>
    </div>

    <div class="space-y-6">
      ${categories.map(cat => {
        const catVendors = vendors.filter(v => v.category === cat);
        const catTotal = catVendors.reduce((s, v) => s + v.total, 0);
        const catPaid = catVendors.reduce((s, v) => s + v.paid, 0);

        return `
          <div class="bento-card p-6 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderWarm pb-3">
              <div>
                <span class="text-xs font-mono uppercase text-gold">Budget Category Group</span>
                <h4 class="font-serif text-2xl font-bold text-cream">${cat} (${catVendors.length})</h4>
              </div>
              <div class="text-right text-xs">
                <span class="text-muted block">Category Total: <strong class="text-cream">${formatINR(catTotal)}</strong></span>
                <span class="text-emeraldSS font-bold">Paid: ${formatINR(catPaid)} • Due: ${formatINR(catTotal - catPaid)}</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              ${catVendors.map(v => {
                const due = Math.max(0, v.total - v.paid);
                const pct = Math.round((v.paid / v.total) * 100);
                return `
                  <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-4">
                    <div class="flex justify-between items-start gap-2">
                      <div>
                        <h5 class="font-serif text-2xl font-bold text-cream">${v.vendor}</h5>
                        <p class="text-xs text-muted mt-0.5">👤 Contact: <strong class="text-cream">${v.contactPerson}</strong> • 📞 <span class="font-mono text-gold">${v.phone}</span></p>
                        <p class="text-xs text-muted">✉️ ${v.email}</p>
                      </div>
                      <span class="px-3 py-1 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS shrink-0">${pct}% Paid</span>
                    </div>

                    <div class="space-y-1.5">
                      <span class="text-[11px] font-bold uppercase text-gold block">Assigned Dates:</span>
                      <div class="flex flex-wrap gap-1.5">
                        ${AVAILABLE_WEDDING_DATES.map(dt => {
                          const isAssigned = (v.assignedDates || []).includes(dt);
                          return `
                            <button data-vendorid="${v.id}" data-date="${dt}" class="btn-toggle-vdate px-2.5 py-1 rounded-lg text-xs font-bold border transition ${
                              isAssigned ? 'bg-gold text-obsidian border-gold' : 'bg-card border-borderWarm text-muted hover:text-cream'
                            }">
                              ${isAssigned ? '✓ ' : ''}${dt.replace(' 2026', '')}
                            </button>
                          `;
                        }).join('')}
                      </div>
                    </div>

                    <div class="grid grid-cols-3 gap-2 pt-3 border-t border-borderWarm text-xs">
                      <div>
                        <span class="text-muted block mb-1">Total Contract (₹)</span>
                        <input type="number" step="10000" data-vendorid="${v.id}" data-field="total" value="${v.total}" class="budget-inp ss-input font-mono text-xs" />
                      </div>
                      <div>
                        <span class="text-muted block mb-1">Advance Paid (₹)</span>
                        <input type="number" step="10000" data-vendorid="${v.id}" data-field="paid" value="${v.paid}" class="budget-inp ss-input font-mono text-xs text-emeraldSS font-bold" />
                      </div>
                      <div>
                        <span class="text-muted block mb-1">Balance Due</span>
                        <div class="ss-input font-mono text-xs text-amberSS font-bold bg-card/50">${formatINR(due)}</div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  setTimeout(() => {
    document.querySelectorAll('.btn-toggle-vdate').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = vendors.find(x => x.id === btn.dataset.vendorid);
        if (v) {
          if (!v.assignedDates) v.assignedDates = [];
          if (v.assignedDates.includes(btn.dataset.date)) {
            v.assignedDates = v.assignedDates.filter(d => d !== btn.dataset.date);
          } else {
            v.assignedDates.push(btn.dataset.date);
          }
          showToast(`Updated dates for ${v.vendor}`);
          onRefresh();
        }
      });
    });

    document.querySelectorAll('.budget-inp').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const v = vendors.find(x => x.id === e.target.dataset.vendorid);
        if (v) {
          v[e.target.dataset.field] = Math.max(0, parseInt(e.target.value, 10) || 0);
          showToast(`Updated ${v.vendor} budget`);
          onRefresh();
        }
      });
    });
  }, 0);

  return html;
}