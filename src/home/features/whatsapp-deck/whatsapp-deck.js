import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/whatsapp-deck/whatsapp-deck.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">WHATSAPP DECK</span>
        <h2>Official verified WhatsApp dispatches with smart variables</h2>
        <p class="mt-3">Deliver personal invitations, room keys, and driver details straight to guests' WhatsApp from a green-tick verified sender—without saving hundreds of phone numbers first.</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="px-3 py-1.5 rounded-xl bg-waGreen/15 border border-waGreen/30 text-xs font-bold text-waGreen">✓ Official Meta Template</span>
          <span class="px-3 py-1.5 rounded-xl bg-card border border-borderWarm text-xs text-cream">₹1 / Extra Credit</span>
        </div>
        <div class="mt-6"><button onclick="openWorkspaceDirect('whatsapp')" class="hp-link">💬 Open WhatsApp Deck →</button></div>
      </div>
      <div class="bg-[#0B141A] border-2 border-[#233138] rounded-3xl p-5 max-w-md mx-auto w-full shadow-2xl space-y-3">
        <div class="flex items-center gap-3 pb-3 border-b border-[#233138]">
          <div class="w-9 h-9 rounded-full bg-waGreen flex items-center justify-center text-obsidian font-bold">SS</div>
          <div>
            <strong class="text-sm text-cream block">Shaadi Saathi Concierge ✓</strong>
            <span class="text-[11px] text-waGreen">Official Verified Business Account</span>
          </div>
        </div>
        <div class="bg-[#1F2C34] rounded-2xl rounded-tl-none p-4 text-xs text-cream space-y-2 leading-relaxed">
          <p class="text-gold font-bold">॥ श्री गणेशाय नमः ॥</p>
          <p>Pranam <strong>Smt. &amp; Shri Anita Sharma Ji</strong> 🙏</p>
          <p>With blessings of <em>Smt. Sunita &amp; Shri Rajesh Sharma</em>, you are cordially invited to Aarav &amp; Ananya’s wedding celebrations in Udaipur.</p>
          <div class="bg-black/30 p-2.5 rounded-xl text-[11px] text-muted">
            📅 Invited: Haldi, Mehendi, Sangeet &amp; Reception<br/>
            🏨 Allotted Stay: Taj Lake Palace (Rm 101 &amp; 102)
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-center text-xs font-bold text-[#00A884]">
          <div class="bg-[#1F2C34] py-2.5 rounded-xl">💌 Open 3D Web Invite</div>
          <div class="bg-[#1F2C34] py-2.5 rounded-xl">✓ Confirm RSVP</div>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('whatsapp');
}