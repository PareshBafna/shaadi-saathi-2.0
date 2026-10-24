import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/guests/guests.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">GUEST</span>
        <h2>Privacy-first invite tiers: control who sees which event</h2>
        <p class="mt-3">Not every guest is invited to every function. Assign families to Variant A, B, or C in the live guest table&mdash;their digital pass automatically hides uninvited events so nobody feels awkward.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('rsvp')" class="hp-link">👥 Open Editable Guest Table →</button></div>
      </div>
      <div class="bento-card p-5 overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-borderWarm text-gold uppercase">
              <th class="py-2.5">Invite Tier</th>
              <th class="py-2.5 text-center">Haldi</th>
              <th class="py-2.5 text-center">Mehendi</th>
              <th class="py-2.5 text-center">Sangeet</th>
              <th class="py-2.5 text-center">Reception</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-borderWarm/50 text-cream">
            <tr>
              <td class="py-3 font-bold">Variant A (Colleagues)</td>
              <td class="text-center text-muted">&mdash;</td>
              <td class="text-center text-muted">&mdash;</td>
              <td class="text-center text-muted">&mdash;</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
            </tr>
            <tr>
              <td class="py-3 font-bold">Variant B (Friends)</td>
              <td class="text-center text-muted">&mdash;</td>
              <td class="text-center text-muted">&mdash;</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
            </tr>
            <tr>
              <td class="py-3 font-bold text-gold">Variant C (Close Family)</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
              <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rsvp');
}