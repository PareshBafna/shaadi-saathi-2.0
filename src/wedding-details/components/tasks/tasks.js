import { familyTasks } from '../../data/weddings-store.js';

export function renderTasksModule(viewport, headerBanner) {
  var completedCount = familyTasks.filter(function(t) { return t.done; }).length;
  
  var tableRows = familyTasks.map(function(t) {
    var statusBadge = t.done 
      ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emeraldSS/20 text-emeraldSS">✓ Completed</span>' 
      : '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">⏳ Open</span>';
    
    return '<tr>' +
      '<td><input type="checkbox" ' + (t.done ? 'checked' : '') + ' onchange="toggleTaskDoneInline(\'' + t.id + '\')" class="w-4 h-4 rounded accent-gold cursor-pointer" /></td>' +
      '<td><input type="text" value="' + t.task + '" onchange="updateTaskFieldInline(\'' + t.id + '\', \'task\', this.value)" class="ss-input text-xs font-bold text-cream" /></td>' +
      '<td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-gold border border-borderWarm">' + t.category + '</span></td>' +
      '<td class="text-xs text-emeraldSS font-semibold">' + t.assignee + '</td>' +
      '<td class="text-xs font-mono text-muted">' + t.dueDate + '</td>' +
      '<td>' + statusBadge + '</td>' +
    '</tr>';
  }).join('');

  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Tasks</span><strong class="text-2xl text-cream">${familyTasks.length}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Completed Tasks</span><strong class="text-2xl text-emeraldSS">${completedCount}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Pending Checklist</span><strong class="text-2xl text-amberSS">${familyTasks.length - completedCount}</strong></div>
    </div>

    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Family Accountability</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Family Checklist &amp; Task Assignment</h4>
          <p class="text-sm text-muted">Coordinate pre-wedding shopping, venue bookings, and ritual checklists across family members.</p>
        </div>
        <button onclick="addNewTaskInline()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Task</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th style="width:40px">Done</th>
              <th>Task Description</th>
              <th>Category</th>
              <th>Assignee</th>
              <th>Due Date</th>
              <th>Status</th>
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