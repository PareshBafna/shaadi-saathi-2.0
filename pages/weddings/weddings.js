import { FEATURE_GROUPS } from '../../home/components/suites/suites.js';

let activeWeddingId = 'w1';
let currentModuleId = 'overview';
let messageCreditsRemaining = 2840;
let messageCreditsTotal = 4000;

let weddingEvents = [
  { id: 'ev1', code: 'Haldi', name: 'Welcome Lunch & Haldi Carnival', date: '12 Dec 2026', time: '12:30 PM', venue: 'Courtyard Lawns, Taj', dress: 'Sunshine Yellow', expectedPax: 180 },
  { id: 'ev2', code: 'Mehendi', name: 'Rajwada Mehendi Soirée', date: '12 Dec 2026', time: '04:30 PM', venue: 'Royal Lawns, Udaipur', dress: 'Emerald & Mirrorwork', expectedPax: 220 },
  { id: 'ev3', code: 'Sangeet', name: 'Starlight Sangeet Gala', date: '13 Dec 2026', time: '08:00 PM', venue: 'Grand Crystal Ballroom', dress: 'Black Tie / Indo-Western', expectedPax: 310 },
  { id: 'ev4', code: 'Shaadi', name: 'Royal Wedding & Reception Gala', date: '14 Dec 2026', time: '06:45 PM', venue: 'Jagmandir Island Mandap', dress: 'Royal Bandhgala & Lehenga', expectedPax: 412 }
];

let weddingsData = [
  {
    id: 'w1',
    couple: 'Aarav & Ananya Wedding',
    dates: '12–14 Dec 2026',
    venue: 'Taj Lake Palace, Udaipur',
    plan: 'Royal Gold (₹14,999)',
    totalInvited: 450,
    attendingPax: 412,
    roomsBooked: 165,
    roomsTotal: 180,
    budgetTotal: '₹2.4 Cr',
    budgetSpent: '₹1.85 Cr',
    alerts: [
      { id: 'al1', text: '14 VIP airport pickups pending driver assignment for 12 Dec morning.', level: 'high' },
      { id: 'al2', text: 'Taj Lake Palace rooming list lock deadline in 48 hours.', level: 'medium' }
    ]
  },
  {
    id: 'w2',
    couple: 'Kabir & Meera Royal Union',
    dates: '18–20 Jan 2027',
    venue: 'Umaid Bhawan Palace, Jodhpur',
    plan: 'Royal Gold (₹14,999)',
    totalInvited: 600,
    attendingPax: 520,
    roomsBooked: 210,
    roomsTotal: 240,
    budgetTotal: '₹3.8 Cr',
    budgetSpent: '₹2.10 Cr',
    alerts: [
      { id: 'al3', text: 'Sangeet artist technical rider pending sound vendor sign-off.', level: 'medium' }
    ]
  },
  {
    id: 'w3',
    couple: 'Rohan & Tara Intimate Soirée',
    dates: '05–07 Feb 2027',
    venue: 'Alila Fort Bishangarh, Jaipur',
    plan: 'Silver Classic (₹7,999)',
    totalInvited: 220,
    attendingPax: 195,
    roomsBooked: 88,
    roomsTotal: 90,
    budgetTotal: '₹1.1 Cr',
    budgetSpent: '₹0.75 Cr',
    alerts: [
      { id: 'al4', text: 'All rooms nearly full; 2 waitlist families need spillover hotel.', level: 'high' }
    ]
  }
];

