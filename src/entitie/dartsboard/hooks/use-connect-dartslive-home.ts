import { useAtom } from 'jotai/react';
import { DARTSLIVE_HOME_BLUETOOTH_UUID } from '../constants/bluetooth-uuid';
import { DARTSLIVE_HOME_POSITION_FORMAT } from '../constants/position-format';
import { connectStatusAtom, dartsHitHistoryAtom } from '../stores/atoms';
import { connectToBluetoothDevice } from '../utils/connect-bluetooth-dartsboard';

export const useConnectDartsliveHome = () => {
  const [dartsHitHistory, setDartsHitHistory] = useAtom(dartsHitHistoryAtom);
  const [connectStatus, setConnectStatus] = useAtom(connectStatusAtom);

  const connectDartsliveHome = async () => {
    try {
      await connectToBluetoothDevice({
        bluetoothUUID: DARTSLIVE_HOME_BLUETOOTH_UUID,
        handleDartsHit: target => {
          const hitTarget = DARTSLIVE_HOME_POSITION_FORMAT[target];
          setDartsHitHistory(prev => [...prev, hitTarget]);
          console.table(hitTarget);
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

  const resetDartsHitHistory = () => {
    setDartsHitHistory([]);
  };

  return {
    connectDartsliveHome,
    resetDartsHitHistory,
    dartsHitHistory,
    connectStatus,
  };
};
