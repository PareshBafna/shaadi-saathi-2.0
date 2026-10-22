import { weddingEvents, guests, roomInventory, vendors, familyTasks } from '../data/weddings-store.js';

export function formatINR(amount = 0) {
  return '₹' + Number(amount || 0).toLocaleString('en-IN');
}

export function showToast(msg) {
  if (typeof window.showToast === 'function') {
    window.showToast(msg);
  }
}

export function getStayLocationsList() {
  return [...new Set(roomInventory.map(r => r.wing))];
}

export function getTierLabel(tier) {
  return tier || 'Guest';
}

export function getRoomOccupants(roomNumber) {
  return guests.filter(g => g.room === roomNumber && g.status === 'Attending');
}

export function computeLiveTelemetry() {
  const guestsTotal = guests.length;
  const attendingList = guests.filter(g => g.status === 'Attending');
  const declinedList = guests.filter(g => g.status === 'Declined');
  const awaitingList = guests.filter(g => g.status === 'Awaiting');

  const attendingPax = attendingList.reduce((acc, g) => acc + (Number(g.pax) || 0), 0);
  const confirmedPct = guestsTotal ? Math.round((attendingList.length / guestsTotal) * 100) : 0;

  let roomsFull = 0;
  let roomsPartial = 0;
  let roomsVacant = 0;

  roomInventory.forEach(r => {
    const occ = getRoomOccupants(r.number).reduce((s, g) => s + (Number(g.pax) || 0), 0);
    if (occ === 0) roomsVacant++;
    else if (occ >= r.capacity) roomsFull++;
    else roomsPartial++;
  });

  const flightPax = attendingList.filter(g => g.travelMode === 'Flight').reduce((s, g) => s + (Number(g.pax) || 0), 0);
  const trainPax = attendingList.filter(g => g.travelMode === 'Train').reduce((s, g) => s + (Number(g.pax) || 0), 0);

  const budgetTotal = vendors.reduce((s, v) => s + (Number(v.total) || 0), 0);
  const budgetPaid = vendors.reduce((s, v) => s + (Number(v.paid) || 0), 0);
  const budgetDue = Math.max(0, budgetTotal - budgetPaid);
  const budgetPaidPct = budgetTotal ? Math.round((budgetPaid / budgetTotal) * 100) : 0;

  const tasksTotal = familyTasks.length;
  const tasksDone = familyTasks.filter(t => t.status === 'Done').length;
  const tasksInProg = familyTasks.filter(t => t.status === 'In Progress').length;
  const tasksPending = familyTasks.filter(t => t.status === 'Pending').length;

  return {
    guestsTotal,
    attendingPax,
    confirmedPct,
    attendingCount: attendingList.length,
    declinedCount: declinedList.length,
    awaitingCount: awaitingList.length,
    roomsTotal: roomInventory.length,
    roomsFull,
    roomsPartial,
    roomsVacant,
    eventsCount: weddingEvents.length,
    flightPax,
    trainPax,
    budgetTotal,
    budgetPaid,
    budgetDue,
    budgetPaidPct,
    tasksTotal,
    tasksDone,
    tasksInProg,
    tasksPending
  };
}