let guestsByWedding = {
  w1: [
    { id: 'g1', name: 'Prakash Vinaykiya', side: 'Bride', group: 'Family', rsvp: 'Attending', pax: 3, members: 'Prakash Vinaykiya|Sudarshan Vinaykiya|Dushyant Vinaykiya', events: 'all-events', hotel: 'Taj Lake Palace - 204', travel: 'AI-471 • 12 Dec 10:15 AM' },
    { id: 'g2', name: 'Mahendra Bafna', side: 'Groom', group: 'Family', rsvp: 'Attending', pax: 2, members: 'Mahendra Bafna|Kavita Bafna', events: '2-events', hotel: 'Taj Lake Palace - 310', travel: '6E-882 • 12 Dec 11:30 AM' },
    { id: 'g3', name: 'Vikramaditya Singhania', side: 'Groom', group: 'VIP', rsvp: 'Attending', pax: 4, members: 'Vikramaditya Singhania|Ritu Singhania|Aryan Singhania|Diya Singhania', events: 'all-events', hotel: 'Taj Grand Presidential Suite', travel: 'Private Charter • 12 Dec 09:00 AM' },
    { id: 'g4', name: 'Neha & Siddharth Kapoor', side: 'Bride', group: 'Friends', rsvp: 'Pending', pax: 2, members: 'Neha Kapoor|Siddharth Kapoor', events: '3-events', hotel: 'Unassigned', travel: 'Pending Flight Details' }
  ],
  w2: [
    { id: 'g5', name: 'Rajeshwar Rathore', side: 'Groom', group: 'VIP', rsvp: 'Attending', pax: 2, members: 'Rajeshwar Rathore|Padmini Rathore', events: 'all-events', hotel: 'Maharani Suite - 101', travel: 'Self Drive' }
  ],
  w3: [
    { id: 'g6', name: 'Anjali Mehta', side: 'Bride', group: 'Family', rsvp: 'Attending', pax: 3, members: 'Anjali Mehta|Rakesh Mehta|Karan Mehta', events: 'all-events', hotel: 'Fort Suite - 402', travel: '6E-214 • 05 Feb 01:20 PM' }
  ]
};

const APP_MODULES = [
  { id: 'overview', name: 'Telemetry', icon: '📊', desc: 'Live RSVP, Pax & Credits' },
  { id: 'guests', name: 'Guest List', icon: '👥', desc: 'Spreadsheet & RSVPs' },
  { id: 'events', name: 'Events & Pax', icon: '🎉', desc: 'Sub-events & Dress Codes' },
  { id: 'hotels', name: 'Rooming', icon: '🏨', desc: 'Hotel Allocation & Suites' },
  { id: 'logistics', name: 'Logistics', icon: '🚖', desc: 'Flights & Airport Transfers' },
  { id: 'broadcast', name: 'WhatsApp', icon: '💬', desc: 'AI Bot & Bulk Alerts' }
];

function getActiveWedding() {
  return weddingsData.find(w => w.id === activeWeddingId) || weddingsData[0];
}

function getActiveGuests() {
  if (!guestsByWedding[activeWeddingId]) {
    guestsByWedding[activeWeddingId] = [];
  }
  return guestsByWedding[activeWeddingId];
}

export function initWeddingsView() {
  renderGlobalRollup();
  renderAllWeddingsGrid();
  renderWorkspaceHeader();
  renderAppLauncher();
  renderCriticalAlerts();
  renderActiveModule();
}

function renderGlobalRollup() {
  const strip = document.getElementById('globalRollupStrip');
  if (!strip) return;

  const totalWeddings = weddingsData.length;
  const totalPax = weddingsData.reduce((acc, w) => acc + w.attendingPax, 0);
  const totalInvited = weddingsData.reduce((acc, w) => acc + w.totalInvited, 0);
  const totalRooms = weddingsData.reduce((acc, w) => acc + w.roomsBooked, 0);
  const criticalCount = weddingsData.reduce((acc, w) => acc + w.alerts.length, 0);

  const metrics = [
    { label: 'Active Weddings', val: totalWeddings, sub: '2026–27 Season' },
    { label: 'Confirmed Pax', val: totalPax, sub: 'of ' + totalInvited + ' invited' },
    { label: 'Rooms Locked', val: totalRooms, sub: 'Across 3 Palaces' },
    { label: 'WA Credits Left', val: messageCreditsRemaining.toLocaleString(), sub: 'of ' + messageCreditsTotal },
    { label: 'Open Alerts', val: criticalCount, sub: 'Needs attention' },
    { label: 'Suites Loaded', val: Array.isArray(FEATURE_GROUPS) ? FEATURE_GROUPS.length : 6, sub: 'Planner OS Modules' }
  ];

  strip.innerHTML = metrics.map(m => 
    '<div class="bento-card p-3.5 sm:p-4 flex flex-col justify-between">' +
    '<span class="text-[11px] font-mono uppercase tracking-wider text-muted">' + m.label + '</span>' +
    '<div class="font-serif text-2xl sm:text-3xl font-bold text-gold my-1">' + m.val + '</div>' +
    '<span class="text-[11px] text-cream/70">' + m.sub + '</span>' +
    '</div>'
  ).join('');
}

