// Shared wedding data + UI state. Arrays are mutated in place so every module sees updates.
export const AVAILABLE_WEDDING_DATES = ['11 Dec 2026', '12 Dec 2026', '13 Dec 2026', '14 Dec 2026', '15 Dec 2026'];

export const ss = {
  activeWeddingId: 'w1',
  currentModuleId: 'overview',
  selectedCalendarDate: '12 Dec 2026',
  activeRoleFilter: 'ALL',
  messageCreditsRemaining: 2840,
  messageCreditsTotal: 4000
};

export const weddingEvents = [
  { id: 'ev1', code: 'Haldi', name: 'Welcome Lunch & Haldi Carnival', date: '12 Dec 2026', time: '12:30 PM', venue: 'Courtyard Lawns, Taj', dress: 'Sunshine Yellow', expectedPax: 180 },
  { id: 'ev2', code: 'Mehendi', name: 'Rajwada Mehendi Soirée', date: '12 Dec 2026', time: '04:30 PM', venue: 'Royal Lawns, Udaipur', dress: 'Emerald & Mirrorwork', expectedPax: 220 },
  { id: 'ev3', code: 'Sangeet', name: 'Starlight Sangeet Gala', date: '13 Dec 2026', time: '08:00 PM', venue: 'Grand Crystal Ballroom', dress: 'Black Tie / Indo-Western', expectedPax: 310 },
  { id: 'ev4', code: 'Shaadi', name: 'Royal Wedding & Reception Gala', date: '14 Dec 2026', time: '06:45 PM', venue: 'Jagmandir Island Mandap', dress: 'Royal Bandhgala & Lehenga', expectedPax: 412 }
];

// INDIVIDUAL HOST PROFILES
export const familyHosts = [
  { id: 'h1', name: 'Shri Rajesh Sharma', side: 'Bride Side', relation: 'Bride Father', phone: '+91 98290 11001', eventsHosted: 'All Ceremonies', salutation: 'With warm regards from Shri Rajesh Sharma' },
  { id: 'h2', name: 'Smt. Sunita Sharma', side: 'Bride Side', relation: 'Bride Mother', phone: '+91 98290 11002', eventsHosted: 'All Ceremonies', salutation: 'With affectionate blessings of Smt. Sunita Sharma' },
  { id: 'h3', name: 'Shri Jawarilal Bafna', side: 'Groom Side', relation: 'Family Patriarch', phone: '+91 98400 33003', eventsHosted: 'All Ceremonies', salutation: 'Under the divine aashirwad of Shri Jawarilal Bafna' },
  { id: 'h4', name: 'Shri Paresh Bafna', side: 'Groom Side', relation: 'Groom Father', phone: '+91 98400 22002', eventsHosted: 'All Ceremonies', salutation: 'With best compliments from Shri Paresh Bafna' },
  { id: 'h5', name: 'Smt. Darshana K.', side: 'Groom Side', relation: 'Groom Mother', phone: '+91 98400 22005', eventsHosted: 'All Ceremonies', salutation: 'With warm hospitality from Smt. Darshana K.' }
];

export const workspaceUsers = [
  { name: 'Paresh Bafna', role: 'CREATOR SUPER ADMIN', access: 'All Services + Multi-Wedding Telemetry' },
  { name: 'Darshana K.', role: 'FAMILY HOST ADMIN', access: 'Guest, Stay Accomodation, Shagun & Gallery' },
  { name: 'Karanji', role: 'LOGISTICS LEAD', access: 'Flight Arrangements, Train Arrangements & Tasks' },
  { name: 'Sonal', role: 'EVENT COORDINATOR', access: 'Events, Sangeeth Lineup & Tasks Checklist' },
  { name: 'Lachi', role: 'HOSPITALITY DESK', access: 'Room Allotments & Arrival Manifest' }
];

export const roomInventory = [
  { id: 'R-101', location: 'Taj Lake Palace', roomNumber: '101', type: 'Luxury Lake View', maxPax: 2 },
  { id: 'R-102', location: 'Taj Lake Palace', roomNumber: '102', type: 'Luxury Lake View', maxPax: 2 },
  { id: 'R-103', location: 'Taj Lake Palace', roomNumber: '103', type: 'Royal Family Suite', maxPax: 4 },
  { id: 'R-201', location: 'Trident Udaipur', roomNumber: '201', type: 'Premier Garden', maxPax: 2 },
  { id: 'R-202', location: 'Trident Udaipur', roomNumber: '202', type: 'Premier Garden', maxPax: 2 },
  { id: 'R-301', location: 'Fateh Garh', roomNumber: '301', type: 'Heritage Suite', maxPax: 3 }
];

