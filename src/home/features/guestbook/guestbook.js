import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/guestbook/guestbook.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">GUESTBOOK</span>
        <h2>Permanent digital archive of family blessings &amp; wishes</h2>
        <p class="mt-3">Relatives who cannot travel and attending elders alike can post heartfelt aashirwad and marriage wishes onto a dedicated family Guestbook wall.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('guestbook')" class="hp-link">📖 Open Digital Guestbook →</button></div>
      </div>
      <div class="grid grid-cols-1 gap-3">
        <div class="bento-card guestbook-pill-card space-y-1">
          <p class="guestbook-quote">&ldquo;Heartiest congratulations to Aarav and Ananya! Wishing you a lifetime of love and laughter.&rdquo;</p>
          <div class="flex justify-between text-xs text-gold font-bold"><span>&mdash; Anita &amp; Rajesh Sharma (Bride Side Family)</span><span class="text-muted">2h ago</span></div>
        </div>
        <div class="bento-card guestbook-pill-card space-y-1">
          <p class="guestbook-quote">&ldquo;See you all at Taj Lake Palace! Super excited for the Sangeeth celebrations.&rdquo;</p>
          <div class="flex justify-between text-xs text-gold font-bold"><span>&mdash; Vikram &amp; Geeta Singh (Groom Side Family)</span><span class="text-muted">Yesterday</span></div>
        </div>
        <div class="bento-card guestbook-pill-card space-y-1">
          <p class="guestbook-quote">&ldquo;Infinite blessings and aashirwad to both families on this joyous union.&rdquo;</p>
          <div class="flex justify-between text-xs text-gold font-bold"><span>&mdash; Shri Jawarilal Bafna (Family Patriarch)</span><span class="text-muted">2 days ago</span></div>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('guestbook');
}