function renderAllWeddingsGrid() {
  const grid = document.getElementById('creatorWeddingsGrid');
  if (!grid) return;

  grid.innerHTML = weddingsData.map(w => {
    const rsvpPct = Math.round((w.attendingPax / (w.totalInvited || 1)) * 100);
    const roomPct = Math.round((w.roomsBooked / (w.roomsTotal || 1)) * 100);

    return '<div onclick="openWeddingWorkspace(\'' + w.id + '\')" class="bento-card p-5 sm:p-6 space-y-4 cursor-pointer hover:border-gold transition-all">' +
      '<div class="flex flex-wrap items-start justify-between gap-2">' +
      '<div>' +
      '<span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-gold/20 text-gold">' + w.plan + '</span>' +
      '<h3 class="font-serif text-xl sm:text-2xl font-bold text-cream mt-2">' + w.couple + '</h3>' +
      '<p class="text-xs text-muted mt-0.5">' + w.dates + ' • ' + w.venue + '</p>' +
      '</div>' +
      '<button class="btn-gold px-3.5 py-2 rounded-xl text-xs font-bold">Open OS →</button>' +
      '</div>' +
      '<div class="grid grid-cols-3 gap-3 pt-2">' +
      '<div class="bg-card border border-borderWarm rounded-xl p-3">' +
      '<span class="text-[11px] text-muted block">Confirmed Pax</span>' +
      '<span class="font-serif text-lg font-bold text-cream">' + w.attendingPax + ' / ' + w.totalInvited + '</span>' +
      '<span class="text-[10px] text-gold block mt-0.5">' + rsvpPct + '% RSVP Rate</span>' +
      '</div>' +
      '<div class="bg-card border border-borderWarm rounded-xl p-3">' +
      '<span class="text-[11px] text-muted block">Rooms Locked</span>' +
      '<span class="font-serif text-lg font-bold text-cream">' + w.roomsBooked + ' / ' + w.roomsTotal + '</span>' +
      '<span class="text-[10px] text-gold block mt-0.5">' + roomPct + '% Occupied</span>' +
      '</div>' +
      '<div class="bg-card border border-borderWarm rounded-xl p-3">' +
      '<span class="text-[11px] text-muted block">Budget Track</span>' +
      '<span class="font-serif text-lg font-bold text-cream">' + w.budgetSpent + '</span>' +
      '<span class="text-[10px] text-muted block mt-0.5">of ' + w.budgetTotal + '</span>' +
      '</div>' +
      '</div>' +
      '</div>';
  }).join('');
}

function renderWorkspaceHeader() {
  const w = getActiveWedding();
  const coupleEl = document.getElementById('wsBannerCouple');
  const datesEl = document.getElementById('wsBannerDates');
  if (coupleEl) coupleEl.textContent = w.couple;
  if (datesEl) datesEl.textContent = w.dates + ' • ' + w.venue;
}

function renderAppLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  if (!grid) return;

  grid.innerHTML = APP_MODULES.map(mod => 
    '<div onclick="switchWorkspaceModule(\'' + mod.id + '\')" class="app-tile ' + (currentModuleId === mod.id ? 'active-tile' : '') + '">' +
    '<div class="app-tile-icon">' + mod.icon + '</div>' +
    '<div class="font-bold text-xs text-cream">' + mod.name + '</div>' +
    '<div class="text-[10px] text-muted leading-tight">' + mod.desc + '</div>' +
    '</div>'
  ).join('');
}

