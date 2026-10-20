import { guests, vendors, weddingEvents, familyHosts, familyTasks, sangeetLineup, guestbookEntries, weddingsPortfolio, roomInventory, ss } from './data/weddings-store.js';
import { showToast, formatINR, computeLiveTelemetry } from './utils/weddings-helpers.js';

export function selectCalendarDate(dt) {
  ss.selectedCalendarDate = dt;
  window.openSubPage('calendar', true);
}

export function cycleGuestRsvpStatus(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  const order = ['Attending', 'N/A', 'Declined'];
  const next = order[(order.indexOf(g.status) + 1) % order.length];
  g.status = next;
  if (next === 'Declined') g.pax = 0;
  else if (g.pax === 0) g.pax = Math.max(1, (g.members || []).length);
  window.openSubPage('rsvp', true);
  showToast(`${g.name} RSVP changed to ${next}`);
}

export function toggleGuestNeedsRoom(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  g.needsRoom = !g.needsRoom;
  window.openSubPage('rsvp', true);
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
  window.openSubPage('rooms', true);
  showToast(`Selected ${newLocation} — now choose room number`);
}

export function updateHostField(hostId, field, val) {
  const h = familyHosts.find(x => x.id === hostId);
  if (!h) return;
  h[field] = val;
  window.openSubPage('hosts', true);
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
  window.openSubPage('hosts', true);
  showToast('Added individual host profile (hosts all ceremonies)');
}

export function sendSingleWhatsAppInvite(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  g.waInviteSent = true;
  g.waStatus = 'Delivered ✓✓';
  g.waSentAt = 'Just now';
  ss.messageCreditsRemaining = Math.max(0, ss.messageCreditsRemaining - 1);
  window.renderWorkspaceAppLauncher();
  window.openSubPage('whatsapp', true);
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
  window.openSubPage('budget', true);
  showToast(`Updated assigned dates for ${v.vendor}`);
}

export function updateVendorBudget(vendorId, field, val) {
  const v = vendors.find(x => x.id === vendorId);
  if (!v) return;
  v[field] = Math.max(0, parseInt(val, 10) || 0);
  window.openSubPage('budget', true);
  showToast(`Updated ${v.vendor} budget`);
}

export function updateSangeetField(idx, field, val) {
  if (!sangeetLineup[idx]) return;
  sangeetLineup[idx][field] = val;
  window.openSubPage('sangeet', true);
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
  window.openSubPage('sangeet', true);
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
  window.openSubPage('shagun', true);
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
  window.openSubPage('events', true);
  showToast('Added new event (Unlimited Events supported)');
}

export function addSampleBlessing() {
  guestbookEntries.unshift({
    author: 'Suresh Patel',
    relation: 'Groom Side Family',
    time: 'Just now',
    text: 'May Lord Ganesha bless Aarav & Ananya with eternal happiness!'
  });
  window.openSubPage('guestbook', true);
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
  window.openSubPage(ss.currentModuleId, true);
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
  window.openSubPage('rsvp', true);
  showToast('Added new row to Guest Table');
}

export function updateMemberNameInline(guestId, memberIdx, newName) {
  const g = guests.find(x => x.id === guestId);
  if (g && g.members[memberIdx]) {
    g.members[memberIdx].name = newName.trim();
    window.openSubPage('rooms', true);
    showToast('Updated family member name');
  }
}

export function updateMemberRoomInline(guestId, memberIdx, newRoomId) {
  const g = guests.find(x => x.id === guestId);
  if (g && g.members[memberIdx]) {
    g.members[memberIdx].roomId = newRoomId;
    const rm = roomInventory.find(r => r.id === newRoomId);
    if (rm) g.members[memberIdx].stayLocation = rm.location;
    window.openSubPage('rooms', true);
    showToast(`Allotted ${g.members[memberIdx].name} to ${rm ? 'Room ' + rm.roomNumber + ' (' + rm.location + ')' : 'Unassigned'}`);
  }
}

export function addMemberToFamilyInline(guestId) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  g.members.push({ name: `${g.name.split(' ')[0]} Member ${g.members.length + 1}`, stayLocation: 'Taj Lake Palace', roomId: '' });
  g.pax = g.members.length;
  window.openSubPage('rooms', true);
  showToast(`Added member under ${g.name}`);
}

export function addRoomBlockQuick() {
  const nextNum = 400 + roomInventory.length + 1;
  roomInventory.push({ id: 'R-' + nextNum, location: 'Taj Lake Palace', roomNumber: String(nextNum), type: 'Deluxe Room', maxPax: 2 });
  window.openSubPage('rooms', true);
  showToast(`Added Room ${nextNum} card to Taj Lake Palace`);
}

export function updateTravelFieldInline(guestId, field, val, forcedMode) {
  const g = guests.find(x => x.id === guestId);
  if (!g) return;
  if (!g.travel) g.travel = { mode: forcedMode || 'Flight', fromCity: '', toCity: 'Udaipur', number: '', pnr: '', date: '12 Dec 2026', station: '', arrivalTime: '' };
  if (forcedMode) g.travel.mode = forcedMode;
  g.travel[field] = val;
  window.openSubPage(ss.currentModuleId, true);
  showToast(`Updated ${g.name} travel (${field})`);
}

