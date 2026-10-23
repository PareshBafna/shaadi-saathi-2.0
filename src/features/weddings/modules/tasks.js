import { familyTasks } from '../shared/store.js';
import { statGrid, tableCard, editInput, esc, uid } from '../shared/ui.js';
import { showToast } from '../../../components/toast.js';

const badge = done => done
  ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emeraldSS/20 text-emeraldSS">✓ Completed</span>'
  : '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">⏳ Open</span>';

const rowHtml = t => `
  <tr>
    <td><input type="checkbox" ${t.done ? 'checked' : ''} data-change="toggleTaskDoneInline" data-args="${esc(t.id)}" aria-label="Mark done: ${esc(t.task)}" class="w-4 h-4 rounded accent-gold cursor-pointer" /></td>
    <td>${editInput({ action: 'updateTaskFieldInline', args: [t.id, 'task'], value: t.task, cls: 'text-xs font-bold text-cream' })}</td>
    <td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-gold border border-borderWarm">${esc(t.category)}</span></td>
    <td class="text-xs text-emeraldSS font-semibold">${esc(t.assignee)}</td>
    <td class="text-xs font-mono text-muted">${esc(t.dueDate)}</td>
    <td>${badge(t.done)}</td>
  </tr>`;

export function render(viewport) {
  const done = familyTasks.filter(t => t.done).length;
  viewport.innerHTML = statGrid([
    ['Total Tasks', familyTasks.length, 'text-cream'],
    ['Completed Tasks', done, 'text-emeraldSS'],
    ['Pending Checklist', familyTasks.length - done, 'text-amberSS']
  ]) + tableCard({
    kicker: 'Family Accountability',
    title: 'Family Checklist &amp; Task Assignment',
    desc: 'Coordinate pre-wedding shopping, venue bookings, and ritual checklists across family members.',
    action: 'addNewTaskInline',
    actionLabel: '+ Add Task',
    headers: [{ label: 'Done', style: 'width:40px' }, 'Task Description', 'Category', 'Assignee', 'Due Date', 'Status'],
    rows: familyTasks.map(rowHtml).join('')
  });
}

export const actions = {
  addNewTaskInline() {
    familyTasks.push({ id: uid('t'), task: 'New task', category: 'General', assignee: 'Family', dueDate: 'TBD', done: false });
    showToast('Task added');
  },

  toggleTaskDoneInline(id) {
    const t = familyTasks.find(x => x.id === id);
    if (!t) return false;
    t.done = !t.done;
  },

  updateTaskFieldInline(id, field, val) {
    const t = familyTasks.find(x => x.id === id);
    if (!t) return false;
    t[field] = val;
    return false; // input already shows the new text
  }
};
