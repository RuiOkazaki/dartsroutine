import {
  type DartsRoundsHistory,
  dartsRoundsHistoryAtom,
} from '@/_entities/score';
import {
  connectStatusAtom,
  connectToBluetoothDevice,
} from '@/_shared/web-api/bluetooth';
import { useAtom } from 'jotai/react';
import {
  DARTSLIVE_HOME_BLUETOOTH_UUID,
  DARTSLIVE_HOME_POSITION_FORMAT,
} from './constants';

const fillLastRoundWithNull = (roundsHistory: DartsRoundsHistory) => {
  const newRoundsHistory = [...roundsHistory];
  const lastRound = newRoundsHistory[newRoundsHistory.length - 1];
  const numToFill = 3 - lastRound.length;
  for (let i = 0; i < numToFill; i++) {
    lastRound.push(null);
  }
  return newRoundsHistory;
};

export const useConnectDartsliveHome = () => {
  const [dartsRoundsHistory, setDartsRoundsHistory] = useAtom(
    dartsRoundsHistoryAtom,
  );
  const [connectStatus, setConnectStatus] = useAtom(connectStatusAtom);

  const connectDartsliveHome = async () => {
    try {
      await connectToBluetoothDevice({
        bluetoothUUID: DARTSLIVE_HOME_BLUETOOTH_UUID,
        handleDartsHit: target => {
          const hitTarget = DARTSLIVE_HOME_POSITION_FORMAT[target];
          setDartsRoundsHistory(prev => {
            const newDartsRoundsHistory = [...prev];

            // 最後の配列が最大個数の場合、配列を追加する
            if (
              newDartsRoundsHistory[newDartsRoundsHistory.length - 1].length ===
              3
            ) {
              newDartsRoundsHistory.push([]);
            }

            // チェンジボタンが押されたら、最後の配列をnullで埋める
            if (hitTarget.position_code === 'CHANGE') {
              newDartsRoundsHistory[newDartsRoundsHistory.length - 1] =
                fillLastRoundWithNull(newDartsRoundsHistory)[
                  newDartsRoundsHistory.length - 1
                ];
            } else {
              newDartsRoundsHistory[newDartsRoundsHistory.length - 1].push(
                hitTarget,
              );
            }

            return newDartsRoundsHistory;
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
    if (dartsRoundsHistory[dartsRoundsHistory.length - 1].length === 3) {
      setDartsRoundsHistory(prev => [...prev, []]);
    }
    setDartsRoundsHistory(prev => fillLastRoundWithNull(prev));
  };

  return {
    connectDartsliveHome,
    finalizeCurrentRound,
    dartsRoundsHistory,
    connectStatus,
  };
};
