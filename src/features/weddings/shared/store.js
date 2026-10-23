// In-memory sample data + current screen state. Replace with a real data source later.

// Which wedding / module is open right now.
export const session = { weddingId: null, moduleId: 'overview' };

// WhatsApp credits (mutable on purpose)
export const credits = { total: 5000, remaining: 4850 };

export const ROLES = {
  CREATOR: {
    id: 'Creator',
    label: 'CREATOR',
    badgeClass: 'bg-gold text-obsidian',
    desc: 'Full Creator & Planner OS Control across all modules, budgets & templates'
  },
  HOST: {
    id: 'Host',
    label: 'HOST',
    badgeClass: 'bg-emeraldSS/20 text-emeraldSS border border-emeraldSS/40',
    desc: 'Hosting Family Access: Manage Guests, Room Allotments, Shagun & Gallery'
  },
  USER: {
    id: 'User',
    label: 'USER',
    badgeClass: 'bg-skySS/20 text-skySS border border-skySS/40',
    desc: 'Team & Operations Access: Manage Flight/Train Arrivals, Tasks & Checklists'
  },
  GUEST: {
    id: 'Guest',
    label: 'GUEST',
    badgeClass: 'bg-amberSS/20 text-amberSS border border-amberSS/40',
    desc: 'Invited Guest Access: View Web Invite, Events Schedule, Travel & Room Pass'
  }
};

export const weddingsPortfolio = [
  {
    id: 'w3',
    start: '2026-11-05',
    couple: 'Dushyant & Riya',
    dates: '05–07 Nov 2026',
    city: 'Jaipur, Rajasthan',
    userRole: 'User',
    roleBadgeColor: ROLES.USER.badgeClass,
    rolePermissionsDesc: ROLES.USER.desc,
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    isLive: false,
    telemetry: {
      guestsTotal: 140,
      attendingPax: 310,
      confirmedPct: 80,
      attendingCount: 112,
      declinedCount: 10,
      awaitingCount: 18,
      roomsTotal: 40,
      roomsFull: 30,
      roomsPartial: 6,
      roomsVacant: 4,
      eventsCount: 4,
      flightPax: 120,
      trainPax: 95,
      budgetTotal: 3100000,
      budgetPaid: 2100000,
      budgetDue: 1000000,
      budgetPaidPct: 68,
      tasksTotal: 12,
      tasksDone: 9,
      tasksInProg: 2,
      tasksPending: 1
    }
  },
  {
    id: 'w1',
    start: '2026-11-18',
    couple: 'Aarav & Ananya',
    dates: '18–20 Nov 2026',
    city: 'Udaipur, Rajasthan',
    userRole: 'Creator',
    roleBadgeColor: ROLES.CREATOR.badgeClass,
    rolePermissionsDesc: ROLES.CREATOR.desc,
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    isLive: false,
    telemetry: {
      guestsTotal: 0,
      attendingPax: 0,
      confirmedPct: 0,
      attendingCount: 0,
      declinedCount: 0,
      awaitingCount: 0,
      roomsTotal: 0,
      roomsFull: 0,
      roomsPartial: 0,
      roomsVacant: 0,
      eventsCount: 0,
      flightPax: 0,
      trainPax: 0,
      budgetTotal: 0,
      budgetPaid: 0,
      budgetDue: 0,
      budgetPaidPct: 0,
      tasksTotal: 0,
      tasksDone: 0,
      tasksInProg: 0,
      tasksPending: 0
    }
  },
  {
    id: 'w4',
    start: '2026-02-12',
    couple: 'Siddhi & Anand',
    dates: '12–14 Feb 2026',
    city: 'Mumbai, Maharashtra',
    userRole: 'Guest',
    roleBadgeColor: ROLES.GUEST.badgeClass,
    rolePermissionsDesc: ROLES.GUEST.desc,
    img: 'https://images.unsplash.com/photo-1545232972-9076705868b9?auto=format&fit=crop&w=1000&q=80',
    isLive: false,
    telemetry: {
      guestsTotal: 180,
      attendingPax: 390,
      confirmedPct: 88,
      attendingCount: 158,
      declinedCount: 12,
      awaitingCount: 10,
      roomsTotal: 48,
      roomsFull: 44,
      roomsPartial: 2,
      roomsVacant: 2,
      eventsCount: 6,
      flightPax: 150,
      trainPax: 110,
      budgetTotal: 3800000,
      budgetPaid: 3400000,
      budgetDue: 400000,
      budgetPaidPct: 89,
      tasksTotal: 15,
      tasksDone: 13,
      tasksInProg: 1,
      tasksPending: 1
    }
  },
  {
    id: 'w2',
    start: '2026-02-19',
    couple: 'Lachi & Karanji',
    dates: '19–20 Feb 2026',
    city: 'Chennai, Tamil Nadu',
    userRole: 'Host',
    roleBadgeColor: ROLES.HOST.badgeClass,
    rolePermissionsDesc: ROLES.HOST.desc,
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    isLive: false,
    telemetry: {
      guestsTotal: 210,
      attendingPax: 460,
      confirmedPct: 79,
      attendingCount: 165,
      declinedCount: 20,
      awaitingCount: 25,
      roomsTotal: 55,
      roomsFull: 42,
      roomsPartial: 8,
      roomsVacant: 5,
      eventsCount: 5,
      flightPax: 180,
      trainPax: 145,
      budgetTotal: 4200000,
      budgetPaid: 3600000,
      budgetDue: 600000,
      budgetPaidPct: 86,
      tasksTotal: 18,
      tasksDone: 14,
      tasksInProg: 2,
      tasksPending: 2
    }
  }
];

export const familyHosts = [
  { id: 'h1', name: 'Jawarilal & Chandra Bafna', relation: 'Parents of the Groom', side: 'Groom', phone: '+91 98400 11223', salutation: 'Smt. & Shri' }
];

export const weddingEvents = [
  { id: 'ev1', code: 'Day 1', name: 'Royal Welcome & Mehendi', date: '05 Nov 2026', time: '12:00 PM', venue: 'Jaipur Palace', dress: 'Pastels', expectedPax: 120 }
];

export const guests = [];
export const roomInventory = [];
export const vendors = [];
export const familyTasks = [];
export const sangeetLineup = [];
export const guestbookEntries = [];
export const shagunLedger = [
  { id: 'sh-1', giver: 'Gupta Family (Delhi)', amount: 51000, item: 'Gold Coin & Cash Shagun', date: '12 Dec 2026', notes: 'Received at Reception' },
  { id: 'sh-2', giver: 'Rathi Family (Jaipur)', amount: 21000, item: 'Silver Bowl Set', date: '13 Dec 2026', notes: 'Sangeet Entry' },
  { id: 'sh-3', giver: 'Mehra Family (Mumbai)', amount: 11000, item: 'Cash Envelope', date: '14 Dec 2026', notes: 'Wedding Ceremony' }
];

export const galleryPhotos = [
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80'
];
