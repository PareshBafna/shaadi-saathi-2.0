export const ALL_SERVICES_ORDERED = [
  { id: 'overview', icon: '📊', shortName: 'Telemetry', name: 'Telemetry', badge: 'Live Rollup', desc: 'Complete live rollup of headcounts, room allotments, arrival manifests, budget balances, and family task progress across celebration.' },
  { id: 'whatsapp', icon: '💬', shortName: 'WhatsApp Deck', name: 'WhatsApp Deck', badge: 'Meta Verified', desc: 'Dispatch personalized web invitations with custom variable tags. Monitor delivery, read receipts, and one-tap reminder queues.' },
  { id: 'hosts', icon: '🙏', shortName: 'Family Hosts', name: 'Family Hosts', badge: 'Multiple Host Profiles', desc: 'Configure individual elder profiles hosting all ceremonies. Route distinct invitations with proper paternal, maternal, or patriarch salutations.' },
  { id: 'events', icon: '🎪', shortName: 'Event', name: 'Events', badge: 'Unlimited Events', desc: 'Create unlimited pre-wedding, main wedding, and post-wedding functions with venues, dress code palettes, and expected headcounts.' },
  { id: 'rsvp', icon: '👥', shortName: 'Guest', name: 'Guest', badge: 'Editable Table', desc: 'Manage guest roster with 1-tap Bride/Groom toggles, direct RSVP status cycling, Needs Stay indicators, and Variant A/B/C assignments.' },
  { id: 'webinvites', icon: '💌', shortName: 'Web Invite', name: 'Web Invite', badge: '3D Wax Seal', desc: 'Interactive 3D golden wax seal envelope experience with falling rose petals, classical Shehnai audio, and guest-tier event filtering.' },
  { id: 'rooms', icon: '🏨', shortName: 'Stay Accomodation', name: 'Stay Accomodation', badge: 'Room Allotments', desc: 'Property and room occupancy cards at top, unassigned outstation queue, and split Stay Place and Room Number controls per family member.' },
  { id: 'flights', icon: '✈️', shortName: 'Flight Arrangements', name: 'Flight Arrangements', badge: 'Airport Manifest', desc: 'Air arrivals grouped by From → To route, flight number, and date. Track airline PNR codes, terminals, and landing timings for pickups.' },
  { id: 'trains', icon: '🚆', shortName: 'Train Arrangements', name: 'Train Arrangements', badge: 'Station Manifest', desc: 'Rail arrivals grouped by station route, train number, and arrival date. Track IRCTC PNRs and platform numbers for porter assistance.' },
  { id: 'sangeet', icon: '🎵', shortName: 'Sangeeth Lineup', name: 'Sangeeth Lineup', badge: 'Stage Cues Table', desc: 'Sequential performance cue sheet in editable table format. Synchronize anchor scripts, track audio, durations, and stage props.' },
  { id: 'guestbook', icon: '📖', shortName: 'Guestbook', name: 'Guestbook', badge: 'Digital Wishes', desc: 'Digital blessing board collecting wishes and aashirwad from both attending guests and outstation family members worldwide.' },
  { id: 'gallery', icon: '📸', shortName: 'Gallery', name: 'Gallery', badge: 'Photo Albums', desc: 'High-resolution ceremony photo albums organized by function for guests to browse, download, and cherish forever.' },
  { id: 'shagun', icon: '🎁', shortName: 'Shagun & Gifts', name: 'Shagun & Gifts', badge: 'Guest-Linked Ledger', desc: 'Confidential ledger linked directly with your Guest List to log Chandla envelopes, silver coins, and return gift statuses.' },
  { id: 'tasks', icon: '✅', shortName: 'Tasks Checklist', name: 'Tasks Checklist', badge: 'Checklist View', desc: 'Interactive tickable task board delegating rituals and pre-wedding errands across brothers, sisters, and cousins.' },
  { id: 'vendors', icon: '🎤', shortName: 'Event Vendors', name: 'Event Vendors', badge: 'By Category', desc: 'Clean agency directory grouped by category with contact persons, phone numbers, and assigned event dates.' },
  { id: 'budget', icon: '₹', shortName: 'Budget Planner', name: 'Budget Planner', badge: 'Cashflow Ledger', desc: 'Card view grouped by category with multi-date assignment pills, vendor contacts, advance paid, and remaining balance due.' },
  { id: 'users', icon: '🔐', shortName: 'Team Access', name: 'Team Access', badge: 'Role Permissions', desc: 'Control access permissions across Creator Super Admin, Family Host Admin, Logistics Lead, and Coordinator roles.' },
  { id: 'calendar', icon: '🗓️', shortName: 'Calendar', name: 'Calendar', badge: 'Multi-Days Timeline', desc: 'Interactive month calendar grid highlighting wedding dates on the left with scheduled event functions on the right.' }
];

let activeWeddingId = 'w1';
let currentModuleId = 'overview';
let selectedCalendarDate = '12 Dec 2026';
let activeRoleFilter = 'ALL';
let messageCreditsRemaining = 2840;
let messageCreditsTotal = 4000;

const AVAILABLE_WEDDING_DATES = ['11 Dec 2026', '12 Dec 2026', '13 Dec 2026', '14 Dec 2026', '15 Dec 2026'];

export let weddingEvents = [
  { id: 'ev1', code: 'Haldi', name: 'Welcome Lunch & Haldi Carnival', date: '12 Dec 2026', time: '12:30 PM', venue: 'Courtyard Lawns, Taj', dress: 'Sunshine Yellow', expectedPax: 180 },
  { id: 'ev2', code: 'Mehendi', name: 'Rajwada Mehendi Soirée', date: '12 Dec 2026', time: '04:30 PM', venue: 'Royal Lawns, Udaipur', dress: 'Emerald & Mirrorwork', expectedPax: 220 },
  { id: 'ev3', code: 'Sangeet', name: 'Starlight Sangeet Gala', date: '13 Dec 2026', time: '08:00 PM', venue: 'Grand Crystal Ballroom', dress: 'Black Tie / Indo-Western', expectedPax: 310 },
  { id: 'ev4', code: 'Shaadi', name: 'Royal Wedding & Reception Gala', date: '14 Dec 2026', time: '06:45 PM', venue: 'Jagmandir Island Mandap', dress: 'Royal Bandhgala & Lehenga', expectedPax: 412 }
];

export let familyHosts = [
  { id: 'h1', name: 'Shri Rajesh Sharma', side: 'Bride Side', relation: 'Bride Father', phone: '+91 98290 11001', eventsHosted: 'All Ceremonies', salutation: 'With warm regards from Shri Rajesh Sharma' },
  { id: 'h2', name: 'Smt. Sunita Sharma', side: 'Bride Side', relation: 'Bride Mother', phone: '+91 98290 11002', eventsHosted: 'All Ceremonies', salutation: 'With affectionate blessings of Smt. Sunita Sharma' },
  { id: 'h3', name: 'Shri Jawarilal Bafna', side: 'Groom Side', relation: 'Family Patriarch', phone: '+91 98400 33003', eventsHosted: 'All Ceremonies', salutation: 'Under the divine aashirwad of Shri Jawarilal Bafna' },
  { id: 'h4', name: 'Shri Paresh Bafna', side: 'Groom Side', relation: 'Groom Father', phone: '+91 98400 22002', eventsHosted: 'All Ceremonies', salutation: 'With best compliments from Shri Paresh Bafna' },
  { id: 'h5', name: 'Smt. Darshana K.', side: 'Groom Side', relation: 'Groom Mother', phone: '+91 98400 22005', eventsHosted: 'All Ceremonies', salutation: 'With warm hospitality from Smt. Darshana K.' }
];

export let workspaceUsers = [
  { name: 'Paresh Bafna', role: 'CREATOR SUPER ADMIN', access: 'All Services + Multi-Wedding Telemetry' },
  { name: 'Darshana K.', role: 'FAMILY HOST ADMIN', access: 'Guest, Stay Accomodation, Shagun & Gallery' },
  { name: 'Karanji', role: 'LOGISTICS LEAD', access: 'Flight Arrangements, Train Arrangements & Tasks' },
  { name: 'Sonal', role: 'EVENT COORDINATOR', access: 'Events, Sangeeth Lineup & Tasks Checklist' },
  { name: 'Lachi', role: 'HOSPITALITY DESK', access: 'Room Allotments & Arrival Manifest' }
];

export let roomInventory = [
  { id: 'R-101', location: 'Taj Lake Palace', roomNumber: '101', type: 'Luxury Lake View', maxPax: 2 },
  { id: 'R-102', location: 'Taj Lake Palace', roomNumber: '102', type: 'Luxury Lake View', maxPax: 2 },
  { id: 'R-103', location: 'Taj Lake Palace', roomNumber: '103', type: 'Royal Family Suite', maxPax: 4 },
  { id: 'R-201', location: 'Trident Udaipur', roomNumber: '201', type: 'Premier Garden', maxPax: 2 },
  { id: 'R-202', location: 'Trident Udaipur', roomNumber: '202', type: 'Premier Garden', maxPax: 2 },
  { id: 'R-301', location: 'Fateh Garh', roomNumber: '301', type: 'Heritage Suite', maxPax: 3 }
];

