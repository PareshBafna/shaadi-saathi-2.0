import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/tasks-checklist/tasks-checklist.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">TASKS CHECKLIST</span>
        <h2>Delegate wedding duties across brothers, sisters &amp; cousins</h2>
        <p class="mt-3">Stop chasing family members on phone calls. Assign pre-wedding errands&mdash;like collecting safas, welcome hampers, or USB dance tracks&mdash;with clear owners and due dates.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('tasks')" class="hp-link">✅ Open Tasks Checklist →</button></div>
      </div>
      <div class="bento-card p-5 space-y-2.5">
        <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-emeraldSS/40">
          <div class="flex items-center gap-3">
            <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold bg-emeraldSS text-obsidian">✓</span>
            <div>
              <strong class="text-xs block line-through text-muted">Confirm 85 Bandhani Safas delivery at Taj lobby</strong>
              <span class="text-[11px] text-gold">Owner: Karanji &bull; Due: 11 Dec</span>
            </div>
          </div>
          <span class="text-[11px] font-bold text-emeraldSS">Completed</span>
        </div>
        <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-borderWarm">
          <div class="flex items-center gap-3">
            <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold border border-muted text-transparent">✓</span>
            <div>
              <strong class="text-xs block text-cream">Coordinate ceremonial thali setup for main stage</strong>
              <span class="text-[11px] text-gold">Owner: Sonal &bull; Due: 12 Dec</span>
            </div>
          </div>
          <span class="text-[11px] font-bold text-amberSS">In Progress</span>
        </div>
        <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-borderWarm">
          <div class="flex items-center gap-3">
            <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold border border-muted text-transparent">✓</span>
            <div>
              <strong class="text-xs block text-cream">Handover Sangeet family dance USB tracks to DJ console</strong>
              <span class="text-[11px] text-gold">Owner: Lachi &bull; Due: 12 Dec</span>
            </div>
          </div>
          <span class="text-[11px] font-bold text-amberSS">Pending</span>
        </div>
        <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-emeraldSS/40">
          <div class="flex items-center gap-3">
            <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold bg-emeraldSS text-obsidian">✓</span>
            <div>
              <strong class="text-xs block line-through text-muted">Collect silver return coins from family jewellery shop</strong>
              <span class="text-[11px] text-gold">Owner: Paresh &bull; Due: 10 Dec</span>
            </div>
          </div>
          <span class="text-[11px] font-bold text-emeraldSS">Completed</span>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('tasks');
}