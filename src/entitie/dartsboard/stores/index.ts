import { atom } from 'jotai';

export type ConnectStatus = 'disconnected' | 'connecting' | 'connected';

export const connectStatusAtom = atom<ConnectStatus>('disconnected');
export const dartsHitHistoryAtom = atom<number[]>([]);
