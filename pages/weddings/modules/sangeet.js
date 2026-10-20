import { sangeetLineup } from '../data/weddings-store.js';

export function renderSangeetModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Sangeet Lineup &amp; Sequence Table</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr><th>Seq #</th><th>Performer</th><th>Song</th><th>Duration</th><th>Coordinator</th></tr>
          </thead>
          <tbody>
            ${sangeetLineup.map(s => `
              <tr>
                <td class="font-mono font-bold text-gold">${s.seq}</td>
                <td class="font-bold text-cream">${s.group}</td>
                <td class="text-xs text-muted">${s.song}</td>
                <td class="font-mono text-xs">${s.duration}</td>
                <td class="text-emeraldSS font-semibold">${s.coordinator}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}