export function buildTelemetryCardHTML(t) {
  const attPct = t.guestsTotal ? Math.round((t.attendingCount / t.guestsTotal) * 100) : 0;
  const decPct = t.guestsTotal ? Math.round((t.declinedCount / t.guestsTotal) * 100) : 0;
  const awtPct = Math.max(0, 100 - attPct - decPct);

  return `
    <div class="space-y-4">
      <!-- Guest RSVP Bar -->
      <div class="p-4 rounded-xl bg-obsidian/70 border border-borderWarm space-y-3">
        <div class="flex justify-between items-center text-xs font-bold">
          <span class="text-cream">👥 Guests (${t.guestsTotal} Families • ${t.attendingPax} Attending Pax)</span>
          <span class="text-gold">${t.confirmedPct}% Confirmed</span>
        </div>
        <div class="w-full h-2.5 rounded-full overflow-hidden flex bg-surface">
          <div style="width:${attPct}%" class="bg-emeraldSS"></div>
          <div style="width:${decPct}%" class="bg-crimsonSS"></div>
          <div style="width:${awtPct}%" class="bg-amberSS"></div>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div class="py-1.5 rounded-lg bg-surface border border-borderWarm text-muted">Attending: <strong class="text-emeraldSS">${t.attendingCount}</strong></div>
          <div class="py-1.5 rounded-lg bg-surface border border-borderWarm text-muted">Declined: <strong class="text-crimsonSS">${t.declinedCount}</strong></div>
          <div class="py-1.5 rounded-lg bg-surface border border-borderWarm text-muted">Awaiting: <strong class="text-amberSS">${t.awaitingCount}</strong></div>
        </div>
      </div>

      <!-- Rooms & Travel Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3.5 rounded-xl bg-obsidian/70 border border-borderWarm space-y-2.5">
          <div class="flex justify-between items-center text-xs font-bold">
            <span class="text-cream">🏨 Room Allotments (${t.roomsTotal})</span>
            <span class="text-gold">📅 ${t.eventsCount} Events</span>
          </div>
          <div class="grid grid-cols-3 gap-1.5 text-center text-[11px]">
            <div class="py-1 rounded bg-surface border border-borderWarm text-muted">Full: <strong class="text-emeraldSS">${t.roomsFull}</strong></div>
            <div class="py-1 rounded bg-surface border border-borderWarm text-muted">Partial: <strong class="text-amberSS">${t.roomsPartial}</strong></div>
            <div class="py-1 rounded bg-surface border border-borderWarm text-muted">Vacant: <strong class="text-cream">${t.roomsVacant}</strong></div>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-obsidian/70 border border-borderWarm space-y-2.5">
          <div class="text-xs font-bold text-skySS">✈️ 🚆 Flight & Train Arrangements</div>
          <div class="grid grid-cols-2 gap-2 text-center text-xs">
            <div class="py-1.5 rounded bg-surface border border-borderWarm text-muted">✈️ Flight Pax: <strong class="text-cream">${t.flightPax}</strong></div>
            <div class="py-1.5 rounded bg-surface border border-borderWarm text-muted">🚆 Train Pax: <strong class="text-gold">${t.trainPax}</strong></div>
          </div>
        </div>
      </div>

      <!-- Budget & Tasks Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3.5 rounded-xl bg-obsidian/70 border border-borderWarm space-y-2">
          <div class="flex justify-between items-center text-xs font-bold">
            <span class="text-gold">₹ Budget Planner</span>
            <span class="text-emeraldSS">${t.budgetPaidPct}% Paid</span>
          </div>
          <div class="flex justify-between items-center text-xs pt-1">
            <div><span class="text-muted block text-[11px]">Total:</span><strong class="text-cream">${formatINR(t.budgetTotal)}</strong></div>
            <div class="text-right"><span class="text-muted block text-[11px]">Balance Due:</span><strong class="text-amberSS">${formatINR(t.budgetDue)}</strong></div>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-obsidian/70 border border-borderWarm space-y-2.5">
          <div class="flex justify-between items-center text-xs font-bold">
            <span class="text-emeraldSS">✅ Tasks Checklist (${t.tasksTotal})</span>
            <span class="text-emeraldSS">Done: ${t.tasksDone}</span>
          </div>
          <div class="grid grid-cols-3 gap-1.5 text-center text-[11px]">
            <div class="py-1 rounded bg-surface border border-borderWarm text-muted">Pending: <strong class="text-amberSS">${t.tasksPending}</strong></div>
            <div class="py-1 rounded bg-surface border border-borderWarm text-muted">In Prog: <strong class="text-skySS">${t.tasksInProg}</strong></div>
            <div class="py-1 rounded bg-surface border border-borderWarm text-muted">Done: <strong class="text-emeraldSS">${t.tasksDone}</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
}