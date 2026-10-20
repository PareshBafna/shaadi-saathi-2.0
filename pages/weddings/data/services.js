// 18 ordered services shown in the Planner OS launcher and module headers.
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


const ALIASES = { guests: 'rsvp', 'web-invite': 'webinvites', 'team-access': 'users' };

export function findFeatureItem(moduleId) {
  const id = ALIASES[moduleId] || moduleId;
  return ALL_SERVICES_ORDERED.find(it => it.id === id) || ALL_SERVICES_ORDERED[0];
}

export function normalizeModuleId(moduleId) {
  return ALIASES[moduleId] || moduleId || 'overview';
}
