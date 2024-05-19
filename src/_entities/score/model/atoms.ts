import { atom } from 'jotai';
import type { DartsRoundsHistory } from './types';

export const dartsRoundsHistoryAtom = atom<DartsRoundsHistory>([[]]);
