import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/web-invite/web-invite.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">WEB INVITE</span>
        <h2>Bespoke 3D Wax-Seal Web Invitation with Shehnai chime</h2>
        <p class="mt-3">Replace static 15MB PDFs that fail to load. Guests tap a gleaming 3D monogram wax seal to unveil falling rose petals, classical Shehnai audio, and 1-tap Google Maps directions.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('webinvites')" class="hp-link">💌 Preview 3D Web Invite →</button></div>
      </div>
      <div class="bento-card web-invite-card space-y-4">
        <span class="text-xs uppercase tracking-widest text-gold font-bold block">Tap Seal To Unveil Invitation</span>
        <div onclick="showToast('✨ Wax Seal Unbroken! Playing Royal Shehnai...')" class="wax-seal-circle">
          <span class="wax-seal-initials">A&amp;A</span>
          <span class="wax-seal-sub">Unveil</span>
        </div>
        <p class="font-serif italic text-xl text-cream">Aarav weds Ananya &bull; Taj Lake Palace, Udaipur</p>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('webinvites');

  const seal = mountEl.querySelector('.srv-wax-seal, [onclick*="Wax Seal"]');
  if (seal) {
    seal.onclick = () => {
      if (typeof window.showToast === 'function') {
        window.showToast('✨ Wax Seal Unbroken! Playing Royal Shehnai...');
      }
    };
  }
}