function renderCriticalAlerts() {
  const box = document.getElementById('wsCriticalAlertsBox');
  if (!box) return;

  const w = getActiveWedding();
  const creditPct = Math.round((messageCreditsRemaining / messageCreditsTotal) * 100);

  const alertsHtml = (w.alerts || []).map(a => 
    '<div class="p-3 rounded-xl bg-card border ' + (a.level === 'high' ? 'border-red-500/40' : 'border-gold/30') + ' text-xs text-cream flex items-start gap-2.5">' +
    '<span>' + (a.level === 'high' ? '🚨' : '⚠️') + '</span>' +
    '<span>' + a.text + '</span>' +
    '</div>'
  ).join('');

  box.innerHTML = alertsHtml +
    '<div class="p-3 rounded-xl bg-card border border-borderWarm space-y-1.5">' +
    '<div class="flex justify-between text-xs">' +
    '<span class="text-muted">WhatsApp RSVP Bot Credits</span>' +
    '<span class="text-gold font-mono font-bold">' + messageCreditsRemaining + ' / ' + messageCreditsTotal + '</span>' +
    '</div>' +
    '<div class="w-full h-2 bg-obsidian rounded-full overflow-hidden">' +
    '<div class="h-full bg-gold" style="width: ' + creditPct + '%"></div>' +
    '</div>' +
    '</div>';
}

