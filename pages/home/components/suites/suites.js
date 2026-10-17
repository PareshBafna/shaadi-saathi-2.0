export const FEATURE_GROUPS = [
  {
    groupId: 'suite1',
    groupTitle: 'Command, Invitations & Guest List Suite',
    items: [
      { id: 'overview', icon: '📊', shortName: 'Telemetry', name: 'Telemetry', desc: 'Complete live rollup of headcounts, room allotments, arrival PNRs, budget & tasks', badge: 'Live Rollup' },
      { id: 'whatsapp', icon: '💬', shortName: 'WhatsApp Deck', name: 'WhatsApp Deck', desc: 'Send event-filtered invites & reminders using your plan credits (₹1/extra msg)', badge: '2,840 Credits' },
      { id: 'hosts', icon: '🙏', shortName: 'Family Hosts', name: 'Family Hosts', desc: 'Configure Bride side, Groom side & Patriarch salutations for invitations', badge: 'Multiple Host Profiles' },
      { id: 'events', icon: '🎪', shortName: 'Event', name: 'Events', desc: 'Haldi, Mehendi, Sangeet & Reception with venues, dress codes & expected pax', badge: 'Unlimited Events' },
      { id: 'rsvp', icon: '👥', shortName: 'Guest', name: 'Guest', desc: 'Inline editable table for RSVP status, Pax count & Variant A/B/C assignment', badge: 'Editable Table' },
      { id: 'webinvites', icon: '💌', shortName: 'Web Invite', name: 'Web Invite', desc: 'Interactive 3D monogram wax seal, Shehnai audio, rose petals & Google Maps', badge: 'Royal Web Pass' }
    ]
  },
  {
    groupId: 'suite2',
    groupTitle: 'Hospitality, Travel & Sangeeth Suite',
    items: [
      { id: 'rooms', icon: '🏨', shortName: 'Stay Accomodation', name: 'Stay Accomodation', desc: 'Manage Room Allotments across individual members of each attending family', badge: 'Room Allotments' },
      { id: 'flights', icon: '✈️', shortName: 'Flight Arrangements', name: 'Flight Arrangements', desc: 'Track airport arrivals, airline flight numbers, PNR codes & terminal pickups', badge: 'Airport Manifest' },
      { id: 'trains', icon: '🚆', shortName: 'Train Arrangements', name: 'Train Arrangements', desc: 'Track railway station arrivals, train numbers, coach/platform & PNR codes', badge: 'Station Manifest' },
      { id: 'sangeet', icon: '🎵', shortName: 'Sangeeth Lineup', name: 'Sangeeth Lineup', desc: 'Sequence family dance performances, audio tracks, durations & stage props', badge: 'Stage Cues' }
    ]
  },
  {
    groupId: 'suite3',
    groupTitle: 'Memories, Shagun & Family Tasks Suite',
    items: [
      { id: 'guestbook', icon: '📖', shortName: 'Guestbook', name: 'Guestbook', desc: 'Collect heartfelt blessings and digital wishes from attending & outstation elders', badge: 'Family Blessings' },
      { id: 'gallery', icon: '📸', shortName: 'Gallery', name: 'Gallery', desc: 'Curate and share high-resolution event photography albums with guests', badge: 'Photo Wall' },
      { id: 'shagun', icon: '🎁', shortName: 'Shagun & Gifts', name: 'Shagun & Gifts', desc: 'Record family Chandla envelopes, gifts & physical invitation delivery status', badge: '₹1,89,100 Logged' },
      { id: 'tasks', icon: '✅', shortName: 'Tasks Checklist', name: 'Tasks Checklist', desc: 'Tick off pre-wedding and event duties with assigned family owner & status', badge: 'Checklist View' }
    ]
  },
  {
    groupId: 'suite4',
    groupTitle: 'Vendors, Budget, Team & Timeline Suite',
    items: [
      { id: 'vendors', icon: '🎤', shortName: 'Event Vendors', name: 'Event Vendors', desc: 'Manage Decoration, Catering, DJ, Anchoring & Photography agency contracts', badge: '5 Agencies' },
      { id: 'budget', icon: '₹', shortName: 'Budget Planner', name: 'Budget Planner', desc: 'Track planned vs. advance paid & remaining balance across wedding categories', badge: '62% Paid' },
      { id: 'users', icon: '🔐', shortName: 'Team Access', name: 'Team Access', desc: 'Control access across Creator, Family Host, Logistics Lead & Hospitality Desk', badge: 'Role Permissions' },
      { id: 'calendar', icon: '🗓️', shortName: 'Calendar', name: 'Calendar', desc: 'Day-by-day master schedule across all wedding events and venues', badge: 'Multi-Days Timeline' }
    ]
  }
];

let activeSuiteTab = 'suite1';

export async function initSuites(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./pages/home/components/suites/suites.html');
  slot.innerHTML = await res.text();

  window.selectSuiteTab = function(suiteId) {
    activeSuiteTab = suiteId;
    renderSuiteTabsAndContent();
  };

  renderSuiteTabsAndContent();
}

export function renderSuiteTabsAndContent() {
  const tabsBar = document.getElementById('suiteTabsBar');
  const container = document.getElementById('allSuitesContainer');
  if (!tabsBar || !container) return;

  const tabLabels = [
    { id: 'suite1', icon: '📊', label: '1. Command, Invites & Guests (6)' },
    { id: 'suite2', icon: '🏨', label: '2. Stay, Travel & Sangeeth (4)' },
    { id: 'suite3', icon: '🎁', label: '3. Memories, Shagun & Tasks (4)' },
    { id: 'suite4', icon: '₹', label: '4. Vendors, Budget & Timeline (4)' },
    { id: 'all', icon: '✨', label: 'View All 18 Services' }
  ];

  tabsBar.innerHTML = tabLabels.map(t => `
    <button
      role="tab"
      aria-selected="${activeSuiteTab === t.id}"
      onclick="selectSuiteTab('${t.id}')"
      class="hp-chip">
      <span>${t.icon}</span>
      <span>${t.label}</span>
    </button>
  `).join('');

  const groupsToShow = activeSuiteTab === 'all'
    ? FEATURE_GROUPS
    : FEATURE_GROUPS.filter(g => g.groupId === activeSuiteTab);

  container.innerHTML = groupsToShow.map(grp => `
    <div class="hp-tour">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
        <h3 class="text-2xl font-serif font-bold text-cream">${grp.groupTitle}</h3>
        <button onclick="openWorkspaceDirect('${grp.items[0].id}')" class="hp-link">Open in Workspace →</button>
      </div>
      <div class="hp-tour-grid hp-tour-grid-2col">
        ${grp.items.map(it => `
          <div class="hp-tour-row cursor-pointer" onclick="openWorkspaceDirect('${it.id}')">
            <div>
              <strong>${it.icon}${it.name}</strong>
              <small>${it.desc}</small>
            </div>
            <div class="flex items-center gap-3">
              <span class="hp-tag">${it.badge}</span>
              <span class="px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-xs font-bold text-gold">Open →</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}