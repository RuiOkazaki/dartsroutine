import type { DartsHitHistory } from '@/entitie/dartsboard/stores/atoms';
import { useAtom } from 'jotai/react';
import { DARTSLIVE_HOME_BLUETOOTH_UUID } from '../constants/bluetooth-uuid';
import { DARTSLIVE_HOME_POSITION_FORMAT } from '../constants/position-format';
import { connectStatusAtom, dartsHitHistoryAtom } from '../stores/atoms';
import { connectToBluetoothDevice } from '../utils/connect-bluetooth-dartsboard';

const fillLastRoundWithNull = (
  hitHistory: Array<[DartsHitHistory?, DartsHitHistory?, DartsHitHistory?]>,
) => {
  const newHitHistory = [...hitHistory];
  const lastArray = newHitHistory[newHitHistory.length - 1];
  const numToFill = 3 - lastArray.length;
  for (let i = 0; i < numToFill; i++) {
    lastArray.push(null);
  }
  return newHitHistory;
};

export const useConnectDartsliveHome = () => {
  const [dartsHitHistory, setDartsHitHistory] = useAtom(dartsHitHistoryAtom);
  const [connectStatus, setConnectStatus] = useAtom(connectStatusAtom);

  const connectDartsliveHome = async () => {
    try {
      await connectToBluetoothDevice({
        bluetoothUUID: DARTSLIVE_HOME_BLUETOOTH_UUID,
        handleDartsHit: target => {
          const hitTarget = DARTSLIVE_HOME_POSITION_FORMAT[target];
          setDartsHitHistory(prev => {
            const newDartsHitHistory = [...prev];

            // 最後の配列が最大個数の場合、配列を追加する
            if (
              newDartsHitHistory[newDartsHitHistory.length - 1].length === 3
            ) {
              newDartsHitHistory.push([]);
            }

            // チェンジボタンが押されたら、最後の配列をnullで埋める
            if (hitTarget.position_code === 'CHANGE') {
              newDartsHitHistory[newDartsHitHistory.length - 1] =
                fillLastRoundWithNull(newDartsHitHistory)[
                  newDartsHitHistory.length - 1
                ];
            } else {
              newDartsHitHistory[newDartsHitHistory.length - 1].push(hitTarget);
            }

            return newDartsHitHistory;
          });
        },
        handleConnectStatus: connectStatus => {
          setConnectStatus(connectStatus);
        },
      });
    } catch (error) {
      // TODO: toast
      console.error(error);
    }
  };

  const finalizeCurrentRound = () => {
    if (dartsHitHistory[dartsHitHistory.length - 1].length === 3) {
      setDartsHitHistory(prev => [...prev, []]);
    }
    setDartsHitHistory(prev => fillLastRoundWithNull(prev));
  };

  return {
    connectDartsliveHome,
    finalizeCurrentRound,
    dartsHitHistory,
    connectStatus,
  };
};
