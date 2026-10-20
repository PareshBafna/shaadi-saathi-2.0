import { guestbookEntries } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { showToast } from '../utils/weddings-helpers.js';

export function renderGuestbookModule(onRefresh) {
  const html = renderModuleHeader('guestbook') + `
    <div class="bento-card p-6 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h4 class="font-serif text-2xl font-bold text-cream">Family Blessings &amp; Wishes Wall</h4>
        <button id="btn-post-blessing" class="btn-gold px-4 py-2 rounded-xl text-xs font-bold">+ Post Blessing</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${guestbookEntries.map(e => `
          <div class="bg-obsidian border border-borderWarm rounded-2xl p-5 space-y-2">
            <p class="font-serif italic text-xl text-cream">"${e.text}"</p>
            <div class="pt-2 border-t border-borderWarm flex justify-between text-xs">
              <strong class="text-gold">${e.author}</strong>
              <span class="text-muted">${e.time}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById('btn-post-blessing')?.addEventListener('click', () => {
      guestbookEntries.unshift({
        author: 'Suresh Patel',
        relation: 'Groom Side Family',
        time: 'Just now',
        text: 'May Lord Ganesha bless Aarav & Ananya with eternal happiness!'
      });
      showToast('Added family blessing to Guestbook');
      onRefresh();
    });
  }, 0);

  return html;
}