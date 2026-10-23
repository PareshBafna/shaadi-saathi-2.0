import { weddingEvents, guests, roomInventory, vendors, familyTasks } from './store.js';

export const formatINR = (amount = 0) => '₹' + Number(amount || 0).toLocaleString('en-IN');

export const EMPTY_TELEMETRY = {
  guestsTotal: 0, attendingPax: 0, confirmedPct: 0, attendingCount: 0, declinedCount: 0, awaitingCount: 0,
  roomsTotal: 0, roomsFull: 0, roomsPartial: 0, roomsVacant: 0, eventsCount: 0, flightPax: 0, trainPax: 0,
  budgetTotal: 0, budgetPaid: 0, budgetDue: 0, budgetPaidPct: 0,
  tasksTotal: 0, tasksDone: 0, tasksInProg: 0, tasksPending: 0
};

export const getStayLocationsList = () => [...new Set(roomInventory.map(r => r.location))];

export const getTierLabel = tier => tier || 'Guest';

// Family members (of guests still coming) sleeping in a room.
export function getRoomOccupants(roomId) {
  const found = [];
  guests.filter(g => g.status !== 'Declined').forEach(g => {
    (g.members || []).forEach((m, memberIdx) => {
      if (m.roomId === roomId) found.push({ guestId: g.id, memberIdx, memberName: m.name });
    });
  });
  return found;
}

const sum = (list, pick) => list.reduce((s, x) => s + (Number(pick(x)) || 0), 0);

export function computeLiveTelemetry() {
  const attending = guests.filter(g => g.status === 'Attending');
  const declined = guests.filter(g => g.status === 'Declined');
  const awaiting = guests.filter(g => g.status === 'Awaiting');

  let roomsFull = 0, roomsPartial = 0, roomsVacant = 0;
  roomInventory.forEach(r => {
    const occupied = getRoomOccupants(r.id).length;
    if (occupied === 0) roomsVacant++;
    else if (occupied >= r.maxPax) roomsFull++;
    else roomsPartial++;
  });

  const paxBy = mode => sum(attending.filter(g => g.travel?.mode === mode), g => g.pax);
  const budgetTotal = sum(vendors, v => v.cost);
  const budgetPaid = sum(vendors, v => v.paid);
  const tasksDone = familyTasks.filter(t => t.done).length;
  const tasksInProg = familyTasks.filter(t => !t.done && t.status === 'In Progress').length;

  return {
    guestsTotal: guests.length,
    attendingPax: sum(attending, g => g.pax),
    confirmedPct: guests.length ? Math.round((attending.length / guests.length) * 100) : 0,
    attendingCount: attending.length,
    declinedCount: declined.length,
    awaitingCount: awaiting.length,
    roomsTotal: roomInventory.length, roomsFull, roomsPartial, roomsVacant,
    eventsCount: weddingEvents.length,
    flightPax: paxBy('Flight'),
    trainPax: paxBy('Train'),
    budgetTotal, budgetPaid,
    budgetDue: Math.max(0, budgetTotal - budgetPaid),
    budgetPaidPct: budgetTotal ? Math.round((budgetPaid / budgetTotal) * 100) : 0,
    tasksTotal: familyTasks.length,
    tasksDone,
    tasksInProg,
    tasksPending: familyTasks.length - tasksDone - tasksInProg
  };
}
