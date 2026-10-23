import { shagunLedger } from '../shared/store.js';
import { formatINR } from '../shared/helpers.js';
import { statGrid, tableCard, esc, ask, uid, todayLabel } from '../shared/ui.js';
import { showToast } from '../../../components/toast.js';

const rowHtml = s => `
  <tr>
    <td class="font-bold text-cream">${esc(s.giver)}</td>
    <td class="font-mono text-gold font-bold">${formatINR(s.amount)}</td>
    <td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-skySS border border-borderWarm">${esc(s.item)}</span></td>
    <td class="text-xs text-muted">${esc(s.date)}</td>
    <td class="text-xs text-emeraldSS">${esc(s.notes)}</td>
  </tr>`;

export function render(viewport) {
  const total = shagunLedger.reduce((sum, x) => sum + x.amount, 0);
  viewport.innerHTML = statGrid([
    ['Total Shagun Collected', formatINR(total), 'text-gold'],
    ['Total Entries', `${shagunLedger.length} Families`, 'text-emeraldSS'],
    ['Ledger Status', 'Verified &amp; Locked', 'text-skySS']
  ]) + tableCard({
    kicker: 'Gifts &amp; Envelopes Ledger',
    title: 'Shagun &amp; Aashirwad Register',
    desc: 'Track traditional monetary envelopes, gift items, and return gift obligations.',
    action: 'addNewShagunEntryInline',
    actionLabel: '+ Add Shagun Entry',
    headers: ['Giver Family', 'Amount', 'Item / Gift', 'Date', 'Ceremony / Notes'],
    rows: shagunLedger.map(rowHtml).join('')
  });
}

export const actions = {
  addNewShagunEntryInline() {
    const giver = ask('Giver family name?');
    if (!giver) return false;
    const amount = Number(ask('Amount in ₹ (0 if gift only)?', '0')) || 0;
    const item = ask('Item / gift?', amount ? 'Cash Envelope' : 'Gift') || 'Gift';
    const notes = ask('Ceremony / notes?', '') || '';
    shagunLedger.push({ id: uid('sh'), giver, amount, item, date: todayLabel(), notes });
    showToast(`Added shagun from ${giver}`);
  }
};