function renderActiveModule() {
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  const w = getActiveWedding();
  const guests = getActiveGuests();

  if (currentModuleId === 'overview') {
    viewport.innerHTML = '<div class="bento-card p-5 sm:p-6 space-y-4">' +
      '<div class="flex flex-wrap items-center justify-between gap-2">' +
      '<div>' +
      '<span class="text-xs font-mono uppercase text-gold">Live Telemetry Overview</span>' +
      '<h3 class="font-serif text-2xl font-bold text-cream">' + w.couple + ' — Command Breakdown</h3>' +
      '</div>' +
      '<button onclick="switchWorkspaceModule(\'guests\')" class="btn-gold px-4 py-2 rounded-xl text-xs font-bold">Manage Guest Spreadsheet →</button>' +
      '</div>' +
      '<div class="grid grid-cols-1 md:grid-cols-4 gap-4">' +
      weddingEvents.map(ev => 
        '<div class="bg-card border border-borderWarm rounded-xl p-4 space-y-2">' +
        '<div class="flex justify-between items-center">' +
        '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-gold/20 text-gold font-bold">' + ev.code + '</span>' +
        '<span class="text-xs text-muted">' + ev.date + '</span>' +
        '</div>' +
        '<h4 class="font-serif text-lg font-bold text-cream">' + ev.name + '</h4>' +
        '<p class="text-xs text-muted">' + ev.venue + ' • ' + ev.time + '</p>' +
        '<div class="pt-2 border-t border-borderWarm flex justify-between items-center text-xs">' +
        '<span class="text-muted">Dress: <strong class="text-cream">' + ev.dress + '</strong></span>' +
        '<span class="text-gold font-bold">' + ev.expectedPax + ' Pax</span>' +
        '</div>' +
        '</div>'
      ).join('') +
      '</div>' +
      '</div>';
    return;
  }

  if (currentModuleId === 'guests') {
    viewport.innerHTML = '<div class="bento-card p-5 sm:p-6 space-y-4">' +
      '<div class="flex flex-wrap items-center justify-between gap-3">' +
      '<div>' +
      '<span class="text-xs font-mono uppercase text-gold">Master Guest List & RSVPs</span>' +
      '<h3 class="font-serif text-2xl font-bold text-cream">Interactive Guest Spreadsheet (' + guests.length + ' Households)</h3>' +
      '</div>' +
      '<button onclick="addBlankGuestRow()" class="btn-gold px-4 py-2 rounded-xl text-xs font-bold">+ Add Guest Family</button>' +
      '</div>' +
      '<div class="ss-table-wrap">' +
      '<table class="ss-table">' +
      '<thead>' +
      '<tr>' +
      '<th>Primary Guest</th>' +
      '<th>Side</th>' +
      '<th>Category</th>' +
      '<th>RSVP Status</th>' +
      '<th>Pax Count</th>' +
      '<th>Family Members</th>' +
      '<th>Events Access</th>' +
      '<th>Room / Travel</th>' +
      '<th>Action</th>' +
      '</tr>' +
      '<thead>' +
      '<tbody>' +
      guests.map((g, idx) => 
        '<tr>' +
        '<td><input class="ss-input" value="' + g.name + '" onchange="updateGuestField(' + idx + ', \'name\', this.value)" /></td>' +
        '<td><select class="ss-input" onchange="updateGuestField(' + idx + ', \'side\', this.value)">' +
        '<option value="Bride" ' + (g.side === 'Bride' ? 'selected' : '') + '>Bride</option>' +
        '<option value="Groom" ' + (g.side === 'Groom' ? 'selected' : '') + '>Groom</option>' +
        '</select></td>' +
        '<td><input class="ss-input" value="' + g.group + '" onchange="updateGuestField(' + idx + ', \'group\', this.value)" /></td>' +
        '<td><select class="ss-input" onchange="updateGuestField(' + idx + ', \'rsvp\', this.value)">' +
        '<option value="Attending" ' + (g.rsvp === 'Attending' ? 'selected' : '') + '>Attending</option>' +
        '<option value="Pending" ' + (g.rsvp === 'Pending' ? 'selected' : '') + '>Pending</option>' +
        '<option value="Declined" ' + (g.rsvp === 'Declined' ? 'selected' : '') + '>Declined</option>' +
        '</select></td>' +
        '<td><input type="number" min="1" class="ss-input" style="width:70px" value="' + g.pax + '" onchange="updateGuestField(' + idx + ', \'pax\', parseInt(this.value || 1, 10))" /></td>' +
        '<td><input class="ss-input" value="' + g.members + '" onchange="updateGuestField(' + idx + ', \'members\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + g.events + '" onchange="updateGuestField(' + idx + ', \'events\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + (g.hotel || '') + '" placeholder="Room / Flight" onchange="updateGuestField(' + idx + ', \'hotel\', this.value)" /></td>' +
        '<td><button onclick="removeGuestRow(' + idx + ')" class="text-xs text-red-400 hover:underline font-bold">Delete</button></td>' +
        '</tr>'
      ).join('') +
      '<tbody>' +
      '</table>' +
      '</div>' +
      '</div>';
    return;
  }

  if (currentModuleId === 'events') {
    viewport.innerHTML = '<div class="bento-card p-5 sm:p-6 space-y-4">' +
      '<h3 class="font-serif text-2xl font-bold text-cream">Wedding Functions & Run-of-Show</h3>' +
      '<div class="ss-table-wrap">' +
      '<table class="ss-table">' +
      '<thead>' +
      '<tr>' +
      '<th>Code</th>' +
      '<th>Function Name</th>' +
      '<th>Date</th>' +
      '<th>Time</th>' +
      '<th>Venue</th>' +
      '<th>Dress Code</th>' +
      '<th>Expected Pax</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      weddingEvents.map((ev, i) => 
        '<tr>' +
        '<td><input class="ss-input" value="' + ev.code + '" onchange="updateEventField(' + i + ', \'code\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + ev.name + '" onchange="updateEventField(' + i + ', \'name\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + ev.date + '" onchange="updateEventField(' + i + ', \'date\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + ev.time + '" onchange="updateEventField(' + i + ', \'time\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + ev.venue + '" onchange="updateEventField(' + i + ', \'venue\', this.value)" /></td>' +
        '<td><input class="ss-input" value="' + ev.dress + '" onchange="updateEventField(' + i + ', \'dress\', this.value)" /></td>' +
        '<td><input type="number" class="ss-input" value="' + ev.expectedPax + '" onchange="updateEventField(' + i + ', \'expectedPax\', parseInt(this.value || 0, 10))" /></td>' +
        '</tr>'
      ).join('') +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>';
    return;
  }

  viewport.innerHTML = '<div class="bento-card p-5 sm:p-6 space-y-4">' +
    '<span class="text-xs font-mono uppercase text-gold">Module Active: ' + currentModuleId.toUpperCase() + '</span>' +
    '<h3 class="font-serif text-2xl font-bold text-cream">' + w.couple + ' — ' + currentModuleId.toUpperCase() + ' Console</h3>' +
    '<p class="text-xs text-muted">Connected to ' + guests.length + ' guest households and ' + weddingEvents.length + ' scheduled functions.</p>' +
    '<div class="ss-table-wrap">' +
    '<table class="ss-table">' +
    '<thead>' +
    '<tr>' +
    '<th>Guest Family</th>' +
    '<th>Pax</th>' +
    '<th>Room Assignment</th>' +
    '<th>Flight / Transfer</th>' +
    '<th>RSVP Status</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    guests.map((g, idx) => 
      '<tr>' +
      '<td class="font-bold text-cream">' + g.name + '</td>' +
      '<td>' + g.pax + '</td>' +
      '<td><input class="ss-input" value="' + (g.hotel || 'Unassigned') + '" onchange="updateGuestField(' + idx + ', \'hotel\', this.value)" /></td>' +
      '<td><input class="ss-input" value="' + (g.travel || 'Pending') + '" onchange="updateGuestField(' + idx + ', \'travel\', this.value)" /></td>' +
      '<td><span class="px-2 py-0.5 rounded text-xs bg-gold/20 text-gold">' + g.rsvp + '</span></td>' +
      '</tr>'
    ).join('') +
    '</tbody>' +
    '</table>' +
    '</div>' +
    '</div>';
}

export function openWeddingWorkspace(weddingId) {
  activeWeddingId = weddingId;
  currentModuleId = 'overview';
  document.getElementById('creator-all-weddings')?.classList.add('hidden');
  document.getElementById('creator-single-workspace')?.classList.remove('hidden');
  renderWorkspaceHeader();
  renderAppLauncher();
  renderCriticalAlerts();
  renderActiveModule();
}

export function backToAllWeddings() {
  document.getElementById('creator-single-workspace')?.classList.add('hidden');
  document.getElementById('creator-all-weddings')?.classList.remove('hidden');
  renderGlobalRollup();
  renderAllWeddingsGrid();
}

export function switchWorkspaceModule(modId) {
  currentModuleId = modId;
  renderAppLauncher();
  renderActiveModule();
}

export function toggleAppGridLauncher() {
  const sec = document.getElementById('wsAppLauncherSection');
  if (sec) sec.classList.toggle('hidden');
}

export function updateGuestField(index, field, value) {
  const list = getActiveGuests();
  if (!list[index]) return;
  list[index][field] = value;
  recalcWeddingTotals();
}

export function addBlankGuestRow() {
  const list = getActiveGuests();
  list.push({
    id: 'g' + Date.now(),
    name: 'New Guest Family',
    side: 'Bride',
    group: 'Friends',
    rsvp: 'Pending',
    pax: 2,
    members: 'New Guest Family',
    events: 'all-events',
    hotel: 'Unassigned',
    travel: 'Pending'
  });
  recalcWeddingTotals();
  renderActiveModule();
}

export function removeGuestRow(index) {
  const list = getActiveGuests();
  list.splice(index, 1);
  recalcWeddingTotals();
  renderActiveModule();
}

export function updateEventField(index, field, value) {
  if (!weddingEvents[index]) return;
  weddingEvents[index][field] = value;
}

function recalcWeddingTotals() {
  const w = getActiveWedding();
  const list = getActiveGuests();
  w.attendingPax = list
    .filter(g => g.rsvp === 'Attending')
    .reduce((sum, g) => sum + (Number(g.pax) || 0), 0);
  renderCriticalAlerts();
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
  const raw = document.getElementById('csvPasteArea')?.value || '';
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  const list = getActiveGuests();

  lines.forEach((line, idx) => {
    const parts = line.split(',').map(s => s ? s.trim() : '');
    const name = parts[0];
    const side = parts[1];
    const group = parts[2];
    const rsvp = parts[3];
    const pax = parts[4];
    const members = parts[5];
    const events = parts[6];

    if (!name || name.toLowerCase() === 'name') return;
    list.push({
      id: 'imp_' + Date.now() + '_' + idx,
      name,
      side: side || 'Bride',
      group: group || 'Family',
      rsvp: rsvp || 'Attending',
      pax: parseInt(pax || '1', 10),
      members: members || name,
      events: events || 'all-events',
      hotel: 'Unassigned',
      travel: 'Pending'
    });
  });

  recalcWeddingTotals();
  closeImportGuestsModal();
  currentModuleId = 'guests';
  renderAppLauncher();
  renderActiveModule();
}

export function buildGuestsCSVString() {
  const list = getActiveGuests();
  const header = 'Name,Side,Group,RSVP,Pax,Members,Events,Hotel,Travel';
  const rows = list.map(g =>
    [g.name, g.side, g.group, g.rsvp, g.pax, g.members, g.events, g.hotel || '', g.travel || ''].join(',')
  );
  return [header, ...rows].join('\n');
}

export function downloadSampleGuestCSV() {
  const sample = [
    'Name,Side,Group,RSVP,Pax,Members,Events',
    'Prakash Vinaykiya,Bride,Family,Attending,3,Prakash Vinaykiya|Sudarshan Vinaykiya|Dushyant Vinaykiya,all-events',
    'Mahendra Bafna,Groom,Family,Attending,2,Mahendra Bafna|Kavita Bafna,2-events'
  ].join('\n');
  triggerCSVDownload('sample_wedding_guests.csv', sample);
}

export function exportCurrentGuestsCSV() {
  const w = getActiveWedding();
  const slug = w.couple.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  triggerCSVDownload(slug + '_guests.csv', buildGuestsCSVString());
}

function triggerCSVDownload(filename, content) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function openSampleExportPreviewModal() {
  const pre = document.getElementById('sampleExportPre');
  if (pre) pre.textContent = buildGuestsCSVString();
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
  const couple = coupleInput?.value.trim() || 'New Royal Wedding';
  const venue = cityInput?.value.trim() || 'Udaipur Palace';

  const newId = 'w' + (weddingsData.length + 1);
  weddingsData.push({
    id: newId,
    couple,
    dates: 'TBD 2027',
    venue,
    plan: 'Royal Gold (₹14,999)',
    totalInvited: 250,
    attendingPax: 0,
    roomsBooked: 0,
    roomsTotal: 100,
    budgetTotal: '₹1.5 Cr',
    budgetSpent: '₹0.0 Cr',
    alerts: [
      { id: 'al_' + Date.now(), text: 'New workspace initialized. Import guest CSV to start.', level: 'medium' }
    ]
  });
  guestsByWedding[newId] = [];

  if (coupleInput) coupleInput.value = '';
  if (cityInput) cityInput.value = '';

  closeCreateWeddingModal();
  renderGlobalRollup();
  renderAllWeddingsGrid();
}

Object.assign(window, {
  openCreateWeddingModal,
  closeCreateWeddingModal,
  saveNewWedding,
  openWeddingWorkspace,
  backToAllWeddings,
  toggleAppGridLauncher,
  switchWorkspaceModule,
  openImportGuestsModal,
  closeImportGuestsModal,
  processGuestImport,
  downloadSampleGuestCSV,
  openSampleExportPreviewModal,
  closeSampleExportPreviewModal,
  exportCurrentGuestsCSV,
  updateGuestField,
  addBlankGuestRow,
  removeGuestRow,
  updateEventField
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWeddingsView);
} else {
  initWeddingsView();
}