export let guests = [
  {
    id: 'g1', name: 'Anita Sharma', side: 'Bride', group: 'Family', status: 'Attending', pax: 3, needsRoom: true, inviteTier: 'all-events',
    invitedEvents: ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi'],
    shagun: 51000, giftNote: 'Gold Ginni + Velvet Box', courierStatus: 'Delivered (BlueDart)',
    waInviteSent: true, waStatus: 'Read ✓✓', waSentAt: '10 Oct • 11:20 AM', waTemplate: 'Royal All-Events Pass',
    members: [
      { name: 'Anita Sharma', stayLocation: 'Taj Lake Palace', roomId: 'R-101' },
      { name: 'Rajesh Sharma', stayLocation: 'Taj Lake Palace', roomId: 'R-101' },
      { name: 'Rohan Sharma', stayLocation: 'Taj Lake Palace', roomId: 'R-102' }
    ],
    travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '6E-2142 IndiGo', pnr: 'VY8K2M', date: '12 Dec 2026', station: 'UDR Airport T1', arrivalTime: '10:30 AM' }
  },
  {
    id: 'g2', name: 'Rohit Mehra', side: 'Groom', group: 'Friends', status: 'Attending', pax: 2, needsRoom: true, inviteTier: '2-events',
    invitedEvents: ['Sangeet', 'Shaadi'],
    shagun: 21000, giftNote: 'Silver Bowl Set', courierStatus: 'Delivered (Delhivery)',
    waInviteSent: true, waStatus: 'Delivered ✓✓', waSentAt: '10 Oct • 11:22 AM', waTemplate: 'Sangeet & Reception Pass',
    members: [
      { name: 'Rohit Mehra', stayLocation: 'Trident Udaipur', roomId: 'R-201' },
      { name: 'Karan Malhotra', stayLocation: 'Trident Udaipur', roomId: 'R-202' }
    ],
    travel: { mode: 'Train', fromCity: 'New Delhi (NDLS)', toCity: 'Udaipur City (UDZ)', number: '12951 Mewar Rajdhani', pnr: '2458910', date: '12 Dec 2026', station: 'Udaipur City Pf-1', arrivalTime: '09:15 AM' }
  },
  {
    id: 'g3', name: 'Kavita Iyer', side: 'Bride', group: 'Colleagues', status: 'Attending', pax: 1, needsRoom: false, inviteTier: '1-event',
    invitedEvents: ['Shaadi'],
    shagun: 11000, giftNote: 'Shagun Envelope', courierStatus: 'Digital Invite Only',
    waInviteSent: true, waStatus: 'Read ✓✓', waSentAt: '10 Oct • 04:15 PM', waTemplate: 'Reception Only Pass',
    members: [{ name: 'Kavita Iyer', stayLocation: '', roomId: '' }],
    travel: { mode: 'Flight', fromCity: 'Chennai (MAA)', toCity: 'Udaipur (UDR)', number: 'AI-471 Air India', pnr: 'MN442P', date: '14 Dec 2026', station: 'UDR Airport T1', arrivalTime: '01:15 PM' }
  },
  {
    id: 'g4', name: 'Vikram Singh', side: 'Groom', group: 'Family', status: 'Attending', pax: 4, needsRoom: true, inviteTier: 'all-events',
    invitedEvents: ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi'],
    shagun: 101000, giftNote: 'Silver Coin + Cash Envelope', courierStatus: 'Hand Delivered',
    waInviteSent: true, waStatus: 'Read ✓✓', waSentAt: '09 Oct • 06:40 PM', waTemplate: 'Royal All-Events Pass',
    members: [
      { name: 'Vikram Singh', stayLocation: 'Taj Lake Palace', roomId: 'R-103' },
      { name: 'Geeta Singh', stayLocation: 'Taj Lake Palace', roomId: 'R-103' },
      { name: 'Aarti Singh', stayLocation: 'Taj Lake Palace', roomId: 'R-103' },
      { name: 'Kabir Singh', stayLocation: 'Fateh Garh', roomId: '' }
    ],
    travel: { mode: 'Train', fromCity: 'Jaipur (JP)', toCity: 'Udaipur City (UDZ)', number: '20972 Superfast Exp', pnr: '8834120', date: '12 Dec 2026', station: 'Udaipur Pf-2', arrivalTime: '07:45 AM' }
  },
  {
    id: 'g5', name: 'Suresh Patel', side: 'Groom', group: 'Family', status: 'N/A', pax: 2, needsRoom: true, inviteTier: '2-events',
    invitedEvents: ['Sangeet', 'Shaadi'],
    shagun: 0, giftNote: 'Pending', courierStatus: 'In Transit (DTDC)',
    waInviteSent: false, waStatus: 'Queued', waSentAt: '—', waTemplate: 'Sangeet & Reception Pass',
    members: [
      { name: 'Suresh Patel', stayLocation: 'Trident Udaipur', roomId: '' },
      { name: 'Meena Patel', stayLocation: 'Trident Udaipur', roomId: '' }
    ],
    travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '6E-2142 IndiGo', pnr: 'Pending', date: '12 Dec 2026', station: 'UDR Airport T1', arrivalTime: '10:30 AM' }
  },
  {
    id: 'g6', name: 'Arjun Reddy', side: 'Groom', group: 'Colleagues', status: 'Declined', pax: 0, needsRoom: false, inviteTier: '1-event',
    invitedEvents: ['Shaadi'],
    shagun: 5100, giftNote: 'UPI Shagun Transfer', courierStatus: 'Delivered',
    waInviteSent: true, waStatus: 'Read ✓✓', waSentAt: '09 Oct • 08:00 PM', waTemplate: 'Reception Only Pass',
    members: [],
    travel: null
  }
];

export let vendors = [
  { id: 'v1', category: 'Decoration', vendor: 'Ferns & Petals Royal Mandap', contactPerson: 'Vikramaditya Rao', phone: '+91 98111 22334', email: 'royal@fnpweddings.in', assignedDates: ['12 Dec 2026', '13 Dec 2026', '14 Dec 2026'], total: 1650000, paid: 1000000 },
  { id: 'v2', category: 'Decoration', vendor: 'Udaipur Floral & Phoolon Ki Holi Artisans', contactPerson: 'Govind Mewari', phone: '+91 98111 99887', email: 'govind@mewarflorals.com', assignedDates: ['12 Dec 2026'], total: 350000, paid: 250000 },
  { id: 'v3', category: 'Catering', vendor: 'Foodlink Royal Banquet', contactPerson: 'Chef Sanjay Kapur', phone: '+91 98222 33445', email: 'banquets@foodlink.in', assignedDates: ['12 Dec 2026', '13 Dec 2026', '14 Dec 2026'], total: 1800000, paid: 1200000 },
  { id: 'v4', category: 'DJ & Sound', vendor: 'DJ Chetas & Line Array Pro', contactPerson: 'Rohan Malhotra', phone: '+91 98333 44556', email: 'bookings@djchetas.com', assignedDates: ['13 Dec 2026', '14 Dec 2026'], total: 450000, paid: 250000 },
  { id: 'v5', category: 'Anchoring', vendor: 'Anchor Gunjan Utreja', contactPerson: 'Neha Verma (Manager)', phone: '+91 98444 55667', email: 'gunjan@stagehosts.in', assignedDates: ['12 Dec 2026', '13 Dec 2026'], total: 250000, paid: 150000 },
  { id: 'v6', category: 'Photography', vendor: 'Clickbox Cinema & Candid', contactPerson: 'Karthik Srinivasan', phone: '+91 98555 66778', email: 'hello@clickbox.in', assignedDates: ['12 Dec 2026', '13 Dec 2026', '14 Dec 2026'], total: 500000, paid: 300000 }
];

export let familyTasks = [
  { id: 't1', title: 'Confirm 85 Bandhani Safas delivery at Taj lobby', owner: 'Karanji', due: '11 Dec', status: 'Completed', done: true },
  { id: 't2', title: 'Coordinate ceremonial thali setup for main stage', owner: 'Sonal', due: '12 Dec', status: 'In Progress', done: false },
  { id: 't3', title: 'Handover Sangeet family dance USB tracks to DJ console', owner: 'Lachi', due: '12 Dec', status: 'Pending', done: false },
  { id: 't4', title: 'Collect silver return coins from family jewellery shop', owner: 'Paresh', due: '10 Dec', status: 'Completed', done: true },
  { id: 't5', title: 'Place welcome hampers & itinerary cards in hotel rooms', owner: 'Darshana', due: '11 Dec', status: 'In Progress', done: false }
];

export let sangeetLineup = [
  { id: 'sg1', seq: '01', group: 'Bride Sisters (Sonal & Lachi)', song: 'Kesariya + Chaudhary Mashup', duration: '4:15 mins', props: 'LED Dandiya & Dupattas', coordinator: 'Sonal' },
  { id: 'sg2', seq: '02', group: 'Groom Friends (Rohit & Karan)', song: 'Kala Chashma + Gallan Goodiyaan', duration: '3:50 mins', props: 'Aviator Shades & Dhol', coordinator: 'Karanji' },
  { id: 'sg3', seq: '03', group: 'Parents Special (Sharma & Bafna Parivar)', song: 'Wah Wah Ramji', duration: '3:20 mins', props: 'Rose Petal Cannons', coordinator: 'Paresh' },
  { id: 'sg4', seq: '04', group: 'Couple Grand Finale (Aarav & Ananya)', song: 'Raatan Lambiyan + Tum Se Hi', duration: '4:45 mins', props: 'Cold Pyro & Low Fog', coordinator: 'Stage Manager' }
];

export let guestbookEntries = [
  { author: 'Anita Sharma', relation: 'Bride Side Family', time: '2h ago', text: 'Heartiest congratulations to Aarav and Ananya! Wishing you a lifetime of love and laughter.' },
  { author: 'Vikram Singh', relation: 'Groom Side Family', time: 'Yesterday', text: 'See you all at Taj Lake Palace! Super excited for the Sangeeth celebrations.' },
  { author: 'Shri Jawarilal Bafna', relation: 'Family Patriarch', time: '2 days ago', text: 'Infinite blessings and aashirwad to both families on this joyous union.' }
];

