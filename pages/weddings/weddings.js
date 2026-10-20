import {
  currentModuleId, setCurrentModuleId, setActiveWeddingId,
  weddingsPortfolio, guests
} from './data/weddings-store.js';
import { showToast } from './utils/weddings-helpers.js';
import { renderDirectoryView } from './components/directory/directory.js';
import { renderWorkspaceShell } from './components/workspace-shell/workspace-shell.js';

// Module Renderers Map
import { renderTelemetryModule } from './modules/telemetry.js';
import { renderWhatsAppModule } from './modules/whatsapp.js';
import { renderHostsModule } from './modules/hosts.js';
import { renderEventsModule } from './modules/events.js';
import { renderGuestsModule } from './modules/guests.js';
import { renderWebInviteModule } from './modules/web-invite.js';
import { renderRoomsModule } from './modules/rooms.js';
import { renderFlightsModule } from './modules/flights.js';
import { renderTrainsModule } from './modules/trains.js';
import { renderSangeetModule } from './modules/sangeet.js';
import { renderGuestbookModule } from './modules/guestbook.js';
import { renderGalleryModule } from './modules/gallery.js';
import { renderShagunModule } from './modules/shagun.js';
import { renderTasksModule } from './modules/tasks.js';
import { renderVendorsModule } from './modules/vendors.js';
import { renderBudgetModule } from './modules/budget.js';
import { renderTeamAccessModule } from './modules/team-access.js';
import { renderCalendarModule } from './modules/calendar.js';

function renderActiveViewportModule() {
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  const refreshFn = () => renderActiveViewportModule();

  switch (currentModuleId) {
    case 'overview': viewport.innerHTML = renderTelemetryModule(); break;
    case 'whatsapp': viewport.innerHTML = renderWhatsAppModule(refreshFn); break;
    case 'hosts': viewport.innerHTML = renderHostsModule(refreshFn); break;
    case 'events': viewport.innerHTML = renderEventsModule(refreshFn); break;
    case 'rsvp': viewport.innerHTML = renderGuestsModule(refreshFn); break;
    case 'webinvites': viewport.innerHTML = renderWebInviteModule(); break;
    case 'rooms': viewport.innerHTML = renderRoomsModule(refreshFn); break;
    case 'flights': viewport.innerHTML = renderFlightsModule(refreshFn); break;
    case 'trains': viewport.innerHTML = renderTrainsModule(refreshFn); break;
    case 'sangeet': viewport.innerHTML = renderSangeetModule(refreshFn); break;
    case 'guestbook': viewport.innerHTML = renderGuestbookModule(refreshFn); break;
    case 'gallery': viewport.innerHTML = renderGalleryModule(); break;
    case 'shagun': viewport.innerHTML = renderShagunModule(refreshFn); break;
    case 'tasks': viewport.innerHTML = renderTasksModule(refreshFn); break;
    case 'vendors': viewport.innerHTML = renderVendorsModule(); break;
    case 'budget': viewport.innerHTML = renderBudgetModule(refreshFn); break;
    case 'users': viewport.innerHTML = renderTeamAccessModule(); break;
    case 'calendar': viewport.innerHTML = renderCalendarModule(refreshFn); break;
    default: viewport.innerHTML = renderTelemetryModule(); break;
  }
}

