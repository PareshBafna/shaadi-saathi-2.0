import { guestbookEntries } from '../data/weddings-store.js';

export function renderGuestbookModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Digital Guestbook Wishes</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${guestbookEntries.map(e => `
          <div class="bg-obsidian p-5 rounded-2xl border border-borderWarm space-y-3">
            <div class="flex justify-between items-center"><strong class="font-serif text-lg text-cream">${e.author}</strong><span class="text-xs text-gold font-mono">${e.time}</span></div>
            <p class="text-sm text-cream italic bg-card p-3.5 rounded-xl border border-borderWarm/60">“${e.text}”</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}