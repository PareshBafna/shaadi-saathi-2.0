import { familyTasks } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { showToast } from '../utils/weddings-helpers.js';

export function renderTasksModule(onRefresh) {
  const doneCount = familyTasks.filter(tk => tk.done).length;
  const pct = familyTasks.length ? Math.round((doneCount / familyTasks.length) * 100) : 0;

  const html = renderModuleHeader('tasks') + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 class="font-serif text-2xl font-bold text-cream">Interactive Family Tasks Checklist</h4>
          <p class="text-sm text-muted">Tick any checkbox to mark a task Completed, or add a new duty for a family member below.</p>
        </div>
        <div class="text-right">
          <span class="text-xs text-muted block">Checklist Progress</span>
          <strong class="font-serif text-2xl font-bold text-emeraldSS">${doneCount} of ${familyTasks.length} Completed (${pct}%)</strong>
        </div>
      </div>

      <div class="w-full h-3 bg-obsidian rounded-full overflow-hidden">
        <div class="bg-emeraldSS h-full transition-all duration-300" style="width:${pct}%"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-obsidian p-4 rounded-2xl border border-borderWarm">
        <input id="newCheckTaskTitle" type="text" placeholder="Add new family task..." class="sm:col-span-6 ss-input" />
        <input id="newCheckTaskOwner" type="text" placeholder="Owner (e.g., Karanji, Sonal)" class="sm:col-span-3 ss-input" />
        <input id="newCheckTaskDue" type="text" placeholder="Due Date (e.g., 12 Dec)" class="sm:col-span-2 ss-input" />
        <button id="btn-add-task" class="sm:col-span-1 btn-gold rounded-xl py-2 font-bold text-xs">+ Add</button>
      </div>

      <div class="space-y-3">
        ${familyTasks.map(tk => `
          <label class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-4 rounded-2xl border transition cursor-pointer ${tk.done ? 'bg-emeraldSS/10 border-emeraldSS/40' : 'bg-obsidian/90 border-borderWarm hover:border-gold/50'}">
            <div class="flex items-center gap-4 flex-1">
              <input type="checkbox" data-taskid="${tk.id}" ${tk.done ? 'checked' : ''} class="task-chk w-6 h-6 accent-gold rounded cursor-pointer shrink-0" />
              <div class="flex-1">
                <span class="text-base font-bold block ${tk.done ? 'line-through text-muted' : 'text-cream'}">${tk.title}</span>
                <span class="text-xs text-gold">Assigned Owner: <strong>${tk.owner}</strong> • Due: ${tk.due}</span>
              </div>
            </div>
            <span class="px-3.5 py-1 rounded-full text-xs font-bold ${tk.done ? 'bg-emeraldSS/20 text-emeraldSS' : 'bg-card border border-borderWarm text-amberSS'}">
              ${tk.done ? '✓ Completed' : tk.status}
            </span>
          </label>
        `).join('')}
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById('btn-add-task')?.addEventListener('click', () => {
      const title = document.getElementById('newCheckTaskTitle')?.value.trim();
      if (!title) return;
      const owner = document.getElementById('newCheckTaskOwner')?.value.trim() || 'Family';
      const due = document.getElementById('newCheckTaskDue')?.value.trim() || '13 Dec';
      familyTasks.unshift({ id: 't-' + Date.now(), title, owner, due, status: 'Pending', done: false });
      showToast('Added task to family checklist');
      onRefresh();
    });

    document.querySelectorAll('.task-chk').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const tk = familyTasks.find(x => x.id === e.target.dataset.taskid);
        if (tk) {
          tk.done = e.target.checked;
          tk.status = tk.done ? 'Completed' : 'In Progress';
          showToast(tk.done ? `✓ Completed: ${tk.title}` : `Reopened: ${tk.title}`);
          onRefresh();
        }
      });
    });
  }, 0);

  return html;
}