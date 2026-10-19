import { FEATURE_GROUPS } from '../home/components/suites/suites.js';

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