export let galleryPhotos = [
  { event: 'Mehendi', title: 'Royal Lawns Mehendi', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80' },
  { event: 'Sangeet', title: 'Starlight Sangeet Entry', img: 'https://images.unsplash.com/photo-1545232972-90456021c622?auto=format&fit=crop&w=800&q=80' },
  { event: 'Shaadi', title: 'Jagmandir Island Mandap', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' }
];

export let weddingsPortfolio = [
  {
    id: 'w1', couple: 'Aarav & Ananya', city: 'Udaipur, Rajasthan', dates: '12–14 Dec 2026',
    userRole: 'CREATOR SUPER ADMIN', roleBadgeColor: 'bg-gold text-obsidian',
    rolePermissionsDesc: 'Full Creator & Planner OS Control across all modules, budgets & templates',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80', isLive: true
  },
  {
    id: 'w2', couple: 'Lachi & Karanji', city: 'Chennai, Tamil Nadu', dates: '19–20 Feb 2026',
    userRole: 'FAMILY HOST ADMIN', roleBadgeColor: 'bg-emeraldSS/20 text-emeraldSS border border-emeraldSS/40',
    rolePermissionsDesc: 'Hosting Family Access: Manage Guests, Room Allotments, Shagun & Gallery',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80', isLive: false,
    telemetry: { guestsTotal: 210, attending: 165, declined: 20, na: 25, attendingPax: 460, eventsCount: 5, roomsTotal: 55, roomsFull: 42, roomsPartial: 8, roomsVacant: 5, flightPax: 180, trainPax: 145, budgetTotal: 4200000, budgetPaid: 3600000, tasksTotal: 18, tasksCompleted: 14, tasksInProgress: 2, tasksPending: 1, tasksNotStarted: 1 }
  },
  {
    id: 'w3', couple: 'Dushyant & Riya', city: 'Jaipur, Rajasthan', dates: '05–07 Nov 2026',
    userRole: 'LOGISTICS COORDINATOR', roleBadgeColor: 'bg-skySS/20 text-skySS border border-skySS/40',
    rolePermissionsDesc: 'Hospitality & Travel Access: Manage Flight/Train Arrivals & Room Allotments',
    img: 'https://images.unsplash.com/photo-1545232972-90456021c622?auto=format&fit=crop&w=900&q=80', isLive: false,
    telemetry: { guestsTotal: 140, attending: 112, declined: 10, na: 18, attendingPax: 310, eventsCount: 4, roomsTotal: 40, roomsFull: 30, roomsPartial: 6, roomsVacant: 4, flightPax: 120, trainPax: 95, budgetTotal: 3100000, budgetPaid: 2100000, tasksTotal: 12, tasksCompleted: 9, tasksInProgress: 2, tasksPending: 1, tasksNotStarted: 0 }
  },
  {
    id: 'w4', couple: 'Kabir & Meera', city: 'Jodhpur, Rajasthan', dates: '22–24 Jan 2027',
    userRole: 'INVITED GUEST PASS', roleBadgeColor: 'bg-amberSS/20 text-amberSS border border-amberSS/40',
    rolePermissionsDesc: 'Invited Guest View: View your assigned events, hotel room & arrival PNR',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80', isLive: false,
    telemetry: { guestsTotal: 180, attending: 150, declined: 12, na: 18, attendingPax: 380, eventsCount: 4, roomsTotal: 48, roomsFull: 40, roomsPartial: 5, roomsVacant: 3, flightPax: 140, trainPax: 110, budgetTotal: 3800000, budgetPaid: 2900000, tasksTotal: 15, tasksCompleted: 11, tasksInProgress: 3, tasksPending: 1, tasksNotStarted: 0 }
  }
];

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

export function findFeatureItem(moduleId) {
  return ALL_SERVICES_ORDERED.find(it => it.id === moduleId) || ALL_SERVICES_ORDERED[0];
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

export function filterPortfolioByRole(role) {
  activeRoleFilter = role;
  document.querySelectorAll('#roleFilterButtons button').forEach(b => {
    if (b.dataset.rolebtn === role) {
      b.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-gold text-obsidian';
    } else {
      b.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream';
    }
  });
  renderCreatorWeddings();
}

export function renderCreatorWeddings() {
  const strip = document.getElementById('globalRollupStrip');
  const grid = document.getElementById('creatorWeddingsGrid');
  if (!strip || !grid) return;

  const tLive = computeLiveTelemetry();
  strip.innerHTML = `
    <div class="bento-card p-4"><span class="text-xs text-muted block">Your Weddings</span><strong class="text-xl font-extrabold text-cream">${weddingsPortfolio.length}</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Active Guests</span><strong class="text-xl font-extrabold text-emeraldSS">${tLive.guestsTotal} Families</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Events</span><strong class="text-xl font-extrabold text-gold">Unlimited (${tLive.eventsCount})</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Room Allotments</span><strong class="text-xl font-extrabold text-cream">${tLive.roomsTotal} Rooms</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Flight / Train</span><strong class="text-base font-extrabold text-skySS">✈️ ${tLive.flightPax} • 🚆 ${tLive.trainPax}</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Total Budget</span><strong class="text-base font-extrabold text-gold">${formatINR(tLive.budgetTotal)}</strong></div>
  `;

  const filtered = activeRoleFilter === 'ALL'
    ? weddingsPortfolio
    : weddingsPortfolio.filter(w => w.userRole === activeRoleFilter);

  grid.innerHTML = filtered.map(w => {
    const t = w.isLive ? tLive : w.telemetry;
    const actionBtn = w.userRole === 'INVITED GUEST PASS'
      ? `<button onclick="typeof switchRootMode === 'function' ? switchRootMode('guest') : openWeddingWorkspace('${w.id}')" class="w-full py-3 rounded-xl bg-emeraldSS/20 border border-emeraldSS/40 text-emeraldSS text-sm font-bold">🎟️ Open Your Private Guest Pass for ${w.couple} →</button>`
      : `<button onclick="openWeddingWorkspace('${w.id}')" class="w-full btn-gold py-3 rounded-xl text-sm font-bold">Open ${w.couple} Workspace as ${w.userRole} →</button>`;

    return `
      <div class="bento-card overflow-hidden flex flex-col justify-between">
        <div>
          <div class="relative h-40">
            <img src="${w.img}" class="w-full h-full object-cover opacity-45" alt="${w.couple}" />
            <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent p-5 flex flex-col justify-between">
              <div class="flex justify-between items-center">
                <span class="px-3 py-1 rounded-full text-xs font-mono font-bold ${w.roleBadgeColor}">YOUR ROLE: ${w.userRole}</span>
                <span class="px-2.5 py-1 rounded-lg bg-obsidian/80 text-xs text-cream">${w.dates}</span>
              </div>
              <div>
                <h3 class="font-serif text-3xl font-bold text-cream">${w.couple}</h3>
                <span class="text-xs text-gold block">${w.city} • ${w.rolePermissionsDesc}</span>
              </div>
            </div>
          </div>
          <div class="p-5">${buildTelemetryCardHTML(t)}</div>
        </div>
        <div class="px-5 pb-5">${actionBtn}</div>
      </div>
    `;
  }).join('');
}

export function renderWorkspaceAppLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  const alertsBox = document.getElementById('wsCriticalAlertsBox');
  if (!grid || !alertsBox) return;

  grid.innerHTML = ALL_SERVICES_ORDERED.map(m => {
    const active = m.id === currentModuleId;
    return `
      <button onclick="openSubPage('${m.id}')" class="app-tile ${active ? 'active-tile' : ''}">
        <div class="app-tile-icon">${m.icon}</div>
        <div>
          <strong class="block text-xs font-bold text-cream leading-snug">${m.shortName}</strong>
          <span class="text-[10px] text-gold font-medium block mt-0.5">${m.badge}</span>
        </div>
      </button>
    `;
  }).join('');

  const pendingRsvpCount = guests.filter(g => g.status === 'N/A').length;
  const unassignedRoomsCount = guests.filter(g => g.status === 'Attending' && g.needsRoom && (g.members || []).some(m => !m.roomId)).length;
  const openTasksCount = familyTasks.filter(t => !t.done).length;

  alertsBox.innerHTML = `
    <div class="bg-obsidian border border-gold/40 rounded-2xl p-4 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-gold">⚠️ ${messageCreditsRemaining.toLocaleString()} credits remaining</span>
        <span class="text-xs text-muted">of ${messageCreditsTotal.toLocaleString()}</span>
      </div>
      <div class="w-full h-2 bg-surface rounded-full overflow-hidden">
        <div class="bg-gold h-full" style="width:${Math.round((messageCreditsRemaining / messageCreditsTotal) * 100)}%"></div>
      </div>
      <p class="text-xs text-muted">1 credit = 1 WhatsApp message. Extra credits @ ₹1/message.</p>
    </div>

    <div onclick="openSubPage('rsvp')" class="bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
      <div class="flex items-center gap-3">
        <span class="text-lg">👥</span>
        <div>
          <strong class="text-sm text-cream block">${pendingRsvpCount} family awaiting RSVP</strong>
          <span class="text-xs text-muted">Click status button in Guest Table</span>
        </div>
      </div>
      <span class="text-xs font-bold text-gold">Open →</span>
    </div>

    <div onclick="openSubPage('rooms')" class="bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
      <div class="flex items-center gap-3">
        <span class="text-lg">🏨</span>
        <div>
          <strong class="text-sm text-cream block">${unassignedRoomsCount} family needing stay unallotted</strong>
          <span class="text-xs text-muted">Allot in Stay Accomodation</span>
        </div>
      </div>
      <span class="text-xs font-bold text-gold">Open →</span>
    </div>

    <div onclick="openSubPage('tasks')" class="bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
      <div class="flex items-center gap-3">
        <span class="text-lg">✅</span>
        <div>
          <strong class="text-sm text-cream block">${openTasksCount} family checklist tasks open</strong>
          <span class="text-xs text-muted">Tick off in Tasks Checklist</span>
        </div>
      </div>
      <span class="text-xs font-bold text-gold">Open →</span>
    </div>
  `;
}

export function toggleAppGridLauncher() {
  const sec = document.getElementById('wsAppLauncherSection');
  if (sec) sec.classList.toggle('hidden');
}

const WEDDINGS_URL_PATH = new URL('./weddings.html', import.meta.url).pathname;

function syncWeddingUrl(weddingId, moduleId) {
  window.history.pushState(
    { mode: 'creator', wedding: weddingId, module: moduleId || 'overview' },
    '',
    WEDDINGS_URL_PATH
  );
}

export function backToAllWeddings(skipPush = false) {
  document.getElementById('creator-all-weddings')?.classList.remove('hidden');
  document.getElementById('creator-single-workspace')?.classList.add('hidden');
  if (!skipPush) syncWeddingUrl(null, null);
  renderCreatorWeddings();
}

export function openWeddingWorkspace(id, targetModule = 'overview', skipPush = false) {
  activeWeddingId = id;
  const w = weddingsPortfolio.find(x => x.id === id) || weddingsPortfolio[0];
  const coupleEl = document.getElementById('wsBannerCouple');
  const datesEl = document.getElementById('wsBannerDates');
  const badgeEl = document.getElementById('wsBannerRoleBadge');

  if (coupleEl) coupleEl.textContent = w.couple + ' Wedding';
  if (datesEl) datesEl.textContent = `${w.dates} • ${w.city}`;
  if (badgeEl) badgeEl.textContent = w.userRole || 'CREATOR SUPER ADMIN';

  document.getElementById('creator-all-weddings')?.classList.add('hidden');
  document.getElementById('creator-single-workspace')?.classList.remove('hidden');

  if (!skipPush) syncWeddingUrl(id, targetModule);
  openSubPage(targetModule, true);
}

export function switchWorkspaceModule(modId) {
  openSubPage(modId);
}

export function openSubPage(moduleId, skipPush = false) {
  currentModuleId = moduleId;
  if (!skipPush && !document.getElementById('creator-single-workspace')?.classList.contains('hidden')) {
    syncWeddingUrl(activeWeddingId, moduleId);
  }
  renderWorkspaceAppLauncher();
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  const t = computeLiveTelemetry();
  const modInfo = findFeatureItem(moduleId);

  const headerBanner = `
    <div class="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-surface via-card to-surface">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-3xl shrink-0">${modInfo.icon}</div>
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-gold">Service Workspace</span>
          <h3 class="font-serif text-3xl font-bold text-cream mt-0.5">${modInfo.name}</h3>
          <p class="text-sm text-muted">${modInfo.desc}</p>
        </div>
      </div>
      <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS border border-emeraldSS/30 shrink-0">● ${modInfo.badge}</span>
    </div>
  `;

  if (moduleId === 'overview') {
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6">${buildTelemetryCardHTML(t)}</div>`;
  } else if (moduleId === 'calendar') {
    const decDays = Array.from({ length: 31 }, (_, i) => i + 1);
    const startOffset = 1;
    const dayEvents = weddingEvents.filter(ev => ev.date === selectedCalendarDate);

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-7 bento-card p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs font-mono uppercase text-gold">Multi-Days Timeline</span>
              <h4 class="font-serif text-2xl font-bold text-cream">December 2026</h4>
            </div>
            <div class="flex items-center gap-3 text-xs">
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-gold inline-block"></span> Wedding Function Day</span>
            </div>
          </div>

          <div class="grid grid-cols-7 gap-2 text-center text-xs font-bold text-muted pb-2 border-b border-borderWarm">
            <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
          </div>

          <div class="grid grid-cols-7 gap-2">
            ${Array.from({ length: startOffset }).map(() => `<div class="h-16 rounded-xl bg-obsidian/30"></div>`).join('')}
            ${decDays.map(d => {
              const fullDate = `${d} Dec 2026`;
              const evsOnDay = weddingEvents.filter(e => e.date === fullDate);
              const hasEvents = evsOnDay.length > 0;
              const isSelected = selectedCalendarDate === fullDate;

              return `
                <button onclick="selectCalendarDate('${fullDate}')" class="h-20 rounded-2xl p-2 flex flex-col justify-between items-center border transition ${
                  isSelected
                    ? 'bg-gold text-obsidian border-gold shadow-lg scale-[1.03]'
                    : hasEvents
                    ? 'bg-gold/15 border-gold/60 text-cream hover:bg-gold/25'
                    : 'bg-obsidian/80 border-borderWarm/50 text-muted hover:border-gold/40'
                }">
                  <span class="text-sm font-bold">${d}</span>${hasEvents ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isSelected ? 'bg-obsidian text-gold' : 'bg-gold text-obsidian'}">${evsOnDay.length} ${evsOnDay.length > 1 ? 'Events' : 'Event'}</span>` : `<span class="text-[10px] opacity-30">—</span>`}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="lg:col-span-5 bento-card p-6 space-y-4">
          <div class="flex items-center justify-between border-b border-borderWarm pb-3">
            <div>
              <span class="text-xs font-mono text-gold uppercase">Selected Date Schedule</span>
              <h4 class="font-serif text-2xl font-bold text-cream">${selectedCalendarDate}</h4>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">${dayEvents.length} Functions</span>
          </div>

          ${dayEvents.length === 0 ? `
            <div class="bg-obsidian p-6 rounded-2xl border border-borderWarm text-center space-y-2">
              <p class="text-sm text-cream font-bold">No wedding ceremonies scheduled on ${selectedCalendarDate}</p>
              <p class="text-xs text-muted">Click highlighted dates (12, 13, or 14 Dec) on the calendar to inspect scheduled functions.</p>
            </div>
          ` : `
            <div class="space-y-3">
              ${dayEvents.map(ev => `
                <div class="bg-obsidian p-4 rounded-2xl border border-gold/40 space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-gold text-obsidian">${ev.time}</span>
                    <span class="text-xs font-mono text-emeraldSS font-bold">${ev.expectedPax} Expected Pax</span>
                  </div>
                  <h5 class="font-serif text-xl font-bold text-cream">${ev.name}</h5>
                  <div class="text-xs text-muted space-y-1">
                    <div>📍 Venue: <strong class="text-cream">${ev.venue}</strong></div>
                    <div>👗 Dress Code: <strong class="text-gold">${ev.dress}</strong></div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}

          <div class="pt-3 border-t border-borderWarm space-y-2">
            <span class="text-xs font-bold uppercase text-muted block">Quick Jump to Event Days</span>
            <div class="flex flex-wrap gap-2">
              ${[...new Set(weddingEvents.map(e => e.date))].map(dt => `
                <button onclick="selectCalendarDate('${dt}')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${selectedCalendarDate === dt ? 'bg-gold text-obsidian' : 'bg-card border border-borderWarm text-cream'}">${dt}</button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (moduleId === 'events') {
    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bento-card p-5"><span class="text-xs text-muted block">Event Capacity</span><strong class="text-2xl text-gold">Unlimited Events</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">Variant C (All Events)</span><strong class="text-2xl text-emeraldSS">${guests.filter(g => g.inviteTier === 'all-events').length} Families</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">Variant B (2 Events)</span><strong class="text-2xl text-gold">${guests.filter(g => g.inviteTier === '2-events').length} Families</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">Variant A (1 Event)</span><strong class="text-2xl text-skySS">${guests.filter(g => g.inviteTier === '1-event').length} Families</strong></div>
      </div>
      <div class="bento-card p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 class="font-serif text-xl font-bold text-cream">Configured Wedding Events (${weddingEvents.length} Active • Unlimited Allowed)</h4>
          <p class="text-xs text-muted">Add as many pre-wedding, main wedding, or post-wedding events as needed.</p>
        </div>
        <button onclick="addNewEventInline()" class="btn-gold px-4 py-2 rounded-xl text-xs font-bold">+ Add Event</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${weddingEvents.map(ev => `
          <div class="bento-card p-6 space-y-2.5">
            <div class="flex justify-between items-center"><span class="px-3 py-1 rounded-lg text-xs font-bold bg-gold/20 text-gold">${ev.code}</span><span class="text-sm font-bold text-cream">${ev.date} • ${ev.time}</span></div>
            <h4 class="font-serif text-2xl font-bold text-cream">${ev.name}</h4>
            <div class="text-sm text-muted">Venue: <strong class="text-cream">${ev.venue}</strong> | Dress Code: <strong class="text-gold">${ev.dress}</strong></div>
            <div class="text-xs font-bold text-emeraldSS pt-1">Expected Attendance: ${ev.expectedPax} Guests</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (moduleId === 'hosts') {
    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 class="font-serif text-2xl font-bold text-cream">Individual Family Host Profiles (${familyHosts.length} Active)</h4>
          <p class="text-xs text-muted">Each host profile is listed individually (never combined) and hosts all wedding ceremonies.</p>
        </div>
        <button onclick="addNewHostProfile()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Individual Host Profile</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${familyHosts.map(h => `
          <div class="bento-card p-6 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="px-3 py-1 rounded-lg text-xs font-bold bg-gold/20 text-gold">${h.side} • ${h.relation}</span>
                <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emeraldSS/15 text-emeraldSS">All Ceremonies</span>
              </div>
              <input type="text" value="${h.name}" onchange="updateHostField('${h.id}', 'name', this.value)" class="ss-input font-serif text-2xl font-bold text-cream" />
              <input type="text" value="${h.salutation}" onchange="updateHostField('${h.id}', 'salutation', this.value)" class="ss-input text-xs italic text-gold" />
            </div>
            <div class="pt-3 border-t border-borderWarm space-y-1.5 text-sm">
              <div class="flex justify-between"><span class="text-muted">Ceremonies Hosted:</span><strong class="text-emeraldSS">All Ceremonies (${weddingEvents.length})</strong></div>
              <div class="flex justify-between"><span class="text-muted">Host Contact:</span><strong class="text-cream font-mono">${h.phone}</strong></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (moduleId === 'rsvp') {
    const stayNeededCount = guests.filter(g => g.status === 'Attending' && g.needsRoom).length;
    const localNoStayCount = guests.filter(g => g.status === 'Attending' && !g.needsRoom).length;

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bento-card p-4"><span class="text-xs text-muted block">Total Families</span><strong class="text-2xl text-cream">${guests.length}</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">Attending Pax</span><strong class="text-2xl text-emeraldSS">${t.attendingPax} Pax</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">🏨 Needs Room Allocation</span><strong class="text-2xl text-gold">${stayNeededCount} Families</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">🏠 Local / Own Stay (No Room)</span><strong class="text-2xl text-skySS">${localNoStayCount} Families</strong></div>
      </div>

      <div class="bento-card p-6 space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 class="font-serif text-2xl font-bold text-cream">Interactive Guest List Table</h4>
            <p class="text-sm text-muted">Click <strong>Bride / Groom</strong> buttons to switch side, click the <strong>RSVP Status button</strong> to cycle status, and toggle <strong>Needs Stay</strong> for outstation vs. local guests.</p>
          </div>
          <button onclick="addNewGuestRowInline()" class="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold">+ Add New Guest Row</button>
        </div>

        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Primary Guest Name</th>
                <th>Side (Click Button)</th>
                <th>RSVP Status (Click to Cycle)</th>
                <th>Pax</th>
                <th>Room Needed?</th>
                <th>Invite Event Variant</th>
              </tr>
            </thead>
            <tbody>
              ${guests.map((g, idx) => {
                const statusStyle = g.status === 'Attending'
                  ? 'bg-emeraldSS/20 text-emeraldSS border-emeraldSS/40'
                  : g.status === 'Declined'
                  ? 'bg-crimsonSS/20 text-crimsonSS border-crimsonSS/40'
                  : 'bg-amberSS/20 text-amberSS border-amberSS/40';
                const statusIcon = g.status === 'Attending' ? '✓ Attending' : (g.status === 'Declined' ? '✕ Declined' : '⏳ Pending (Click)');

                return `
                  <tr>
                    <td class="font-mono text-xs text-muted">${idx + 1}</td>
                    <td>
                      <input type="text" value="${g.name}" onchange="updateGuestField('${g.id}', 'name', this.value)" class="ss-input font-bold" />
                    </td>
                    <td>
                      <div class="inline-flex rounded-xl bg-obsidian p-1 border border-borderWarm gap-1">
                        <button onclick="updateGuestField('${g.id}', 'side', 'Bride')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${g.side === 'Bride' ? 'bg-gold text-obsidian shadow' : 'text-muted hover:text-cream'}">👰 Bride</button>
                        <button onclick="updateGuestField('${g.id}', 'side', 'Groom')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${g.side === 'Groom' ? 'bg-gold text-obsidian shadow' : 'text-muted hover:text-cream'}">🤵 Groom</button>
                      </div>
                    </td>
                    <td>
                      <button onclick="cycleGuestRsvpStatus('${g.id}')" class="px-4 py-2 rounded-xl border text-xs font-bold transition hover:scale-105 ${statusStyle}">
                        ${statusIcon}
                      </button>
                    </td>
                    <td style="width:95px">
                      <input type="number" min="0" max="15" value="${g.pax}" onchange="updateGuestField('${g.id}', 'pax', this.value)" class="ss-input font-mono text-center" />
                    </td>
                    <td>
                      <button onclick="toggleGuestNeedsRoom('${g.id}')" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold transition ${g.needsRoom ? 'bg-gold/20 border-gold text-gold' : 'bg-obsidian border-borderWarm text-muted'}">
                        ${g.needsRoom ? '🏨 Needs Room' : '🏠 No Room Needed'}
                      </button>
                    </td>
                    <td>
                      <select onchange="updateGuestField('${g.id}', 'inviteTier', this.value)" class="ss-input font-bold text-gold">
                        <option value="all-events" ${g.inviteTier === 'all-events' ? 'selected' : ''}>Variant C: All Events</option>
                        <option value="2-events" ${g.inviteTier === '2-events' ? 'selected' : ''}>Variant B: 2 Events (Sangeet+Shaadi)</option>
                        <option value="1-event" ${g.inviteTier === '1-event' ? 'selected' : ''}>Variant A: 1 Event (Reception)</option>
                      </select>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (moduleId === 'rooms') {
    const locations = getStayLocationsList();
    const eligibleGuests = guests.filter(g => g.status !== 'Declined' && g.needsRoom);
    const skippedLocalGuests = guests.filter(g => g.status !== 'Declined' && !g.needsRoom);

    const unassignedMembers = [];
    eligibleGuests.forEach(g => {
      if (!g.members || g.members.length === 0) g.members = [{ name: g.name, stayLocation: locations[0], roomId: '' }];
      g.members.forEach((m, mIdx) => {
        const item = { guestId: g.id, primaryName: g.name, side: g.side, pax: g.pax, memberIdx: mIdx, memberName: m.name, stayLocation: m.stayLocation || '', roomId: m.roomId || '' };
        if (!m.roomId) unassignedMembers.push(item);
      });
    });

    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-6 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-xs font-mono uppercase text-gold">Top View • Stay Places &amp; Room Cards</span>
            <h4 class="font-serif text-2xl font-bold text-cream">1. All Stay Locations &amp; Room-Wise Occupancy Cards</h4>
            <p class="text-sm text-muted">Grouped by Hotel Property and individual Room Number. Only guests marked "Needs Room" (${eligibleGuests.length} families) are allotted here; ${skippedLocalGuests.length} local family is excluded.</p>
          </div>
          <button onclick="addRoomBlockQuick()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add New Hotel Room Card</button>
        </div>

        <div class="space-y-6">
          ${locations.map(loc => {
            const locRooms = roomInventory.filter(r => r.location === loc);
            const totalBeds = locRooms.reduce((s, r) => s + r.maxPax, 0);
            const occupiedBeds = locRooms.reduce((s, r) => s + getRoomOccupants(r.id).length, 0);

            return `
              <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderWarm pb-3">
                  <div>
                    <h5 class="font-serif text-2xl font-bold text-gold">🏨 ${loc}</h5>
                    <span class="text-xs text-muted">${locRooms.length} Rooms Configured • ${occupiedBeds} of ${totalBeds} Beds Occupied</span>
                  </div>
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold">${Math.round((occupiedBeds / totalBeds) * 100)}% Occupied</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${locRooms.map(rm => {
                    const occ = getRoomOccupants(rm.id);
                    const isFull = occ.length >= rm.maxPax;
                    const statusBadge = occ.length === 0
                      ? '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-card text-muted">Vacant (0/' + rm.maxPax + ')</span>'
                      : isFull
                      ? '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-emeraldSS/20 text-emeraldSS">Full (' + occ.length + '/' + rm.maxPax + ')</span>'
                      : '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-amberSS/20 text-amberSS">Partial (' + occ.length + '/' + rm.maxPax + ')</span>';

                    return `
                      <div class="bg-card border ${occ.length > 0 ? 'border-gold/40' : 'border-borderWarm'} rounded-2xl p-4 space-y-3 flex flex-col justify-between">
                        <div class="space-y-2">
                          <div class="flex justify-between items-center">
                            <strong class="font-mono text-lg text-cream">Room ${rm.roomNumber}</strong>
                            ${statusBadge}
                          </div>
                          <span class="text-xs text-gold block">${rm.type}</span>
                          <div class="space-y-1.5 pt-2 border-t border-borderWarm/60">
                            ${occ.length === 0 ? `<p class="text-xs text-muted italic">No guests allotted yet</p>` : occ.map(o => `
                              <div class="flex items-center justify-between bg-obsidian px-2.5 py-1.5 rounded-lg text-xs">
                                <span class="text-cream font-semibold">👤 ${o.memberName}</span>
                                <button onclick="updateMemberRoomInline('${o.guestId}', ${o.memberIndex}, '')" class="text-crimsonSS hover:underline text-[11px]">Unassign</button>
                              </div>
                            `).join('')}
                          </div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="bento-card p-6 space-y-4 border-amberSS/50">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span class="text-xs font-mono uppercase text-amberSS font-bold">Unassigned Queue</span>
            <h4 class="font-serif text-2xl font-bold text-cream">2. Unassigned Outstation Members Needing Room (${unassignedMembers.length})</h4>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">${unassignedMembers.length} Pending Allotment</span>
        </div>

        ${unassignedMembers.length === 0 ? `
          <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-xl p-4 text-sm text-emeraldSS font-bold">
            ✓ All attending outstation members needing stay have been allotted rooms!
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${unassignedMembers.map(u => {
              const chosenLoc = u.stayLocation || locations[0];
              const roomsForLoc = roomInventory.filter(r => r.location === chosenLoc);
              return `
                <div class="bg-obsidian border border-amberSS/40 rounded-2xl p-4 space-y-3">
                  <div class="flex justify-between items-start">
                    <div>
                      <strong class="text-sm text-cream block">${u.memberName}</strong>
                      <span class="text-xs text-muted">Family: ${u.primaryName} (${u.side})</span>
                    </div>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amberSS/20 text-amberSS">Unassigned</span>
                  </div>
                  <div class="space-y-2 text-xs">
                    <div>
                      <label class="text-muted block mb-1">1. Select Stay Place (Hotel):</label>
                      <select onchange="updateMemberStayLocation('${u.guestId}', ${u.memberIdx}, this.value)" class="ss-input text-xs font-bold text-gold">
                        ${locations.map(l => `<option value="${l}" ${chosenLoc === l ? 'selected' : ''}>${l}</option>`).join('')}
                      </select>
                    </div>
                    <div>
                      <label class="text-muted block mb-1">2. Select Room in ${chosenLoc}:</label>
                      <select onchange="updateMemberRoomInline('${u.guestId}', ${u.memberIdx}, this.value)" class="ss-input text-xs font-bold text-emeraldSS">
                        <option value="">-- Choose Room --</option>
                        ${roomsForLoc.map(rm => `<option value="${rm.id}">Rm ${rm.roomNumber} (${rm.type}) [${getRoomOccupants(rm.id).length}/${rm.maxPax}]</option>`).join('')}
                      </select>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>

      <div class="bento-card p-6 space-y-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold">Guest Member Allotment Directory</span>
          <h4 class="font-serif text-2xl font-bold text-cream">3. Guest-Wise Stay Place &amp; Room Allotment Controls</h4>
          <p class="text-sm text-muted">Stay Place and Room Number are split into separate dropdowns for every family member.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${eligibleGuests.map(g => `
            <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-3">
              <div class="flex justify-between items-center border-b border-borderWarm pb-2.5">
                <div>
                  <strong class="font-serif text-xl text-cream">${g.name} Family</strong>
                  <span class="text-xs text-muted block">${g.side} Side • ${g.pax} Attending Pax</span>
                </div>
                <button onclick="addMemberToFamilyInline('${g.id}')" class="px-3 py-1 rounded-lg bg-card border border-gold/40 text-xs font-bold text-gold">+ Add Member</button>
              </div>
              <div class="space-y-2.5">
                ${(g.members || []).map((m, mIdx) => {
                  const rmObj = roomInventory.find(r => r.id === m.roomId);
                  const activeLoc = rmObj ? rmObj.location : (m.stayLocation || locations[0]);
                  const availableRooms = roomInventory.filter(r => r.location === activeLoc);

                  return `
                    <div class="bg-card p-3 rounded-xl border border-borderWarm/70 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                      <input type="text" value="${m.name}" onchange="updateMemberNameInline('${g.id}', ${mIdx}, this.value)" class="ss-input text-xs font-semibold" />
                      <select onchange="updateMemberStayLocation('${g.id}', ${mIdx}, this.value)" class="ss-input text-xs text-gold font-bold">
                        ${locations.map(l => `<option value="${l}" ${activeLoc === l ? 'selected' : ''}>🏨 ${l}</option>`).join('')}
                      </select>
                      <select onchange="updateMemberRoomInline('${g.id}', ${mIdx}, this.value)" class="ss-input text-xs ${m.roomId ? 'text-emeraldSS font-bold' : 'text-amberSS'}">
                        <option value="">-- Unassigned --</option>
                        ${availableRooms.map(rm => `<option value="${rm.id}" ${m.roomId === rm.id ? 'selected' : ''}>Rm ${rm.roomNumber} (${rm.type})</option>`).join('')}
                      </select>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (moduleId === 'flights') {
    const flightGuests = guests.filter(g => g.status !== 'Declined' && (!g.travel || g.travel.mode === 'Flight'));
    const unassignedFlights = flightGuests.filter(g => !g.travel || !g.travel.number || !g.travel.pnr || g.travel.pnr === 'Pending');

    const routeGroups = {};
    const flightNoGroups = {};
    const dateGroups = {};

    flightGuests.forEach(g => {
      const tr = g.travel || {};
      const routeKey = `${tr.fromCity || 'TBD'} → ${tr.toCity || 'Udaipur (UDR)'}`;
      const numKey = tr.number || 'Flight Pending';
      const dtKey = `${tr.date || '12 Dec 2026'} (${tr.arrivalTime || 'Time TBD'})`;

      if (!routeGroups[routeKey]) routeGroups[routeKey] = [];
      routeGroups[routeKey].push(g);

      if (!flightNoGroups[numKey]) flightNoGroups[numKey] = [];
      flightNoGroups[numKey].push(g);

      if (!dateGroups[dtKey]) dateGroups[dtKey] = [];
      dateGroups[dtKey].push(g);
    });

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-skySS font-bold">1. Route-Wise (From → To)</span>
          ${Object.entries(routeGroups).map(([route, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-cream block">✈️ ${route}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-skySS/20 text-skySS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-gold font-bold">2. Flight-Wise Grouping</span>
          ${Object.entries(flightNoGroups).map(([fnum, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-gold block">🛫 ${fnum}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-gold/20 text-gold text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-emeraldSS font-bold">3. Date &amp; Time Wise</span>
          ${Object.entries(dateGroups).map(([dt, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-emeraldSS block">📅 ${dt}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-emeraldSS/20 text-emeraldSS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bento-card p-5 space-y-3 border-amberSS/40">
        <div class="flex justify-between items-center">
          <h4 class="font-serif text-xl font-bold text-cream">⏳ Guests With Pending Flight PNR (${unassignedFlights.length})</h4>
          <span class="text-xs text-amberSS font-bold">Follow up for ticket copy</span>
        </div>
        ${unassignedFlights.length === 0 ? `<p class="text-xs text-emeraldSS font-bold">✓ All air passengers have confirmed flight PNRs!</p>` : `
          <div class="flex flex-wrap gap-3">
            ${unassignedFlights.map(u => `<div class="bg-obsidian px-4 py-2 rounded-xl border border-amberSS/40 text-xs"><strong class="text-cream">${u.name} (${u.pax} Pax)</strong> • ${u.travel?.fromCity || 'Origin TBD'} → ${u.travel?.toCity || 'Udaipur'}</div>`).join('')}
          </div>
        `}
      </div>

      <div class="bento-card p-6 space-y-4">
        <h4 class="font-serif text-2xl font-bold text-cream">4. Guest Flight Manifest (Edit From, To, Flight No., Date &amp; PNR)</h4>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>Guest Family</th>
                <th>Pax</th>
                <th>From City</th>
                <th>To City</th>
                <th>Flight No. &amp; Airline</th>
                <th>Date</th>
                <th>Landing Time</th>
                <th>PNR</th>
              </tr>
            </thead>
            <tbody>
              ${flightGuests.map(g => {
                const tr = g.travel || { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: 'UDR Airport T1', arrivalTime: '' };
                return `
                  <tr>
                    <td class="font-bold text-cream">${g.name}</td>
                    <td class="font-mono text-skySS">${g.pax}</td>
                    <td><input type="text" value="${tr.fromCity || ''}" onchange="updateTravelFieldInline('${g.id}', 'fromCity', this.value, 'Flight')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.toCity || 'Udaipur (UDR)'}" onchange="updateTravelFieldInline('${g.id}', 'toCity', this.value, 'Flight')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.number || ''}" onchange="updateTravelFieldInline('${g.id}', 'number', this.value, 'Flight')" class="ss-input text-xs font-bold text-skySS" /></td>
                    <td><input type="text" value="${tr.date || '12 Dec 2026'}" onchange="updateTravelFieldInline('${g.id}', 'date', this.value, 'Flight')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.arrivalTime || ''}" onchange="updateTravelFieldInline('${g.id}', 'arrivalTime', this.value, 'Flight')" class="ss-input text-xs text-emeraldSS font-bold" /></td>
                    <td><input type="text" value="${tr.pnr || ''}" onchange="updateTravelFieldInline('${g.id}', 'pnr', this.value, 'Flight')" class="ss-input text-xs font-mono text-gold" /></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (moduleId === 'trains') {
    const trainGuests = guests.filter(g => g.status !== 'Declined' && g.travel && g.travel.mode === 'Train');
    const routeGroups = {};
    const trainNoGroups = {};
    const dateGroups = {};

    trainGuests.forEach(g => {
      const tr = g.travel || {};
      const routeKey = `${tr.fromCity || 'Origin TBD'} → ${tr.toCity || 'Udaipur City (UDZ)'}`;
      const numKey = tr.number || 'Train Pending';
      const dtKey = `${tr.date || '12 Dec 2026'} (${tr.arrivalTime || 'Time TBD'})`;

      if (!routeGroups[routeKey]) routeGroups[routeKey] = [];
      routeGroups[routeKey].push(g);
      if (!trainNoGroups[numKey]) trainNoGroups[numKey] = [];
      trainNoGroups[numKey].push(g);
      if (!dateGroups[dtKey]) dateGroups[dtKey] = [];
      dateGroups[dtKey].push(g);
    });

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-gold font-bold">1. Route-Wise (From → To)</span>
          ${Object.entries(routeGroups).map(([route, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-cream block">🚆 ${route}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-gold/20 text-gold text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-emeraldSS font-bold">2. Train-Wise Grouping</span>
          ${Object.entries(trainNoGroups).map(([tnum, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-gold block">🛤️ ${tnum}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-emeraldSS/20 text-emeraldSS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-skySS font-bold">3. Date &amp; Platform Time Wise</span>
          ${Object.entries(dateGroups).map(([dt, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-skySS block">📅 ${dt}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-skySS/20 text-skySS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bento-card p-6 space-y-4">
        <h4 class="font-serif text-2xl font-bold text-cream">4. Guest Train Manifest (Edit From, To, Train No., Date &amp; PNR)</h4>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>Guest Family</th>
                <th>Pax</th>
                <th>From Station</th>
                <th>To Station</th>
                <th>Train No. &amp; Name</th>
                <th>Date</th>
                <th>Arrival Time</th>
                <th>IRCTC PNR</th>
              </tr>
            </thead>
            <tbody>
              ${trainGuests.map(g => {
                const tr = g.travel || { mode: 'Train', fromCity: 'Delhi', toCity: 'Udaipur', number: '', pnr: '', date: '12 Dec 2026', arrivalTime: '' };
                return `
                  <tr>
                    <td class="font-bold text-cream">${g.name}</td>
                    <td class="font-mono text-gold">${g.pax}</td>
                    <td><input type="text" value="${tr.fromCity || ''}" onchange="updateTravelFieldInline('${g.id}', 'fromCity', this.value, 'Train')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.toCity || 'Udaipur City (UDZ)'}" onchange="updateTravelFieldInline('${g.id}', 'toCity', this.value, 'Train')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.number || ''}" onchange="updateTravelFieldInline('${g.id}', 'number', this.value, 'Train')" class="ss-input text-xs font-bold text-gold" /></td>
                    <td><input type="text" value="${tr.date || '12 Dec 2026'}" onchange="updateTravelFieldInline('${g.id}', 'date', this.value, 'Train')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.arrivalTime || ''}" onchange="updateTravelFieldInline('${g.id}', 'arrivalTime', this.value, 'Train')" class="ss-input text-xs text-emeraldSS font-bold" /></td>
                    <td><input type="text" value="${tr.pnr || ''}" onchange="updateTravelFieldInline('${g.id}', 'pnr', this.value, 'Train')" class="ss-input text-xs font-mono text-gold" /></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (moduleId === 'whatsapp') {
    const sentCount = guests.filter(g => g.waInviteSent).length;
    const readCount = guests.filter(g => g.waStatus && g.waStatus.includes('Read')).length;
    const pendingWaCount = guests.filter(g => !g.waInviteSent).length;

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div class="bento-card p-4"><span class="text-xs text-muted block">Total Credits Used</span><strong class="text-2xl text-gold">1,160</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">Credits Remaining</span><strong class="text-2xl text-emeraldSS">${messageCreditsRemaining.toLocaleString()}</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">Invites Dispatched</span><strong class="text-2xl text-cream">${sentCount} / ${guests.length}</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">Read by Guests (✓✓)</span><strong class="text-2xl text-waGreen">${readCount} Families</strong></div>
        <div class="bento-card p-4"><span class="text-xs text-muted block">Pending Dispatch</span><strong class="text-2xl text-amberSS">${pendingWaCount} Family</strong></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="bento-card p-6 space-y-3">
          <span class="px-3 py-1 rounded-lg text-xs font-bold bg-waGreen/20 text-waGreen">Official Verified Sender</span>
          <h4 class="font-serif text-2xl font-bold text-cream">+91 98290-SHAADI ✓</h4>
          <p class="text-sm text-muted">Dispatches event-filtered invitations, RSVP reminders, and room keys. Extra messages @ ₹1/message.</p>
          <button onclick="useMessageCredits(${guests.length}, 'Dispatched WhatsApp Invites to All Guests')" class="btn-gold w-full py-3 rounded-xl text-xs font-bold">🚀 Blast Invites to All (${guests.length} Credits)</button>
        </div>
        <div class="lg:col-span-2 bento-card p-6 space-y-3 border-gold/40">
          <div class="flex justify-between items-center">
            <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-gold/20 text-gold">Active Meta-Approved Template Preview</span>
            <span class="text-xs font-mono text-muted">Variables: {{Guest}}, {{Host}}, {{TierEvents}}</span>
          </div>
          <p class="text-sm text-cream bg-obsidian p-4 rounded-xl border border-borderWarm">
            “॥ श्री गणेशाय नमः ॥ Pranam <strong>{{1}} Ji</strong> 🙏 With warm regards from <strong>{{2}}</strong>, you are cordially invited to Aarav &amp; Ananya's wedding celebrations ({{3}}). Tap below to open your 3D Wax-Seal Pass &amp; confirm RSVP.”
          </p>
        </div>
      </div>

      <div class="bento-card p-6 space-y-4">
        <h4 class="font-serif text-2xl font-bold text-cream">WhatsApp Invites Sent &amp; Delivery Log</h4>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>Guest Family</th>
                <th>Side &amp; Pax</th>
                <th>Assigned Template Variant</th>
                <th>Invite Sent?</th>
                <th>Delivery / Read Status</th>
                <th>Last Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${guests.map(g => `
                <tr>
                  <td class="font-bold text-cream">${g.name}</td>
                  <td class="text-xs text-muted">${g.side} • ${g.pax} Pax</td>
                  <td><span class="px-2.5 py-1 rounded text-xs bg-obsidian border border-borderWarm text-gold">${g.waTemplate || getTierLabel(g.inviteTier)}</span></td>
                  <td>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${g.waInviteSent ? 'bg-emeraldSS/15 text-emeraldSS' : 'bg-amberSS/15 text-amberSS'}">
                      ${g.waInviteSent ? '✓ Sent' : '⏳ Not Sent'}
                    </span>
                  </td>
                  <td class="font-bold text-xs ${g.waStatus?.includes('Read') ? 'text-waGreen' : 'text-gold'}">${g.waStatus || 'Queued'}</td>
                  <td class="font-mono text-xs text-muted">${g.waSentAt || '—'}</td>
                  <td>
                    <button onclick="sendSingleWhatsAppInvite('${g.id}')" class="px-3.5 py-1.5 rounded-xl bg-waGreen/20 border border-waGreen/40 text-waGreen text-xs font-bold hover:bg-waGreen/30">
                      ${g.waInviteSent ? '↻ Resend (1 Cr)' : '💬 Send Now (1 Cr)'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (moduleId === 'webinvites') {
    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-8 text-center max-w-3xl mx-auto space-y-5">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">Included in ₹14,999 &amp; ₹19,999 Plans (Available as ₹3,999 Add-On for ₹9,999)</span>
        <h3 class="font-serif text-4xl font-bold text-cream">Interactive 3D Wax-Seal Web Invitation</h3>
        <p class="text-base text-muted">Features animated golden monogram wax seal, falling rose petals, background Shehnai audio, Google Maps venue routing, and automatic event-tier filtering per guest.</p>
        <div onclick="showToast('✨ Royal Wax Seal Opened! Playing Shehnai Chime...')" class="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-gold to-amber-800 border-4 border-cream/40 flex flex-col items-center justify-center cursor-pointer shadow-2xl hover:scale-105 transition">
          <span class="font-serif font-extrabold text-3xl text-obsidian">A&amp;A</span>
          <span class="text-xs font-bold text-obsidian uppercase">Tap Seal</span>
        </div>
      </div>
    `;
  } else if (moduleId === 'budget') {
    const categories = [...new Set(vendors.map(v => v.category))];

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bento-card p-5"><span class="text-xs text-muted block">Total Planned Budget</span><strong class="text-2xl text-cream">${formatINR(t.budgetTotal)}</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">Total Advance Paid</span><strong class="text-2xl text-emeraldSS">${formatINR(t.budgetPaid)}</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">Remaining Balance Due</span><strong class="text-2xl text-amberSS">${formatINR(t.budgetTotal - t.budgetPaid)}</strong></div>
      </div>

      <div class="space-y-6">
        ${categories.map(cat => {
          const catVendors = vendors.filter(v => v.category === cat);
          const catTotal = catVendors.reduce((s, v) => s + v.total, 0);
          const catPaid = catVendors.reduce((s, v) => s + v.paid, 0);

          return `
            <div class="bento-card p-6 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderWarm pb-3">
                <div>
                  <span class="text-xs font-mono uppercase text-gold">Budget Category Group</span>
                  <h4 class="font-serif text-2xl font-bold text-cream">${cat} (${catVendors.length})</h4>
                </div>
                <div class="text-right text-xs">
                  <span class="text-muted block">Category Total: <strong class="text-cream">${formatINR(catTotal)}</strong></span>
                  <span class="text-emeraldSS font-bold">Paid: ${formatINR(catPaid)} • Due: ${formatINR(catTotal - catPaid)}</span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                ${catVendors.map(v => {
                  const due = Math.max(0, v.total - v.paid);
                  const pct = Math.round((v.paid / v.total) * 100);
                  return `
                    <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-4">
                      <div class="flex justify-between items-start gap-2">
                        <div>
                          <h5 class="font-serif text-2xl font-bold text-cream">${v.vendor}</h5>
                          <p class="text-xs text-muted mt-0.5">👤 Contact: <strong class="text-cream">${v.contactPerson}</strong> • 📞 <span class="font-mono text-gold">${v.phone}</span></p>
                          <p class="text-xs text-muted">✉️ ${v.email}</p>
                        </div>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS shrink-0">${pct}% Paid</span>
                      </div>

                      <div class="space-y-1.5">
                        <span class="text-[11px] font-bold uppercase text-gold block">Assigned Dates (Click to toggle multiple dates):</span>
                        <div class="flex flex-wrap gap-1.5">
                          ${AVAILABLE_WEDDING_DATES.map(dt => {
                            const isAssigned = (v.assignedDates || []).includes(dt);
                            return `
                              <button onclick="toggleVendorDate('${v.id}', '${dt}')" class="px-2.5 py-1 rounded-lg text-xs font-bold border transition ${
                                isAssigned ? 'bg-gold text-obsidian border-gold' : 'bg-card border-borderWarm text-muted hover:text-cream'
                              }">
                                ${isAssigned ? '✓ ' : ''}${dt.replace(' 2026', '')}
                              </button>
                            `;
                          }).join('')}
                        </div>
                      </div>

                      <div class="grid grid-cols-3 gap-2 pt-3 border-t border-borderWarm text-xs">
                        <div>
                          <span class="text-muted block mb-1">Total Contract (₹)</span>
                          <input type="number" step="10000" value="${v.total}" onchange="updateVendorBudget('${v.id}', 'total', this.value)" class="ss-input font-mono text-xs" />
                        </div>
                        <div>
                          <span class="text-muted block mb-1">Advance Paid (₹)</span>
                          <input type="number" step="10000" value="${v.paid}" onchange="updateVendorBudget('${v.id}', 'paid', this.value)" class="ss-input font-mono text-xs text-emeraldSS font-bold" />
                        </div>
                        <div>
                          <span class="text-muted block mb-1">Balance Due</span>
                          <div class="ss-input font-mono text-xs text-amberSS font-bold bg-card/50">${formatINR(due)}</div>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (moduleId === 'vendors') {
    const categories = [...new Set(vendors.map(v => v.category))];

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${categories.map(cat => {
          const catVendors = vendors.filter(v => v.category === cat);
          return `
            <div class="bento-card p-6 space-y-4">
              <div class="flex items-center justify-between border-b border-borderWarm pb-3">
                <div>
                  <span class="text-xs font-mono uppercase text-gold">Vendor Category</span>
                  <h4 class="font-serif text-2xl font-bold text-cream">${cat}</h4>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold">${catVendors.length} ${catVendors.length > 1 ? 'Vendors' : 'Vendor'}</span>
              </div>

              <div class="space-y-3">
                ${catVendors.map(v => `
                  <div class="bg-obsidian border border-borderWarm rounded-2xl p-4 space-y-2.5">
                    <div class="flex justify-between items-start">
                      <div>
                        <h5 class="font-serif text-xl font-bold text-cream">${v.vendor}</h5>
                        <span class="text-xs text-muted block">Lead: <strong class="text-cream">${v.contactPerson}</strong> • 📞 <span class="font-mono text-gold">${v.phone}</span></span>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-1.5 pt-1">
                      <span class="text-[11px] text-muted mr-1">📅 Assigned Dates:</span>
                      ${(v.assignedDates || []).map(d => `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS border border-emeraldSS/30">${d}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (moduleId === 'tasks') {
    const doneCount = familyTasks.filter(tk => tk.done).length;
    const pct = familyTasks.length ? Math.round((doneCount / familyTasks.length) * 100) : 0;

    viewport.innerHTML = headerBanner + `
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
          <button onclick="addNewChecklistTask()" class="sm:col-span-1 btn-gold rounded-xl py-2 font-bold text-xs">+ Add</button>
        </div>

        <div class="space-y-3">
          ${familyTasks.map(tk => `
            <label class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-4 rounded-2xl border transition cursor-pointer ${tk.done ? 'bg-emeraldSS/10 border-emeraldSS/40' : 'bg-obsidian/90 border-borderWarm hover:border-gold/50'}">
              <div class="flex items-center gap-4 flex-1">
                <input type="checkbox" ${tk.done ? 'checked' : ''} onchange="toggleTaskChecklist('${tk.id}', this.checked)" class="w-6 h-6 accent-gold rounded cursor-pointer shrink-0" />
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
  } else if (moduleId === 'users') {
    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${workspaceUsers.map(u => `
          <div class="bento-card p-6 flex items-center justify-between gap-4">
            <div>
              <h4 class="font-serif text-2xl font-bold text-cream">${u.name}</h4>
              <p class="text-sm text-muted mt-1">${u.access}</p>
            </div>
            <span class="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-gold/20 text-gold shrink-0">${u.role}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (moduleId === 'sangeet') {
    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-6 space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 class="font-serif text-2xl font-bold text-cream">Sangeeth DJ &amp; Stage Performance Lineup Table</h4>
            <p class="text-sm text-muted">Edit cue sequences, performing family groups, audio track names, durations, and stage props directly in the table.</p>
          </div>
          <button onclick="addNewSangeetRow()" class="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold">+ Add Performance Cue Row</button>
        </div>

        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th style="width:90px">Cue #</th>
                <th>Performing Family Group / Dancers</th>
                <th>Audio Track / Mashup Name</th>
                <th style="width:130px">Duration</th>
                <th>Stage Props &amp; SFX</th>
                <th>Coordinator</th>
              </tr>
            </thead>
            <tbody>
              ${sangeetLineup.map((s, idx) => `
                <tr>
                  <td><input type="text" value="${s.seq}" onchange="updateSangeetField(${idx}, 'seq', this.value)" class="ss-input font-mono font-bold text-gold text-center" /></td>
                  <td><input type="text" value="${s.group}" onchange="updateSangeetField(${idx}, 'group', this.value)" class="ss-input font-bold text-cream" /></td>
                  <td><input type="text" value="${s.song}" onchange="updateSangeetField(${idx}, 'song', this.value)" class="ss-input text-gold" /></td>
                  <td><input type="text" value="${s.duration}" onchange="updateSangeetField(${idx}, 'duration', this.value)" class="ss-input font-mono text-xs" /></td>
                  <td><input type="text" value="${s.props}" onchange="updateSangeetField(${idx}, 'props', this.value)" class="ss-input text-xs" /></td>
                  <td><input type="text" value="${s.coordinator || 'Family'}" onchange="updateSangeetField(${idx}, 'coordinator', this.value)" class="ss-input text-xs text-emeraldSS font-bold" /></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (moduleId === 'shagun') {
    const totShagun = guests.reduce((s, g) => s + Number(g.shagun || 0), 0);
    const brideSideShagun = guests.filter(g => g.side === 'Bride').reduce((s, g) => s + Number(g.shagun || 0), 0);
    const groomSideShagun = guests.filter(g => g.side === 'Groom').reduce((s, g) => s + Number(g.shagun || 0), 0);

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bento-card p-5"><span class="text-xs text-muted block">Total Shagun Linked to Guests</span><strong class="text-3xl font-extrabold text-gold">${formatINR(totShagun)}</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">👰 Bride Side Guests Shagun</span><strong class="text-2xl font-bold text-cream">${formatINR(brideSideShagun)}</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">🤵 Groom Side Guests Shagun</span><strong class="text-2xl font-bold text-emeraldSS">${formatINR(groomSideShagun)}</strong></div>
      </div>

      <div class="bento-card p-5 space-y-3 border-gold/40">
        <span class="text-xs font-mono uppercase text-gold font-bold">Quick Link Shagun to Guest</span>
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <select id="quickShagunGuestSelect" class="sm:col-span-4 ss-input font-bold text-cream">
            ${guests.map(g => `<option value="${g.id}">${g.name} (${g.side} • ${g.group})</option>`).join('')}
          </select>
          <input id="quickShagunAmount" type="number" step="500" placeholder="Shagun Amount (₹)" class="sm:col-span-3 ss-input font-mono text-gold" />
          <input id="quickShagunGiftNote" type="text" placeholder="Gift Description (e.g., Silver Coin, Envelope)" class="sm:col-span-3 ss-input" />
          <button onclick="saveQuickLinkedShagun()" class="sm:col-span-2 btn-gold py-2.5 rounded-xl text-xs font-bold">Link to Guest</button>
        </div>
      </div>

      <div class="bento-card p-6 space-y-4">
        <h4 class="font-serif text-2xl font-bold text-cream">Guest-Linked Shagun &amp; Gifts Ledger</h4>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>Linked Guest Family</th>
                <th>Side &amp; Relationship Group</th>
                <th>Guest RSVP Status</th>
                <th>Gift / Envelope Description</th>
                <th>Return Favor / Invite Status</th>
                <th>Shagun Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              ${guests.map(g => `
                <tr>
                  <td class="font-bold text-cream">${g.name}</td>
                  <td><span class="px-2.5 py-1 rounded text-xs bg-obsidian border border-borderWarm text-gold">${g.side} • ${g.group}</span></td>
                  <td><span class="text-xs font-bold ${g.status === 'Attending' ? 'text-emeraldSS' : 'text-muted'}">${g.status} (${g.pax} Pax)</span></td>
                  <td><input type="text" value="${g.giftNote || ''}" placeholder="Envelope / Gift Item" onchange="updateGuestField('${g.id}', 'giftNote', this.value)" class="ss-input text-xs" /></td>
                  <td><input type="text" value="${g.courierStatus}" onchange="updateGuestField('${g.id}', 'courierStatus', this.value)" class="ss-input text-xs" /></td>
                  <td style="width:170px"><input type="number" step="500" value="${g.shagun}" onchange="updateGuestField('${g.id}', 'shagun', this.value)" class="ss-input font-mono font-bold text-gold" /></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (moduleId === 'guestbook') {
    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-6 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h4 class="font-serif text-2xl font-bold text-cream">Family Blessings &amp; Wishes Wall</h4>
          <button onclick="addSampleBlessing()" class="btn-gold px-4 py-2 rounded-xl text-xs font-bold">+ Post Blessing</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${guestbookEntries.map(e => `
            <div class="bg-obsidian border border-borderWarm rounded-2xl p-5 space-y-2">
              <p class="font-serif italic text-xl text-cream">"${e.text}"</p>
              <div class="pt-2 border-t border-borderWarm flex justify-between text-xs">
                <strong class="text-gold">${e.author}</strong>
                <span class="text-muted">${e.time}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (moduleId === 'gallery') {
    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        ${galleryPhotos.map(p => `
          <div class="relative h-64 rounded-2xl overflow-hidden border border-borderWarm">
            <img src="${p.img}" class="w-full h-full object-cover" alt="${p.title}" />
            <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent flex flex-col justify-end p-5">
              <span class="text-xs font-bold text-gold uppercase">${p.event}</span>
              <h4 class="font-serif text-2xl font-bold text-cream">${p.title}</h4>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

export function selectCalendarDate(dt) {
  selectedCalendarDate = dt;
  openSubPage('calendar');
}

export function cycleGuestRsvpStatus(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  const order = ['Attending', 'N/A', 'Declined'];
  const next = order[(order.indexOf(g.status) + 1) % order.length];
  g.status = next;
  if (next === 'Declined') g.pax = 0;
  else if (g.pax === 0) g.pax = Math.max(1, (g.members || []).length);
  openSubPage('rsvp');
  showToast(`${g.name} RSVP changed to ${next}`);
}

export function toggleGuestNeedsRoom(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  g.needsRoom = !g.needsRoom;
  openSubPage('rsvp');
  showToast(`${g.name}: ${g.needsRoom ? 'Marked Needs Room' : 'Marked Local (No Room Needed)'}`);
}

export function updateMemberStayLocation(guestId, memberIdx, newLocation) {
  const g = guests.find(x => x.id === guestId);
  if (!g || !g.members[memberIdx]) return;
  g.members[memberIdx].stayLocation = newLocation;
  const currentRm = roomInventory.find(r => r.id === g.members[memberIdx].roomId);
  if (currentRm && currentRm.location !== newLocation) {
    g.members[memberIdx].roomId = '';
  }
  openSubPage('rooms');
  showToast(`Selected ${newLocation} — now choose room number`);
}

export function updateHostField(hostId, field, val) {
  const h = familyHosts.find(x => x.id === hostId);
  if (!h) return;
  h[field] = val;
  openSubPage('hosts');
  showToast(`Updated host profile: ${h.name}`);
}

export function addNewHostProfile() {
  familyHosts.push({
    id: 'h-' + Date.now(),
    name: 'Shri Sudarshan Vinaykiya',
    side: 'Bride Side',
    relation: 'Family Host',
    phone: '+91 98400 55112',
    eventsHosted: 'All Ceremonies',
    salutation: 'With warm compliments from Shri Sudarshan Vinaykiya'
  });
  openSubPage('hosts');
  showToast('Added individual host profile (hosts all ceremonies)');
}

export function sendSingleWhatsAppInvite(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  g.waInviteSent = true;
  g.waStatus = 'Delivered ✓✓';
  g.waSentAt = 'Just now';
  messageCreditsRemaining = Math.max(0, messageCreditsRemaining - 1);
  renderWorkspaceAppLauncher();
  openSubPage('whatsapp');
  showToast(`Sent WhatsApp invite to ${g.name} (-1 credit)`);
}

export function toggleVendorDate(vendorId, dt) {
  const v = vendors.find(x => x.id === vendorId);
  if (!v) return;
  if (!v.assignedDates) v.assignedDates = [];
  if (v.assignedDates.includes(dt)) {
    v.assignedDates = v.assignedDates.filter(d => d !== dt);
  } else {
    v.assignedDates.push(dt);
  }
  openSubPage('budget');
  showToast(`Updated assigned dates for ${v.vendor}`);
}

export function updateVendorBudget(vendorId, field, val) {
  const v = vendors.find(x => x.id === vendorId);
  if (!v) return;
  v[field] = Math.max(0, parseInt(val, 10) || 0);
  openSubPage('budget');
  showToast(`Updated ${v.vendor} budget`);
}

export function updateSangeetField(idx, field, val) {
  if (!sangeetLineup[idx]) return;
  sangeetLineup[idx][field] = val;
  openSubPage('sangeet');
  showToast('Updated Sangeeth lineup cue');
}

export function addNewSangeetRow() {
  const nextSeq = String(sangeetLineup.length + 1).padStart(2, '0');
  sangeetLineup.push({
    id: 'sg-' + Date.now(),
    seq: nextSeq,
    group: 'Cousins Squad Performance',
    song: 'Desi Girl + Nachde Ne Saare',
    duration: '3:45 mins',
    props: 'Sparklers & Props',
    coordinator: 'Lachi'
  });
  openSubPage('sangeet');
  showToast('Added new cue row to Sangeeth table');
}

export function saveQuickLinkedShagun() {
  const gId = document.getElementById('quickShagunGuestSelect')?.value;
  const amt = parseInt(document.getElementById('quickShagunAmount')?.value, 10) || 0;
  const note = document.getElementById('quickShagunGiftNote')?.value.trim();
  const g = guests.find(x => x.id === gId);
  if (!g) return;
  g.shagun = amt;
  if (note) g.giftNote = note;
  openSubPage('shagun');
  showToast(`Linked ${formatINR(amt)} Shagun to ${g.name}`);
}

export function addNewEventInline() {
  weddingEvents.push({
    id: 'ev-' + Date.now(),
    code: 'Afterparty',
    name: 'Poolside Sundowner & Afterparty',
    date: '15 Dec 2026',
    time: '01:00 PM',
    venue: 'Lakeview Infinity Pool',
    dress: 'Resort Chic',
    expectedPax: 150
  });
  openSubPage('events');
  showToast('Added new event (Unlimited Events supported)');
}

export function addSampleBlessing() {
  guestbookEntries.unshift({
    author: 'Suresh Patel',
    relation: 'Groom Side Family',
    time: 'Just now',
    text: 'May Lord Ganesha bless Aarav & Ananya with eternal happiness!'
  });
  openSubPage('guestbook');
  showToast('Added family blessing to Guestbook');
}

export function updateGuestField(id, field, val) {
  const g = guests.find(x => x.id === id);
  if (!g) return;
  if (field === 'pax' || field === 'shagun') {
    g[field] = Math.max(0, parseInt(val, 10) || 0);
  } else if (field === 'inviteTier') {
    g.inviteTier = val;
    g.invitedEvents = val === '1-event' ? ['Shaadi'] : (val === '2-events' ? ['Sangeet', 'Shaadi'] : ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi']);
  } else {
    g[field] = val;
  }
  openSubPage(currentModuleId);
  showToast(`Updated ${g.name}`);
}

export function addNewGuestRowInline() {
  const newG = {
    id: 'g-' + Date.now(),
    name: 'New Guest Family',
    side: 'Bride',
    group: 'Family',
    status: 'Attending',
    pax: 2,
    needsRoom: true,
    inviteTier: 'all-events',
    invitedEvents: ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi'],
    shagun: 0,
    giftNote: '',
    courierStatus: 'Pending Dispatch',
    waInviteSent: false,
    waStatus: 'Queued',
    waSentAt: '—',
    waTemplate: 'Royal All-Events Pass',
    members: [{ name: 'Member 1', stayLocation: 'Taj Lake Palace', roomId: '' }, { name: 'Member 2', stayLocation: 'Taj Lake Palace', roomId: '' }],
    travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: 'UDR Airport T1', arrivalTime: '' }
  };
  guests.unshift(newG);
  openSubPage('rsvp');
  showToast('Added new row to Guest Table');
}

export function updateMemberNameInline(guestId, memberIdx, newName) {
  const g = guests.find(x => x.id === guestId);
  if (g && g.members[memberIdx]) {
    g.members[memberIdx].name = newName.trim();
    openSubPage('rooms');
    showToast('Updated family member name');
  }
}

export function updateMemberRoomInline(guestId, memberIdx, newRoomId) {
  const g = guests.find(x => x.id === guestId);
  if (g && g.members[memberIdx]) {
    g.members[memberIdx].roomId = newRoomId;
    const rm = roomInventory.find(r => r.id === newRoomId);
    if (rm) g.members[memberIdx].stayLocation = rm.location;
    openSubPage('rooms');
    showToast(`Allotted ${g.members[memberIdx].name} to ${rm ? 'Room ' + rm.roomNumber + ' (' + rm.location + ')' : 'Unassigned'}`);
  }
}

export function addMemberToFamilyInline(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  g.members.push({ name: `${g.name.split(' ')[0]} Member ${g.members.length + 1}`, stayLocation: 'Taj Lake Palace', roomId: '' });
  g.pax = g.members.length;
  openSubPage('rooms');
  showToast(`Added member under ${g.name}`);
}

export function addRoomBlockQuick() {
  const nextNum = 400 + roomInventory.length + 1;
  roomInventory.push({ id: 'R-' + nextNum, location: 'Taj Lake Palace', roomNumber: String(nextNum), type: 'Deluxe Room', maxPax: 2 });
  openSubPage('rooms');
  showToast(`Added Room ${nextNum} card to Taj Lake Palace`);
}

export function updateTravelFieldInline(guestId, field, val, forcedMode) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  if (!g.travel) g.travel = { mode: forcedMode || 'Flight', fromCity: '', toCity: 'Udaipur', number: '', pnr: '', date: '12 Dec 2026', station: '', arrivalTime: '' };
  if (forcedMode) g.travel.mode = forcedMode;
  g.travel[field] = val;
  openSubPage(currentModuleId);
  showToast(`Updated ${g.name} travel (${field})`);
}

export function toggleTaskChecklist(taskId, isChecked) {
  const tk = familyTasks.find(x => x.id === taskId);
  if (!tk) return;
  tk.done = isChecked;
  tk.status = isChecked ? 'Completed' : 'In Progress';
  openSubPage('tasks');
  showToast(isChecked ? `✓ Completed: ${tk.title}` : `Reopened: ${tk.title}`);
}

export function addNewChecklistTask() {
  const title = document.getElementById('newCheckTaskTitle')?.value.trim();
  if (!title) return;
  const owner = document.getElementById('newCheckTaskOwner')?.value.trim() || 'Family';
  const due = document.getElementById('newCheckTaskDue')?.value.trim() || '13 Dec';
  familyTasks.unshift({ id: 't-' + Date.now(), title, owner, due, status: 'Pending', done: false });
  openSubPage('tasks');
  showToast('Added task to family checklist');
}

export function useMessageCredits(cost, msg) {
  guests.forEach(g => {
    g.waInviteSent = true;
    if (!g.waStatus || g.waStatus === 'Queued') g.waStatus = 'Delivered ✓✓';
    g.waSentAt = 'Just now';
  });
  messageCreditsRemaining = Math.max(0, messageCreditsRemaining - cost);
  renderWorkspaceAppLauncher();
  openSubPage('whatsapp');
  showToast(`${msg} (-${cost} credits)`);
}

export function getSampleCSVContent() {
  return 'Primary_Guest,Side,Group,Status,Pax,Members,Invite_Variant_Tier\n"Anita Sharma",Bride,Family,Attending,3,"Anita|Rajesh|Rohan",all-events\n"Rohit Mehra",Groom,Friends,Attending,2,"Rohit|Karan",2-events';
}

export function openSampleExportPreviewModal() {
  const pre = document.getElementById('sampleExportPre');
  if (pre) pre.textContent = getSampleCSVContent();
  const m = document.getElementById('sampleExportModal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

export function closeSampleExportPreviewModal() {
  const m = document.getElementById('sampleExportModal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

export function downloadSampleGuestCSV() {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([getSampleCSVContent()], { type: 'text/csv' }));
  a.download = 'Shaadi-Saathi-Sample.csv';
  a.click();
}

export function exportCurrentGuestsCSV() {
  downloadSampleGuestCSV();
  showToast('Exported Live CSV');
}

export function openImportGuestsModal() {
  const m = document.getElementById('importGuestsModal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

export function closeImportGuestsModal() {
  const m = document.getElementById('importGuestsModal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

export function processGuestImport() {
  const raw = document.getElementById('csvPasteArea')?.value.trim() || '';
  const lines = raw.split(/\r?\n/).filter(Boolean);
  lines.forEach((l, i) => {
    const p = l.split(',');
    const tier = p[6]?.trim() || 'all-events';
    const members = (p[5] || p[0]).split('|').map(n => ({ name: n.trim(), stayLocation: 'Taj Lake Palace', roomId: '' }));
    guests.unshift({
      id: 'g-imp-' + Date.now() + i,
      name: p[0].trim(),
      side: p[1] || 'Bride',
      group: 'Family',
      status: 'Attending',
      pax: members.length,
      needsRoom: true,
      inviteTier: tier,
      invitedEvents: tier === '1-event' ? ['Shaadi'] : (tier === '2-events' ? ['Sangeet', 'Shaadi'] : ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi']),
      shagun: 0,
      giftNote: '',
      courierStatus: 'Pending',
      waInviteSent: false,
      waStatus: 'Queued',
      waSentAt: '—',
      members,
      travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: '', arrivalTime: '' }
    });
  });
  closeImportGuestsModal();
  openSubPage('rsvp');
  showToast('Imported guests into table');
}

export function openCreateWeddingModal() {
  const m = document.getElementById('createWeddingModal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

export function closeCreateWeddingModal() {
  const m = document.getElementById('createWeddingModal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

export function saveNewWedding() {
  const coupleInput = document.getElementById('cwCoupleInput');
  const cityInput = document.getElementById('cwCityInput');
  const couple = coupleInput?.value.trim();
  if (!couple) return;
  weddingsPortfolio.unshift({
    id: 'w-' + Date.now(),
    couple,
    city: cityInput?.value.trim() || 'Jaipur',
    dates: '18–20 Nov 2026',
    userRole: 'CREATOR SUPER ADMIN',
    roleBadgeColor: 'bg-gold text-obsidian',
    rolePermissionsDesc: 'Full Creator & Planner OS Control',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    isLive: false,
    telemetry: computeLiveTelemetry()
  });
  if (coupleInput) coupleInput.value = '';
  if (cityInput) cityInput.value = '';
  closeCreateWeddingModal();
  renderCreatorWeddings();
}

export function initWeddingsView() {
  renderCreatorWeddings();
  renderWorkspaceAppLauncher();
}

Object.assign(window, {
  filterPortfolioByRole,
  renderCreatorWeddings,
  openWeddingWorkspace,
  backToAllWeddings,
  toggleAppGridLauncher,
  switchWorkspaceModule,
  openSubPage,
  selectCalendarDate,
  cycleGuestRsvpStatus,
  toggleGuestNeedsRoom,
  updateMemberStayLocation,
  updateHostField,
  addNewHostProfile,
  sendSingleWhatsAppInvite,
  toggleVendorDate,
  updateVendorBudget,
  updateSangeetField,
  addNewSangeetRow,
  saveQuickLinkedShagun,
  addNewEventInline,
  addSampleBlessing,
  updateGuestField,
  addNewGuestRowInline,
  updateMemberNameInline,
  updateMemberRoomInline,
  addMemberToFamilyInline,
  addRoomBlockQuick,
  updateTravelFieldInline,
  toggleTaskChecklist,
  addNewChecklistTask,
  useMessageCredits,
  openSampleExportPreviewModal,
  closeSampleExportPreviewModal,
  downloadSampleGuestCSV,
  exportCurrentGuestsCSV,
  openImportGuestsModal,
  closeImportGuestsModal,
  processGuestImport,
  openCreateWeddingModal,
  closeCreateWeddingModal,
  saveNewWedding
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWeddingsView);
} else {
  initWeddingsView();
}