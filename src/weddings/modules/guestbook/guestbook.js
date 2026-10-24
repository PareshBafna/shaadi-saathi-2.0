import { guestbookEntries } from '../../data/weddings-store.js';

export function renderGuestbookModule(viewport, headerBanner) {
  var cardsHtml = guestbookEntries.map(function(e) {
    return '<div class="bg-obsidian p-5 rounded-2xl border border-borderWarm space-y-3">' +
      '<div class="flex justify-between items-center"><strong class="font-serif text-lg text-cream">' + e.author + '</strong><span class="text-xs text-gold font-mono">' + e.time + '</span></div>' +
      '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-card text-emeraldSS">' + e.relation + '</span>' +
      '<p class="text-sm text-cream italic bg-card p-3.5 rounded-xl border border-borderWarm/60">“' + e.text + '”</p>' +
    '</div>';
  }).join('');

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Blessings Board</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Digital Guestbook Wishes &amp; Aashirwad</h4>
          <p class="text-sm text-muted">Collecting heartfelt messages and wishes from attending guests and outstation family members worldwide.</p>
        </div>
        <button onclick="addNewGuestbookWishInline()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Blessing Wish</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${cardsHtml}
      </div>
    </div>
  `;
}