import { guests, roomInventory, weddingEvents, vendors, familyTasks } from '../data/weddings-store.js';

export function showToast(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = msg;
  box.classList.remove('hidden');
  clearTimeout(window._t);
  window._t = setTimeout(() => box.classList.add('hidden'), 2800);
}

export function formatINR(n) {
  return '₹' + Number(n || 0).toLocaleString('en-IN');
}

export function getStayLocationsList() {
  return [...new Set(roomInventory.map(r => r.location))];
}

export function getTierLabel(tier) {
  if (tier === '1-event') return 'Variant A: 1 Event (Reception)';
  if (tier === '2-events') return 'Variant B: 2 Events (Sangeet+Shaadi)';
  return 'Variant C: All Events VIP';
}

export function getRoomOccupants(roomId) {
  const list = [];
  guests.forEach(g => {
    if (g.status === 'Declined' || !g.needsRoom) return;
    (g.members || []).forEach((m, idx) => {
      if (m.roomId === roomId) list.push({ guestId: g.id, primaryName: g.name, memberIndex: idx, memberName: m.name });
    });
  });
  return list;
}

export function computeLiveTelemetry() {
  const att = guests.filter(g => g.status === 'Attending');
  const dec = guests.filter(g => g.status === 'Declined');
  const na = guests.filter(g => g.status === 'N/A');
  const pax = att.reduce((s, g) => s + Number(g.pax || 0), 0);

  let rFull = 0, rPart = 0, rVac = 0;
  roomInventory.forEach(r => {
    const c = getRoomOccupants(r.id).length;
    if (c === 0) rVac++;
    else if (c >= r.maxPax) rFull++;
    else rPart++;
  });

  let fPax = 0, tPax = 0;
  guests.forEach(g => {
    if (g.status === 'Declined') return;
    if (g.travel?.mode === 'Flight' && g.travel?.number) fPax += Number(g.pax || 1);
    if (g.travel?.mode === 'Train' && g.travel?.number) tPax += Number(g.pax || 1);
  });

  const bTot = vendors.reduce((s, v) => s + v.total, 0);
  const bPaid = vendors.reduce((s, v) => s + v.paid, 0);

  return {
    guestsTotal: guests.length, attending: att.length, declined: dec.length, na: na.length, attendingPax: pax,
    eventsCount: weddingEvents.length,
    roomsTotal: roomInventory.length, roomsFull: rFull, roomsPartial: rPart, roomsVacant: rVac,
    flightPax: fPax, trainPax: tPax,
    budgetTotal: bTot, budgetPaid: bPaid,
    tasksTotal: familyTasks.length,
    tasksCompleted: familyTasks.filter(t => t.done || t.status === 'Completed').length,
    tasksInProgress: familyTasks.filter(t => !t.done && t.status === 'In Progress').length,
    tasksPending: familyTasks.filter(t => !t.done && t.status === 'Pending').length,
    tasksNotStarted: familyTasks.filter(t => !t.done && t.status === 'Not Started').length
  };
}

export function buildTelemetryCardHTML(t) {
  const attPct = t.guestsTotal ? Math.round((t.attending / t.guestsTotal) * 100) : 0;
  const decPct = t.guestsTotal ? Math.round((t.declined / t.guestsTotal) * 100) : 0;
  const naPct = Math.max(0, 100 - attPct - decPct);
  const bPct = t.budgetTotal ? Math.round((t.budgetPaid / t.budgetTotal) * 100) : 0;

  return `
    <div class="space-y-4 text-sm">
      <div class="bg-obsidian/90 p-5 rounded-2xl border border-borderWarm space-y-2.5">
        <div class="flex justify-between font-bold text-base"><span>👥 Guests (${t.guestsTotal} Families • ${t.attendingPax} Attending Pax)</span><span class="text-gold">${attPct}% Confirmed</span></div>
        <div class="w-full h-3 bg-surface rounded-full overflow-hidden flex">
          <div class="bg-emeraldSS h-full" style="width:${attPct}%"></div>
          <div class="bg-crimsonSS h-full" style="width:${decPct}%"></div>
          <div class="bg-amberSS h-full" style="width:${naPct}%"></div>
        </div>
        <div class="grid grid-cols-3 gap-2.5 text-center pt-1">
          <div class="bg-card py-2 rounded-xl">Attending: <strong class="text-emeraldSS text-base">${t.attending}</strong></div>
          <div class="bg-card py-2 rounded-xl">Declined: <strong class="text-crimsonSS text-base">${t.declined}</strong></div>
          <div class="bg-card py-2 rounded-xl">Awaiting: <strong class="text-amberSS text-base">${t.na}</strong></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-obsidian/90 p-5 rounded-2xl border border-borderWarm space-y-2">
          <div class="flex justify-between font-bold text-gold text-base"><span>🏨 Room Allotments (${t.roomsTotal})</span><span>📅 ${t.eventsCount} Events</span></div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="bg-card py-2 rounded-xl">Full: <strong class="text-emeraldSS">${t.roomsFull}</strong></div>
            <div class="bg-card py-2 rounded-xl">Partial: <strong class="text-amberSS">${t.roomsPartial}</strong></div>
            <div class="bg-card py-2 rounded-xl">Vacant: <strong class="text-muted">${t.roomsVacant}</strong></div>
          </div>
        </div>
        <div class="bg-obsidian/90 p-5 rounded-2xl border border-borderWarm space-y-2">
          <div class="font-bold text-skySS text-base">✈️🚆 Flight &amp; Train Arrangements</div>
          <div class="grid grid-cols-2 gap-2 text-center">
            <div class="bg-card py-2 rounded-xl">✈️ Flight Pax: <strong class="text-cream text-base">${t.flightPax}</strong></div>
            <div class="bg-card py-2 rounded-xl">🚆 Train Pax: <strong class="text-gold text-base">${t.trainPax}</strong></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-obsidian/90 p-5 rounded-2xl border border-borderWarm space-y-2">
          <div class="flex justify-between font-bold text-base"><span class="text-gold">₹ Budget Planner</span><span class="text-emeraldSS">${bPct}% Paid</span></div>
          <div class="flex justify-between text-sm"><span>Total: <strong>${formatINR(t.budgetTotal)}</strong></span><span class="text-amberSS font-bold">Balance Due: ${formatINR(t.budgetTotal - t.budgetPaid)}</span></div>
        </div>
        <div class="bg-obsidian/90 p-5 rounded-2xl border border-borderWarm space-y-2">
          <div class="flex justify-between font-bold text-emeraldSS text-base"><span>✅ Tasks Checklist (${t.tasksTotal})</span><span>Completed: ${t.tasksCompleted}</span></div>
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="bg-card py-1.5 rounded-xl">Pending: <strong class="text-amberSS">${t.tasksPending}</strong></div>
            <div class="bg-card py-1.5 rounded-xl">In Prog: <strong class="text-skySS">${t.tasksInProgress}</strong></div>
            <div class="bg-card py-1.5 rounded-xl">Done: <strong class="text-emeraldSS">${t.tasksCompleted}</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
}