function openWorkspace(weddingId, moduleId = 'overview') {
  setActiveWeddingId(weddingId);
  setCurrentModuleId(moduleId);

  document.getElementById('creator-all-weddings').classList.add('hidden');
  document.getElementById('creator-single-workspace').classList.remove('hidden');

  renderWorkspaceShell(
    () => backToDirectory(),
    (selectedMod) => {
      setCurrentModuleId(selectedMod);
      renderWorkspaceShell(() => backToDirectory(), (m) => setCurrentModuleId(m));
      renderActiveViewportModule();
    }
  );

  renderActiveViewportModule();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToDirectory() {
  document.getElementById('creator-single-workspace').classList.add('hidden');
  document.getElementById('creator-all-weddings').classList.remove('hidden');
  renderDirectoryView((wId) => openWorkspace(wId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderModals() {
  const slot = document.getElementById('modal-slot');
  if (!slot) return;

  slot.innerHTML = `
    <!-- Import Modal -->
    <div id="importGuestsModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-surface border border-borderWarm rounded-2xl w-full max-w-lg p-5 space-y-4">
        <div class="flex justify-between items-center"><h3 class="font-serif text-2xl font-bold text-cream">Import Guests CSV</h3><button id="close-import-modal" class="text-lg">✕</button></div>
        <textarea id="csvPasteArea" rows="4" class="w-full bg-card border border-borderWarm rounded-xl p-3 text-xs font-mono text-cream">Prakash Vinaykiya,Bride,Family,Attending,3,Prakash Vinaykiya|Sudarshan Vinaykiya|Dushyant Vinaykiya,all-events
Mahendra Bafna,Groom,Family,Attending,2,Mahendra Bafna|Kavita Bafna,2-events</textarea>
        <div class="flex justify-end gap-2.5">
          <button id="btn-dl-sample-csv" class="px-4 py-2 rounded-xl bg-card border border-gold/40 text-gold text-xs font-bold">⬇ Sample CSV</button>
          <button id="btn-process-import" class="btn-gold px-5 py-2 rounded-xl text-xs font-bold">Import Now</button>
        </div>
      </div>
    </div>

    <!-- Export Modal -->
    <div id="sampleExportModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-surface border border-borderWarm rounded-2xl w-full max-w-2xl p-5 space-y-4">
        <div class="flex justify-between items-center"><h3 class="font-serif text-2xl font-bold text-cream">Sample CSV Export Preview</h3><button id="close-export-modal" class="text-lg">✕</button></div>
        <pre id="sampleExportPre" class="bg-obsidian border border-borderWarm rounded-xl p-4 text-xs font-mono text-gold overflow-x-auto"></pre>
      </div>
    </div>

    <!-- Create Wedding Modal -->
    <div id="createWeddingModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-surface border border-borderWarm rounded-2xl w-full max-w-md p-5 space-y-4">
        <div class="flex justify-between items-center"><h3 class="font-serif text-2xl font-bold text-cream">New Wedding Workspace</h3><button id="close-create-wedding-modal" class="text-lg">✕</button></div>
        <input id="cwCoupleInput" type="text" placeholder="Couple Name" class="w-full bg-card border border-borderWarm rounded-xl px-4 py-2.5 text-sm text-cream" />
        <input id="cwCityInput" type="text" placeholder="City / Venue" class="w-full bg-card border border-borderWarm rounded-xl px-4 py-2.5 text-sm text-cream" />
        <button id="btn-save-new-wedding" class="w-full btn-gold py-2.5 rounded-xl text-sm font-bold">Create Workspace</button>
      </div>
    </div>
  `;

  // Bind Modal Handlers
  document.getElementById('close-import-modal')?.addEventListener('click', () => {
    document.getElementById('importGuestsModal').classList.add('hidden');
    document.getElementById('importGuestsModal').classList.remove('flex');
  });

  document.getElementById('close-export-modal')?.addEventListener('click', () => {
    document.getElementById('sampleExportModal').classList.add('hidden');
  });

  document.getElementById('close-create-wedding-modal')?.addEventListener('click', () => {
    document.getElementById('createWeddingModal').classList.add('hidden');
  });

  document.getElementById('btn-dl-sample-csv')?.addEventListener('click', () => {
    const csvContent = 'Primary_Guest,Side,Group,Status,Pax,Members,Invite_Variant_Tier\n"Anita Sharma",Bride,Family,Attending,3,"Anita|Rajesh|Rohan",all-events';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csvContent], { type: 'text/csv' }));
    a.download = 'Shaadi-Saathi-Sample.csv';
    a.click();
  });

  document.getElementById('btn-process-import')?.addEventListener('click', () => {
    const lines = document.getElementById('csvPasteArea').value.trim().split(/\r?\n/).filter(Boolean);
    lines.forEach((l, i) => {
      const p = l.split(',');
      const tier = p[6]?.trim() || 'all-events';
      const members = (p[5] || p[0]).split('|').map(n => ({ name: n.trim(), stayLocation: 'Taj Lake Palace', roomId: '' }));
      guests.unshift({ id: 'g-imp-' + Date.now() + i, name: p[0].trim(), side: p[1] || 'Bride', group: 'Family', status: 'Attending', pax: members.length, needsRoom: true, inviteTier: tier, invitedEvents: tier === '1-event' ? ['Shaadi'] : (tier === '2-events' ? ['Sangeet', 'Shaadi'] : ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi']), shagun: 0, giftNote: '', courierStatus: 'Pending', waInviteSent: false, waStatus: 'Queued', waSentAt: '—', members, travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: '', arrivalTime: '' } });
    });
    document.getElementById('importGuestsModal').classList.add('hidden');
    renderActiveViewportModule();
    showToast('Imported guests into table');
  });

  document.getElementById('btn-save-new-wedding')?.addEventListener('click', () => {
    const couple = document.getElementById('cwCoupleInput').value.trim();
    if (!couple) return;
    weddingsPortfolio.unshift({
      id: 'w-' + Date.now(), couple, city: document.getElementById('cwCityInput').value || 'Jaipur', dates: '18–20 Nov 2026',
      userRole: 'CREATOR SUPER ADMIN', roleBadgeColor: 'bg-gold text-obsidian', rolePermissionsDesc: 'Full Creator & Planner OS Control',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80', isLive: false
    });
    document.getElementById('createWeddingModal').classList.add('hidden');
    renderDirectoryView((wId) => openWorkspace(wId));
    showToast(`Created workspace for ${couple}`);
  });
}

// Global API Object for HTML trigger hooks
window.WeddingsApp = {
  openCreateWeddingModal: () => {
    const m = document.getElementById('createWeddingModal');
    m.classList.remove('hidden');
    m.classList.add('flex');
  },
  openImportGuestsModal: () => {
    const m = document.getElementById('importGuestsModal');
    m.classList.remove('hidden');
    m.classList.add('flex');
  },
  openSampleExportPreviewModal: () => {
    const csvContent = 'Primary_Guest,Side,Group,Status,Pax,Members,Invite_Variant_Tier\n"Anita Sharma",Bride,Family,Attending,3,"Anita|Rajesh|Rohan",all-events\n"Rohit Mehra",Groom,Friends,Attending,2,"Rohit|Karan",2-events';
    document.getElementById('sampleExportPre').textContent = csvContent;
    const m = document.getElementById('sampleExportModal');
    m.classList.remove('hidden');
    m.classList.add('flex');
  },
  exportCurrentGuestsCSV: () => {
    const csvContent = 'Primary_Guest,Side,Group,Status,Pax,Members,Invite_Variant_Tier\n"Anita Sharma",Bride,Family,Attending,3,"Anita|Rajesh|Rohan",all-events';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csvContent], { type: 'text/csv' }));
    a.download = 'Shaadi-Saathi-Live-Export.csv';
    a.click();
    showToast('Exported Live CSV');
  }
};

// Application Boot Sequence
window.addEventListener('DOMContentLoaded', () => {
  renderModals();
  renderDirectoryView((wId) => openWorkspace(wId));
});