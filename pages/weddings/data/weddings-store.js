export var activeRoleFilter = 'ALL';

export function setActiveRoleFilter(role) {
  activeRoleFilter = role;
}

export var activeWeddingId = 'wedding-1';
export var currentModuleId = 'overview';

export const AVAILABLE_WEDDING_DATES = [
  { id: 'wedding-1', couple: 'Aarav & Ananya', city: 'Udaipur', dateStr: '18–20 Nov 2026', role: 'CREATOR SUPER ADMIN' },
  { id: 'wedding-2', couple: 'Rohan & Priya', city: 'Jaipur', dateStr: '05–07 Dec 2026', role: 'BRIDE' },
  { id: 'wedding-3', couple: 'Kabir & Meera', city: 'Goa', dateStr: '15–17 Jan 2027', role: 'GROOM' }
];

export const weddingEvents = [
  { id: 'ev-1', code: 'EV-01', name: 'Ganesh Puja & Mandap Muhurat', date: '18 Nov 2026', time: '10:00 AM', venue: 'Main Lawns, Trident Udaipur', dress: 'Traditional Ethnic', expectedPax: 150 },
  { id: 'ev-2', code: 'EV-02', name: 'Mehndi & Sangeet Night', date: '18 Nov 2026', time: '05:00 PM', venue: 'Zenith Courtyard', dress: 'Indo-Western Glam', expectedPax: 300 },
  { id: 'ev-3', code: 'EV-03', name: 'Haldi & Floral Shower', date: '19 Nov 2026', time: '11:00 AM', venue: 'Poolside Deck', dress: 'Yellow & White Cotton', expectedPax: 200 },
  { id: 'ev-4', code: 'EV-04', name: 'Grand Wedding Ceremony', date: '20 Nov 2026', time: '04:00 PM', venue: 'Palace Mandap, Udaipur', dress: 'Royal Indian Wedding Attire', expectedPax: 350 }
];

export const guests = [
  { id: 'g-1', name: 'Gupta Family (Delhi)', side: 'Bride', status: 'Attending', pax: 4, needsRoom: true, inviteTier: 'all-events', travel: { mode: 'Flight', fromCity: 'Delhi (DEL)', toCity: 'Udaipur (UDR)', number: 'AI-482', pnr: 'PNR8921', date: '18 Nov 2026', arrivalTime: '09:30 AM' } },
  { id: 'g-2', name: 'Rathi Family (Jaipur)', side: 'Groom', status: 'Attending', pax: 3, needsRoom: true, inviteTier: '2-events', travel: { mode: 'Train', fromCity: 'Jaipur (JP)', toCity: 'Udaipur City (UDZ)', number: '12992 Intercity', pnr: 'IRCTC902', date: '18 Nov 2026', arrivalTime: '01:15 PM' } },
  { id: 'g-3', name: 'Mehra Family (Mumbai)', side: 'Bride', status: 'Attending', pax: 2, needsRoom: false, inviteTier: '1-event', travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: 'UK-961', pnr: 'PNR3341', date: '19 Nov 2026', arrivalTime: '11:00 AM' } },
  { id: 'g-4', name: 'Sharma Family (Bangalore)', side: 'Groom', status: 'Pending', pax: 5, needsRoom: true, inviteTier: 'all-events', travel: { mode: 'Flight', fromCity: 'Bangalore (BLR)', toCity: 'Udaipur (UDR)', number: '', pnr: 'Pending', date: '18 Nov 2026', arrivalTime: '' } }
];

export const roomInventory = [
  { id: 'rm-101', location: 'Trident Hotel Udaipur', roomNumber: '101', type: 'Deluxe Lake View', maxPax: 3 },
  { id: 'rm-102', location: 'Trident Hotel Udaipur', roomNumber: '102', type: 'Deluxe Lake View', maxPax: 3 },
  { id: 'rm-201', location: 'The Oberoi Udaivilas', roomNumber: '201', type: 'Luxury Suite', maxPax: 4 },
  { id: 'rm-202', location: 'The Oberoi Udaivilas', roomNumber: '202', type: 'Luxury Suite', maxPax: 4 }
];

export const vendors = [
  { id: 'v-1', name: 'Royal Caterers & Chefs', category: 'Catering', contact: 'Rajesh Sharma (+91 98211 44551)', cost: 1800000, paid: 1000000 },
  { id: 'v-2', name: 'The Floral Decor Co.', category: 'Decor', contact: 'Anita Mehta (+91 98112 33442)', cost: 1200000, paid: 600000 },
  { id: 'v-3', name: 'Clickbox Photography', category: 'Photography', contact: 'Siddharth (+91 99401 55667)', cost: 600000, paid: 300000 }
];

export const familyTasks = [
  { id: 't-1', task: 'Finalize wedding menu tasting with caterers', category: 'Food & Bev', assignee: 'Paresh Bafna', dueDate: '10 Nov 2026', done: true },
  { id: 't-2', task: 'Distribute outstation flight tickets & PNRs', category: 'Travel', assignee: 'Darshana', dueDate: '12 Nov 2026', done: false },
  { id: 't-3', task: 'Coordinate sangeet choreography lineup', category: 'Entertainment', assignee: 'Sonal', dueDate: '14 Nov 2026', done: false }
];

export const sangeetLineup = [
  { id: 's-1', seq: 1, group: 'Bride & Groom Entry', song: 'Din Shagna Da Mashup', duration: '4 mins', props: 'Smoke Bombs & Cold Pyros', coordinator: 'Paresh' },
  { id: 's-2', seq: 2, group: 'Groom Side Family', song: 'Gallan Goodiyaan', duration: '5 mins', props: 'Bhangra Dhol', coordinator: 'Karanji' },
  { id: 's-3', seq: 3, group: 'Bride Friends Performance', song: 'Kala Chashma Remix', duration: '4 mins', props: 'LED Glasses', coordinator: 'Darshana' }
];

export const guestbookEntries = [
  { id: 'gb-1', author: 'Aunty Sunita & Uncle Ramesh', relation: 'Family Elders', time: '18 Nov 2026, 11:30 AM', text: 'May your lives be blessed with unending joy, love, and prosperity! Heartfelt congratulations.' },
  { id: 'gb-2', author: 'Karan & Lachi', relation: 'Sister & Brother-in-law', time: '18 Nov 2026, 01:15 PM', text: 'So thrilled to celebrate your special union in Udaipur! Lots of love and hugs.' }
];

export function computeLiveTelemetry() {
  const totalFamilies = guests.length;
  const attendingPax = guests.filter(g => g.status === 'Attending').reduce((s, g) => s + Number(g.pax || 1), 0);
  const totalCost = vendors.reduce((s, v) => s + v.cost, 0);
  const totalPaid = vendors.reduce((s, v) => s + v.paid, 0);
  return { totalFamilies, attendingPax, totalCost, totalPaid };
} 