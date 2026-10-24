import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/team-access/team-access.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">TEAM ACCESS</span>
        <h2>Granular role permissions for planners, hosts &amp; desk staff</h2>
        <p class="mt-3">Give your airport pickup coordinator access to Flight &amp; Train manifests without exposing your private family Shagun ledger or Wedding Budget.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('users')" class="hp-link">🔐 Manage Team Access →</button></div>
      </div>
      <div class="bento-card p-5 space-y-2.5">
        <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
          <div><strong class="text-xs text-cream block">Paresh Bafna</strong><span class="text-[11px] text-muted">All Features + Multi-Wedding Telemetry</span></div>
          <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">CREATOR SUPER ADMIN</span>
        </div>
        <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
          <div><strong class="text-xs text-cream block">Darshana K.</strong><span class="text-[11px] text-muted">Guest, Stay Accomodation, Shagun &amp; Gallery</span></div>
          <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">FAMILY HOST ADMIN</span>
        </div>
        <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
          <div><strong class="text-xs text-cream block">Karanji</strong><span class="text-[11px] text-muted">Flight Arrangements, Train Arrangements &amp; Tasks</span></div>
          <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">LOGISTICS LEAD</span>
        </div>
        <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
          <div><strong class="text-xs text-cream block">Sonal</strong><span class="text-[11px] text-muted">Events, Sangeeth Lineup &amp; Tasks Checklist</span></div>
          <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">EVENT COORDINATOR</span>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('users');
}