export function toggleTaskChecklist(taskId, isChecked) {
  const tk = familyTasks.find(x => x.id === taskId);
  if (!tk) return;
  tk.done = isChecked;
  tk.status = isChecked ? 'Completed' : 'In Progress';
  window.openSubPage('tasks', true);
  showToast(isChecked ? `✓ Completed: ${tk.title}` : `Reopened: ${tk.title}`);
}

export function addNewChecklistTask() {
  const title = document.getElementById('newCheckTaskTitle')?.value.trim();
  if (!title) return;
  const owner = document.getElementById('newCheckTaskOwner')?.value.trim() || 'Family';
  const due = document.getElementById('newCheckTaskDue')?.value.trim() || '13 Dec';
  familyTasks.unshift({ id: 't-' + Date.now(), title, owner, due, status: 'Pending', done: false });
  window.openSubPage('tasks', true);
  showToast('Added task to family checklist');
}

export function useMessageCredits(cost, msg) {
  guests.forEach(g => {
    g.waInviteSent = true;
    if (!g.waStatus || g.waStatus === 'Queued') g.waStatus = 'Delivered ✓✓';
    g.waSentAt = 'Just now';
  });
  ss.messageCreditsRemaining = Math.max(0, ss.messageCreditsRemaining - cost);
  window.renderWorkspaceAppLauncher();
  window.openSubPage('whatsapp', true);
  showToast(`${msg} (-${cost} credits)`);
}


export function getSampleCSVContent() {
  return 'Primary_Guest,Side,Group,Status,Pax,Members,Invite_Variant_Tier\n"Anita Sharma",Bride,Family,Attending,3,"Anita|Rajesh|Rohan",all-events\n"Rohit Mehra",Groom,Friends,Attending,2,"Rohit|Karan",2-events';
}
export function openSampleExportPreviewModal() {
  document.getElementById('sampleExportPre').textContent = getSampleCSVContent();
  document.getElementById('sampleExportModal').classList.remove('hidden');
  document.getElementById('sampleExportModal').classList.add('flex');
}
export function closeSampleExportPreviewModal() { document.getElementById('sampleExportModal').classList.add('hidden'); }
export function downloadSampleGuestCSV() {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([getSampleCSVContent()], { type: 'text/csv' }));
  a.download = 'Shaadi-Saathi-Sample.csv';
  a.click();
}
export function exportCurrentGuestsCSV() { downloadSampleGuestCSV(); showToast('Exported Live CSV'); }
export function openImportGuestsModal() { document.getElementById('importGuestsModal').classList.remove('hidden'); document.getElementById('importGuestsModal').classList.add('flex'); }
export function closeImportGuestsModal() { document.getElementById('importGuestsModal').classList.add('hidden'); }
export function processGuestImport() {
  const lines = document.getElementById('csvPasteArea').value.trim().split(/\r?\n/).filter(Boolean);
  lines.forEach((l, i) => {
    const p = l.split(',');
    const tier = p[6]?.trim() || 'all-events';
    const members = (p[5] || p[0]).split('|').map(n => ({ name: n.trim(), stayLocation: 'Taj Lake Palace', roomId: '' }));
    guests.unshift({ id: 'g-imp-' + Date.now() + i, name: p[0].trim(), side: p[1] || 'Bride', group: 'Family', status: 'Attending', pax: members.length, needsRoom: true, inviteTier: tier, invitedEvents: tier === '1-event' ? ['Shaadi'] : (tier === '2-events' ? ['Sangeet', 'Shaadi'] : ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi']), shagun: 0, giftNote: '', courierStatus: 'Pending', waInviteSent: false, waStatus: 'Queued', waSentAt: '—', members, travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: '', arrivalTime: '' } });
  });
  closeImportGuestsModal();
  window.openSubPage('rsvp', true);
  showToast('Imported guests into table');
}
export function openCreateWeddingModal() { document.getElementById('createWeddingModal').classList.remove('hidden'); document.getElementById('createWeddingModal').classList.add('flex'); }
export function closeCreateWeddingModal() { document.getElementById('createWeddingModal').classList.add('hidden'); }
export function saveNewWedding() {
  const couple = document.getElementById('cwCoupleInput').value.trim();
  if (!couple) return;
  weddingsPortfolio.unshift({ id: 'w-' + Date.now(), couple, city: document.getElementById('cwCityInput').value || 'Jaipur', dates: '18–20 Nov 2026', userRole: 'CREATOR SUPER ADMIN', roleBadgeColor: 'bg-gold text-obsidian', rolePermissionsDesc: 'Full Creator & Planner OS Control', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80', isLive: false, telemetry: computeLiveTelemetry() });
  closeCreateWeddingModal();
  window.renderCreatorWeddings();
}
