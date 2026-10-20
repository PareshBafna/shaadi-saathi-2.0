import { vendors } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';

export function renderVendorsModule() {
  const categories = [...new Set(vendors.map(v => v.category))];

  return renderModuleHeader('vendors') + `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${categories.map(cat => {
        const catVendors = vendors.filter(v => v.category === cat);
        return `
          <div class="bento-card p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-borderWarm pb-3">
              <div>
                <span class="text-xs font-mono uppercase text-gold">Vendor Category</span>
                <h4 class="font-serif text-2xl font-bold text-cream">${cat}</h4>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold">${catVendors.length} ${catVendors.length > 1 ? 'Vendors' : 'Vendor'}</span>
            </div>

            <div class="space-y-3">
              ${catVendors.map(v => `
                <div class="bg-obsidian border border-borderWarm rounded-2xl p-4 space-y-2.5">
                  <div class="flex justify-between items-start">
                    <div>
                      <h5 class="font-serif text-xl font-bold text-cream">${v.vendor}</h5>
                      <span class="text-xs text-muted block">Lead: <strong class="text-cream">${v.contactPerson}</strong> • 📞 <span class="font-mono text-gold">${v.phone}</span></span>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center gap-1.5 pt-1">
                    <span class="text-[11px] text-muted mr-1">📅 Assigned Dates:</span>
                    ${(v.assignedDates || []).map(d => `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS border border-emeraldSS/30">${d}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}