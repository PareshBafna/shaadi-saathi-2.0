// Single source for all 18 services. Add a service = add one object in a suite file.
import { command } from './command.js';
import { hospitality } from './hospitality.js';
import { memories } from './memories.js';
import { finance } from './finance.js';

export const SUITES = [command, hospitality, memories, finance];
export const ALL_SERVICES = SUITES.flatMap(suite => suite.services);
