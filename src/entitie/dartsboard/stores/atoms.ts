import type { Darts_Positions } from '@/shared/libs/gql-codegen/generated/graphql';
import { atom } from 'jotai';

export type ConnectStatus = 'disconnected' | 'connecting' | 'connected';
export const connectStatusAtom = atom<ConnectStatus>('disconnected');

export type DartsPosition = Darts_Positions;
export type DartsHitHistory = DartsPosition | null;

export const dartsHitHistoryAtom = atom<
  Array<[DartsHitHistory?, DartsHitHistory?, DartsHitHistory?]>
>([[]]);
