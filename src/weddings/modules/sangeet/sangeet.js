import { sangeetLineup } from '../../data/weddings-store.js';

export function renderSangeetModule(viewport, headerBanner) {
  var tableRows = sangeetLineup.map(function(s) {
    return '<tr>' +
      '<td class="font-mono font-bold text-gold">' + s.seq + '</td>' +
      '<td><input type="text" value="' + s.group + '" onchange="updateSangeetFieldInline(\'' + s.id + '\', \'group\', this.value)" class="ss-input text-xs font-bold text-cream" /></td>' +
      '<td><input type="text" value="' + s.song + '" onchange="updateSangeetFieldInline(\'' + s.id + '\', \'song\', this.value)" class="ss-input text-xs" /></td>' +
      '<td><input type="text" value="' + s.duration + '" onchange="updateSangeetFieldInline(\'' + s.id + '\', \'duration\', this.value)" class="ss-input text-xs font-mono" /></td>' +
      '<td><input type="text" value="' + s.props + '" onchange="updateSangeetFieldInline(\'' + s.id + '\', \'props\', this.value)" class="ss-input text-xs text-skySS" /></td>' +
      '<td><input type="text" value="' + s.coordinator + '" onchange="updateSangeetFieldInline(\'' + s.id + '\', \'coordinator\', this.value)" class="ss-input text-xs text-emeraldSS font-bold" /></td>' +
    '</tr>';
  }).join('');

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Stage Performance &amp; Cues Sheet</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Sangeeth Lineup &amp; Sequence Table</h4>
          <p class="text-sm text-muted">Synchronize audio tracks, durations, props, and stage coordinators in an editable sequence table.</p>
        </div>
        <button onclick="addNewSangeetPerformanceInline()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Performance Cue</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Seq #</th>
              <th>Group / Performer</th>
              <th>Song / Mashup</th>
              <th>Duration</th>
              <th>Props &amp; Special FX</th>
              <th>Coordinator</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}