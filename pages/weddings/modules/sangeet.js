import { sangeetLineup } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { showToast } from '../utils/weddings-helpers.js';

export function renderSangeetModule(onRefresh) {
  const html = renderModuleHeader('sangeet') + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 class="font-serif text-2xl font-bold text-cream">Sangeeth DJ &amp; Stage Performance Lineup Table</h4>
          <p class="text-sm text-muted">Edit cue sequences, performing family groups, audio track names, durations, and stage props directly in the table.</p>
        </div>
        <button id="btn-add-sangeet-cue" class="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold">+ Add Performance Cue Row</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th style="width:90px">Cue #</th>
              <th>Performing Family Group / Dancers</th>
              <th>Audio Track / Mashup Name</th>
              <th style="width:130px">Duration</th>
              <th>Stage Props &amp; SFX</th>
              <th>Coordinator</th>
            </tr>
          </thead>
          <tbody>
            ${sangeetLineup.map((s, idx) => `
              <tr>
                <td><input type="text" data-idx="${idx}" data-field="seq" value="${s.seq}" class="sg-inp ss-input font-mono font-bold text-gold text-center" /></td>
                <td><input type="text" data-idx="${idx}" data-field="group" value="${s.group}" class="sg-inp ss-input font-bold text-cream" /></td>
                <td><input type="text" data-idx="${idx}" data-field="song" value="${s.song}" class="sg-inp ss-input text-gold" /></td>
                <td><input type="text" data-idx="${idx}" data-field="duration" value="${s.duration}" class="sg-inp ss-input font-mono text-xs" /></td>
                <td><input type="text" data-idx="${idx}" data-field="props" value="${s.props}" class="sg-inp ss-input text-xs" /></td>
                <td><input type="text" data-idx="${idx}" data-field="coordinator" value="${s.coordinator || 'Family'}" class="sg-inp ss-input text-xs text-emeraldSS font-bold" /></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById('btn-add-sangeet-cue')?.addEventListener('click', () => {
      const nextSeq = String(sangeetLineup.length + 1).padStart(2, '0');
      sangeetLineup.push({
        id: 'sg-' + Date.now(),
        seq: nextSeq,
        group: 'Cousins Squad Performance',
        song: 'Desi Girl + Nachde Ne Saare',
        duration: '3:45 mins',
        props: 'Sparklers & Props',
        coordinator: 'Lachi'
      });
      showToast('Added new cue row to Sangeeth table');
      onRefresh();
    });

    document.querySelectorAll('.sg-inp').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const idx = e.target.dataset.idx;
        if (sangeetLineup[idx]) {
          sangeetLineup[idx][e.target.dataset.field] = e.target.value;
          showToast('Updated Sangeeth lineup cue');
        }
      });
    });
  }, 0);

  return html;
}