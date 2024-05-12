import type { BluetoothUUID } from '../constants/bluetooth-uuid';
import type { ConnectStatus } from '../stores/atoms';

export const connectToBluetoothDevice = async ({
  bluetoothUUID,
  handleDartsHit,
  handleConnectStatus,
}: {
  bluetoothUUID: BluetoothUUID;
  handleDartsHit: (target: number) => void;
  handleConnectStatus: (status: ConnectStatus) => void;
}) => {
  try {
    handleConnectStatus('connecting');

    const device = await navigator.bluetooth.requestDevice({
      optionalServices: [bluetoothUUID.SERVICE_UUID],
      filters: [{ services: [bluetoothUUID.SERVICE_UUID] }],
    });

    if (device.gatt === undefined) {
      throw new Error('Bluetooth Device is not connected.');
    }

    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(bluetoothUUID.SERVICE_UUID);
    const characteristic = await service.getCharacteristic(
      bluetoothUUID.CHARACTERISTIC_UUID,
    );

    await characteristic.startNotifications();
    characteristic.addEventListener(
      'characteristicvaluechanged',
      (event: Event) => {
        const characteristic =
          event.target as BluetoothRemoteGATTCharacteristic;

        if (!characteristic.value) {
          throw new Error('Bluetooth Characteristic Value is not found.');
        }

        const unit8Array = new Uint8Array(characteristic.value.buffer);

        handleDartsHit(unit8Array[2]);
      },
    );
  } catch (error) {
    handleConnectStatus('disconnected');
    throw error;
  } finally {
    handleConnectStatus('connected');
  }
};
