import { connectToBluetoothDevice } from '@/entitie/dartsboard/utils/connect-bluetooth-dartsboard';
import { DARTSLIVE_HOME_BLUETOOTH_UUID } from '../constants/bluetooth-uuid';
import { DARTS_POSITION_FORMAT } from '../constants/position-format';

export const useConnectDartsliveHome = () => {
  const connectDartsliveHome = async () => {
    try {
      await connectToBluetoothDevice({
        bluetoothUUID: DARTSLIVE_HOME_BLUETOOTH_UUID,
        handleDartsHit: target => {
          const hitTarget = DARTS_POSITION_FORMAT[target];
          console.log(hitTarget);
        },
        handleConnectStatus: connectStatus => {
          console.log(connectStatus);
        },
      });
    } catch (error) {
      // TODO: toast
      console.error(error);
    }
  };

  return { connectDartsliveHome };
};
