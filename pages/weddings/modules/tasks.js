import { familyTasks } from '../data/weddings-store.js';

export function renderTasksModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Family Checklist &amp; Task Assignment</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead><tr><th>Task</th><th>Category</th><th>Assignee</th><th>Due Date</th><th>Status</th></tr></thead>
          <tbody>
            ${familyTasks.map(t => `
              <tr>
                <td class="font-bold text-cream">${t.task}</td>
                <td><span class="text-xs text-gold">${t.category}</span></td>
                <td class="text-xs text-emeraldSS">${t.assignee}</td>
                <td class="text-xs font-mono text-muted">${t.dueDate}</td>
                <td><span class="text-xs font-bold ${t.done ? 'text-emeraldSS' : 'text-amberSS'}">${t.done ? 'Completed' : 'Open'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}