export const guests = [
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

export const vendors = [
  { id: 'v1', category: 'Decoration', vendor: 'Ferns & Petals Royal Mandap', contactPerson: 'Vikramaditya Rao', phone: '+91 98111 22334', email: 'royal@fnpweddings.in', assignedDates: ['12 Dec 2026', '13 Dec 2026', '14 Dec 2026'], total: 1650000, paid: 1000000 },
  { id: 'v2', category: 'Decoration', vendor: 'Udaipur Floral & Phoolon Ki Holi Artisans', contactPerson: 'Govind Mewari', phone: '+91 98111 99887', email: 'govind@mewarflorals.com', assignedDates: ['12 Dec 2026'], total: 350000, paid: 250000 },
  { id: 'v3', category: 'Catering', vendor: 'Foodlink Royal Banquet', contactPerson: 'Chef Sanjay Kapur', phone: '+91 98222 33445', email: 'banquets@foodlink.in', assignedDates: ['12 Dec 2026', '13 Dec 2026', '14 Dec 2026'], total: 1800000, paid: 1200000 },
  { id: 'v4', category: 'DJ & Sound', vendor: 'DJ Chetas & Line Array Pro', contactPerson: 'Rohan Malhotra', phone: '+91 98333 44556', email: 'bookings@djchetas.com', assignedDates: ['13 Dec 2026', '14 Dec 2026'], total: 450000, paid: 250000 },
  { id: 'v5', category: 'Anchoring', vendor: 'Anchor Gunjan Utreja', contactPerson: 'Neha Verma (Manager)', phone: '+91 98444 55667', email: 'gunjan@stagehosts.in', assignedDates: ['12 Dec 2026', '13 Dec 2026'], total: 250000, paid: 150000 },
  { id: 'v6', category: 'Photography', vendor: 'Clickbox Cinema & Candid', contactPerson: 'Karthik Srinivasan', phone: '+91 98555 66778', email: 'hello@clickbox.in', assignedDates: ['12 Dec 2026', '13 Dec 2026', '14 Dec 2026'], total: 500000, paid: 300000 }
];

export const familyTasks = [
  { id: 't1', title: 'Confirm 85 Bandhani Safas delivery at Taj lobby', owner: 'Karanji', due: '11 Dec', status: 'Completed', done: true },
  { id: 't2', title: 'Coordinate ceremonial thali setup for main stage', owner: 'Sonal', due: '12 Dec', status: 'In Progress', done: false },
  { id: 't3', title: 'Handover Sangeet family dance USB tracks to DJ console', owner: 'Lachi', due: '12 Dec', status: 'Pending', done: false },
  { id: 't4', title: 'Collect silver return coins from family jewellery shop', owner: 'Paresh', due: '10 Dec', status: 'Completed', done: true },
  { id: 't5', title: 'Place welcome hampers & itinerary cards in hotel rooms', owner: 'Darshana', due: '11 Dec', status: 'In Progress', done: false }
];

export const sangeetLineup = [
  { id: 'sg1', seq: '01', group: 'Bride Sisters (Sonal & Lachi)', song: 'Kesariya + Chaudhary Mashup', duration: '4:15 mins', props: 'LED Dandiya & Dupattas', coordinator: 'Sonal' },
  { id: 'sg2', seq: '02', group: 'Groom Friends (Rohit & Karan)', song: 'Kala Chashma + Gallan Goodiyaan', duration: '3:50 mins', props: 'Aviator Shades & Dhol', coordinator: 'Karanji' },
  { id: 'sg3', seq: '03', group: 'Parents Special (Sharma & Bafna Parivar)', song: 'Wah Wah Ramji', duration: '3:20 mins', props: 'Rose Petal Cannons', coordinator: 'Paresh' },
  { id: 'sg4', seq: '04', group: 'Couple Grand Finale (Aarav & Ananya)', song: 'Raatan Lambiyan + Tum Se Hi', duration: '4:45 mins', props: 'Cold Pyro & Low Fog', coordinator: 'Stage Manager' }
];

export const guestbookEntries = [
  { author: 'Anita Sharma', relation: 'Bride Side Family', time: '2h ago', text: 'Heartiest congratulations to Aarav and Ananya! Wishing you a lifetime of love and laughter.' },
  { author: 'Vikram Singh', relation: 'Groom Side Family', time: 'Yesterday', text: 'See you all at Taj Lake Palace! Super excited for the Sangeeth celebrations.' },
  { author: 'Shri Jawarilal Bafna', relation: 'Family Patriarch', time: '2 days ago', text: 'Infinite blessings and aashirwad to both families on this joyous union.' }
];

export const galleryPhotos = [
  { event: 'Mehendi', title: 'Royal Lawns Mehendi', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80' },
  { event: 'Sangeet', title: 'Starlight Sangeet Entry', img: 'https://images.unsplash.com/photo-1545232972-90456021c622?auto=format&fit=crop&w=800&q=80' },
  { event: 'Shaadi', title: 'Jagmandir Island Mandap', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' }
];

export const weddingsPortfolio = [
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
