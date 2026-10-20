export function renderTeamAccessModule(viewport, headerBanner) {
  const teamMembers = [
    { name: 'Paresh Bafna', role: 'Creator Super Admin', access: 'Full Control', status: 'Active' },
    { name: 'Darshana Bafna', role: 'Bride & Co-Host', access: 'Edit Guests, Rooms, Sangeet', status: 'Active' },
    { name: 'Jawarilal Bafna', role: 'Family Elder / Host', access: 'View Dashboard & Shagun', status: 'Active' }
  ];

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Collaborator Permissions</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Team Access &amp; Role Assignments</h4>
        </div>
        <button onclick="showToast('Invite link generated')" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Invite Collaborator</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Access Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${teamMembers.map(t => `
              <tr>
                <td class="font-bold text-cream">${t.name}</td>
                <td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-gold border border-borderWarm">${t.role}</span></td>
                <td class="text-xs text-muted">${t.access}</td>
                <td><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emeraldSS/20 text-emeraldSS">● ${t.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}