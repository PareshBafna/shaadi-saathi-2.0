import { sangeetLineup } from '../data/weddings-store.js';

export function renderSangeetModule(viewport, headerBanner) {
    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-6 space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 class="font-serif text-2xl font-bold text-cream">Sangeeth DJ &amp; Stage Performance Lineup Table</h4>
            <p class="text-sm text-muted">Edit cue sequences, performing family groups, audio track names, durations, and stage props directly in the table.</p>
          </div>
          <button onclick="addNewSangeetRow()" class="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold">+ Add Performance Cue Row</button>
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
                  <td><input type="text" value="${s.seq}" onchange="updateSangeetField(${idx}, 'seq', this.value)" class="ss-input font-mono font-bold text-gold text-center" /></td>
                  <td><input type="text" value="${s.group}" onchange="updateSangeetField(${idx}, 'group', this.value)" class="ss-input font-bold text-cream" /></td>
                  <td><input type="text" value="${s.song}" onchange="updateSangeetField(${idx}, 'song', this.value)" class="ss-input text-gold" /></td>
                  <td><input type="text" value="${s.duration}" onchange="updateSangeetField(${idx}, 'duration', this.value)" class="ss-input font-mono text-xs" /></td>
                  <td><input type="text" value="${s.props}" onchange="updateSangeetField(${idx}, 'props', this.value)" class="ss-input text-xs" /></td>
                  <td><input type="text" value="${s.coordinator || 'Family'}" onchange="updateSangeetField(${idx}, 'coordinator', this.value)" class="ss-input text-xs text-emeraldSS font-bold" /></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
}
