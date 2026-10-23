import { sangeetLineup } from '../shared/store.js';
import { tableCard, editInput, uid } from '../shared/ui.js';
import { showToast } from '../../../components/toast.js';

const FIELDS = [
  ['group', 'text-xs font-bold text-cream'],
  ['song', 'text-xs'],
  ['duration', 'text-xs font-mono'],
  ['props', 'text-xs text-skySS'],
  ['coordinator', 'text-xs text-emeraldSS font-bold']
];

const rowHtml = s => `
  <tr>
    <td class="font-mono font-bold text-gold">${s.seq}</td>
    ${FIELDS.map(([field, cls]) => `<td>${editInput({ action: 'updateSangeetFieldInline', args: [s.id, field], value: s[field], cls })}</td>`).join('')}
  </tr>`;

export function render(viewport) {
  viewport.innerHTML = tableCard({
    kicker: 'Stage Performance &amp; Cues Sheet',
    title: 'Sangeeth Lineup &amp; Sequence Table',
    desc: 'Synchronize audio tracks, durations, props, and stage coordinators in an editable sequence table.',
    action: 'addNewSangeetPerformanceInline',
    actionLabel: '+ Add Performance Cue',
    headers: ['Seq #', 'Group / Performer', 'Song / Mashup', 'Duration', 'Props &amp; Special FX', 'Coordinator'],
    rows: sangeetLineup.map(rowHtml).join('')
  });
}

export const actions = {
  addNewSangeetPerformanceInline() {
    const seq = Math.max(0, ...sangeetLineup.map(s => Number(s.seq) || 0)) + 1;
    sangeetLineup.push({ id: uid('sg'), seq, group: 'New Group', song: '', duration: '3:00', props: '', coordinator: '' });
    showToast('Added performance cue');
  },

  updateSangeetFieldInline(id, field, val) {
    const s = sangeetLineup.find(x => x.id === id);
    if (!s) return false;
    s[field] = val;
    return false; // inputs already show the new text
  }
};
