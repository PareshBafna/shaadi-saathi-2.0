import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/family-hosts/family-hosts.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">FAMILY HOSTS</span>
        <h2>Multiple Host Profiles for Bride side, Groom side &amp; Elders</h2>
        <p class="mt-3">In Indian weddings, the Bride’s maternal uncle and the Groom’s grandfather send invitations under their own names. Configure Multiple Host Profiles so every guest sees the right family elder’s salutation.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('hosts')" class="hp-link">🙏 Configure Multiple Host Profiles →</button></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bento-card p-5 border-l-4 border-l-gold space-y-2">
          <span class="text-[11px] font-bold uppercase text-gold block">Bride Side Host Profile</span>
          <h4 class="font-serif text-xl font-bold text-cream">Smt. Sunita &amp; Shri Rajesh Sharma</h4>
          <p class="text-xs italic text-muted">“With blessings of Smt. Sunita &amp; Shri Rajesh Sharma, we invite you to celebrate Ananya’s wedding...”</p>
        </div>
        <div class="bento-card p-5 border-l-4 border-l-emeraldSS space-y-2">
          <span class="text-[11px] font-bold uppercase text-emeraldSS block">Groom Side Host Profile</span>
          <h4 class="font-serif text-xl font-bold text-cream">Smt. Kavita &amp; Shri Paresh Bafna</h4>
          <p class="text-xs italic text-muted">“With compliments from Smt. Kavita &amp; Shri Paresh Bafna, join us for Aarav’s wedding celebrations...”</p>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('hosts');
}