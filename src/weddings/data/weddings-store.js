export let activeWeddingId = 'w3';
export let currentModuleId = 'overview';
export let activeRoleFilter = 'ALL';

export function setActiveWeddingId(id) { activeWeddingId = id; }
export function setCurrentModuleId(id) { currentModuleId = id; }
export function setActiveRoleFilter(role) { activeRoleFilter = role; }

export let messageCreditsRemaining = 4850;
export let messageCreditsTotal = 5000;
export let activeWhatsAppTemplate = 'royal_invite';
export function setMessageCreditsRemaining(val) { messageCreditsRemaining = val; }
export function deductMessageCredits(count = 1) {
  messageCreditsRemaining = Math.max(0, messageCreditsRemaining - count);
  return messageCreditsRemaining;
}
export function setActiveWhatsAppTemplate(tpl) { activeWhatsAppTemplate = tpl; }

export const whatsappTemplates = [
  { id: 'royal_invite', name: 'Royal Save The Date & Web Invite', body: 'Namaste {{1}}, With the blessings of elders, we cordially invite you & family to the wedding celebrations of Dushyant & Riya in Jaipur (05–07 Nov 2026). Open your private pass: {{2}}' },
  { id: 'rsvp_reminder', name: 'RSVP & Travel Details Reminder', body: 'Warm greetings {{1}}, Kindly confirm your family RSVP & flight/train PNR details for Dushyant & Riya wedding hospitality arrangements: {{2}}' },
  { id: 'room_allotment', name: 'Hotel Room Key & Check-in Pass', body: 'Welcome to Jaipur {{1}}! Your room {{2}} is ready. Show this pass at the hospitality desk for express check-in.' }
];

export const whatsappLogs = [
  { id: 'wa1', guestName: 'Rajesh & Sunita Sharma', phone: '+91 98201 11223', template: 'Royal Save The Date', status: 'Read', time: '10 mins ago' }
];

export const ROLES = {
  ALL: { id: 'ALL', label: 'ALL ROLES' },
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

export const AVAILABLE_WEDDING_DATES = ['05 Nov 2026', '06 Nov 2026', '07 Nov 2026'];

export const weddingsPortfolio = [
  {
    id: 'w3',
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
  { id: 'h1', name: 'Jawarilal & Chandra Bafna', role: 'Parents of the Groom', side: 'Groom', phone: '+91 98400 11223', salutation: 'Smt. & Shri' }
];

export const weddingEvents = [
  { id: 'ev1', name: 'Royal Welcome & Mehendi', date: '05 Nov 2026', time: '12:00 PM', venue: 'Jaipur Palace', dressCode: 'Pastels' }
];

export const guests = [];
export const roomInventory = [];
export const vendors = [];
export const shagunLedger = [];
export const galleryAlbums = [];
export const familyTasks = [];
export const sangeetLineup = [];
export const guestbookEntries = [];
export const teamMembers = [];