import { workspaceUsers } from '../data/weddings-store.js';

export function renderTeamAccessModule(viewport, headerBanner) {
    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${workspaceUsers.map(u => `
          <div class="bento-card p-6 flex items-center justify-between gap-4">
            <div>
              <h4 class="font-serif text-2xl font-bold text-cream">${u.name}</h4>
              <p class="text-sm text-muted mt-1">${u.access}</p>
            </div>
            <span class="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-gold/20 text-gold shrink-0">${u.role}</span>
          </div>
        `).join('')}
      </div>
    `;
}
