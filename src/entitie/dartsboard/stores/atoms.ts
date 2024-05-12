import type { Darts_Positions } from '@/shared/libs/gql-codegen/generated/graphql';
import { atom } from 'jotai';

export type ConnectStatus = 'disconnected' | 'connecting' | 'connected';
export const connectStatusAtom = atom<ConnectStatus>('disconnected');

export type DartsPosition = Darts_Positions;
export const dartsHitHistoryAtom = atom<DartsPosition[]>([]);
