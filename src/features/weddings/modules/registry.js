// One list drives the app launcher, the module header and lazy loading.
// Add a module = add one line here + one file in this folder (export render(root)).
export const MODULES = [
  { id: 'overview',    icon: '📊', label: 'Telemetry',    name: 'Overview & Telemetry', badge: 'Telemetry',       desc: 'Live wedding telemetry and metrics',                       load: () => import('./overview.js') },
  { id: 'whatsapp',    icon: '💬', label: 'WhatsApp',     name: 'WhatsApp Blaster',     badge: 'Messaging',       desc: 'Meta-verified invite dispatch & delivery status',          load: () => import('./whatsapp.js') },
  { id: 'hosts',       icon: '👑', label: 'Family Hosts', name: 'Family Hosts',         badge: 'Hosts',           desc: 'Individual family host profiles & details',                load: () => import('./hosts.js') },
  { id: 'events',      icon: '📅', label: 'Events',       name: 'Events Schedule',      badge: 'Events',          desc: 'Ceremonies, venues, timings & dress codes',                load: () => import('./events.js') },
  { id: 'guests',      icon: '👥', label: 'Guest List',   name: 'Guest List',           badge: 'Guests',          desc: 'Family members, RSVP status, pax & tiers',                 load: () => import('./guests.js') },
  { id: 'web-invite',  icon: '💌', label: 'Web Invite',   name: 'Web Invite Pass',      badge: 'Invitation',      desc: 'Interactive 3D wax-seal royal web invitation',             load: () => import('./web-invite.js') },
  { id: 'rooms',       icon: '🏨', label: 'Rooms',        name: 'Stay Accommodation',   badge: 'Rooms',           desc: 'Hotel inventory, room cards & outstation stay',            load: () => import('./rooms/index.js') },
  { id: 'flights',     icon: '✈️', label: 'Flights',      name: 'Flight Manifest',      badge: 'Travel',          desc: 'Air arrivals, route groups & PNR tracker',                 load: () => import('./flights.js') },
  { id: 'trains',      icon: '🚆', label: 'Trains',       name: 'Train Manifest',       badge: 'Travel',          desc: 'Train arrivals, platforms & IRCTC PNR',                    load: () => import('./trains.js') },
  { id: 'sangeet',     icon: '🎵', label: 'Sangeet',      name: 'Sangeet Lineup',       badge: 'Performances',    desc: 'Stage performance cues, songs & props',                    load: () => import('./sangeet.js') },
  { id: 'guestbook',   icon: '📖', label: 'Guestbook',    name: 'Guestbook Wishes',     badge: 'Blessings',       desc: 'Digital blessings & aashirwad board',                      load: () => import('./guestbook.js') },
  { id: 'gallery',     icon: '🖼️', label: 'Gallery',      name: 'Photo Gallery',        badge: 'Media',           desc: 'Cloud albums & event photography',                         load: () => import('./gallery.js') },
  { id: 'shagun',      icon: '🧧', label: 'Shagun',       name: 'Shagun Ledger',        badge: 'Finance',         desc: 'Traditional envelopes & gift registry',                    load: () => import('./shagun.js') },
  { id: 'tasks',       icon: '✅', label: 'Tasks',        name: 'Tasks Checklist',      badge: 'Operations',      desc: 'Family responsibility task assignments',                   load: () => import('./tasks.js') },
  { id: 'vendors',     icon: '🤝', label: 'Vendors',      name: 'Vendors & Payouts',    badge: 'Contracts',       desc: 'Supplier contracts & payment milestones',                  load: () => import('./vendors.js') },
  { id: 'budget',      icon: '₹',  label: 'Budget',       name: 'Budget Planner',       badge: 'Cashflow Ledger', desc: 'Supplier contracts, advance paid & remaining balance due', load: () => import('./budget.js') },
  { id: 'calendar',    icon: '🗓️', label: 'Calendar',     name: 'Wedding Calendar',     badge: 'Schedule',        desc: 'Master ceremony timeline and key milestones',              load: () => import('./calendar.js') },
  { id: 'team-access', icon: '🔐', label: 'Role Access',  name: 'Role & Team Access',   badge: 'Permissions',     desc: 'Manage Creator, Host, User, and Guest permissions',        load: () => import('./team-access.js') }
];

// Old ids from earlier links / bookmarks.
const ALIASES = { rsvp: 'guests', webinvites: 'web-invite', users: 'team-access' };

export const resolveModuleId = id => ALIASES[id] || id;
export const findModule = id => MODULES.find(m => m.id === resolveModuleId(id));
