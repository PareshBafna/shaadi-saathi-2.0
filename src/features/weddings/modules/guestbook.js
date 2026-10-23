import { guestbookEntries } from '../shared/store.js';
import { esc, ask, uid } from '../shared/ui.js';
import { showToast } from '../../../components/toast.js';

const cardHtml = e => `
  <div class="bg-obsidian p-5 rounded-2xl border border-borderWarm space-y-3">
    <div class="flex justify-between items-center"><strong class="font-serif text-lg text-cream">${esc(e.author)}</strong><span class="text-xs text-gold font-mono">${esc(e.time)}</span></div>
    <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-card text-emeraldSS">${esc(e.relation)}</span>
    <p class="text-sm text-cream italic bg-card p-3.5 rounded-xl border border-borderWarm/60">“${esc(e.text)}”</p>
  </div>`;

export function render(viewport) {
  viewport.innerHTML = `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Blessings Board</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Digital Guestbook Wishes &amp; Aashirwad</h4>
          <p class="text-sm text-muted">Collecting heartfelt messages and wishes from attending guests and outstation family members worldwide.</p>
        </div>
        <button type="button" data-action="addNewGuestbookWishInline" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Blessing Wish</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">${guestbookEntries.map(cardHtml).join('')}</div>
    </div>
  `;
}

export const actions = {
  addNewGuestbookWishInline() {
    const author = ask('Who is this blessing from?');
    if (!author) return false;
    const text = ask('Blessing message?');
    if (!text) return false;
    const relation = ask('Relation (e.g. Family, Friend)?', 'Family') || 'Family';
    guestbookEntries.unshift({ id: uid('b'), author, relation, text, time: 'Just now' });
    showToast('Blessing added');
  }
};
