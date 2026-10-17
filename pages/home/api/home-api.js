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

export const HOME_SERVICE_SLUGS = [
  'telemetry',
  'whatsapp-deck',
  'family-hosts',
  'events',
  'guest',
  'web-invite',
  'stay-accomodation',
  'flight-arrangements',
  'train-arrangements',
  'sangeeth-lineup',
  'guestbook',
  'gallery',
  'shagun-gifts',
  'tasks-checklist',
  'event-vendors',
  'budget-planner',
  'team-access',
  'calendar'
];