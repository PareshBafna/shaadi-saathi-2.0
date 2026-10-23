import { vendors } from '../shared/store.js';
import { formatINR } from '../shared/helpers.js';
import { statGrid, tableCard, editInput, esc, uid } from '../shared/ui.js';
import { showToast } from '../../../components/toast.js';

const badge = due => due <= 0
  ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emeraldSS/20 text-emeraldSS">✓ Paid Full</span>'
  : `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">⏳ Due ${formatINR(due)}</span>`;

const input = (v, field, cls, type = 'text') =>
  `<td>${editInput({ action: 'updateVendorFieldInline', args: [v.id, field], value: v[field], cls: `text-xs ${cls}`, type })}</td>`;

const rowHtml = v => `
  <tr>
    ${input(v, 'name', 'font-bold text-cream')}
    <td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-gold border border-borderWarm">${esc(v.category)}</span></td>
    ${input(v, 'contact', 'font-mono')}
    ${input(v, 'cost', 'font-mono text-gold', 'number')}
    ${input(v, 'paid', 'font-mono text-emeraldSS', 'number')}
    <td>${badge(v.cost - v.paid)}</td>
  </tr>`;

export function render(viewport) {
  const cost = vendors.reduce((s, v) => s + v.cost, 0);
  const paid = vendors.reduce((s, v) => s + v.paid, 0);
  viewport.innerHTML = statGrid([
    ['Total Vendor Contracts', formatINR(cost), 'text-gold'],
    ['Total Paid Out', formatINR(paid), 'text-emeraldSS'],
    ['Balance Due', formatINR(cost - paid), 'text-amberSS']
  ]) + tableCard({
    kicker: 'Supplier Management',
    title: 'Wedding Vendors &amp; Payout Ledger',
    desc: 'Manage caterers, decorators, photographers, makeup artists, and payment milestones.',
    action: 'addNewVendorInline',
    actionLabel: '+ Add Vendor Contract',
    headers: ['Vendor / Company Name', 'Category', 'Contact Person / Phone', 'Agreed Cost', 'Amount Paid', 'Payment Status'],
    rows: vendors.map(rowHtml).join('')
  });
}

export const actions = {
  addNewVendorInline() {
    vendors.push({ id: uid('v'), name: 'New Vendor', category: 'General', contact: '', cost: 0, paid: 0 });
    showToast('Vendor row added');
  },

  updateVendorFieldInline(id, field, val) {
    const v = vendors.find(x => x.id === id);
    if (!v) return false;
    if (field === 'cost' || field === 'paid') v[field] = Math.max(0, Number(val) || 0);
    else v[field] = val;
    return field === 'cost' || field === 'paid' ? undefined : false; // money changes totals, text does not
  }
};
