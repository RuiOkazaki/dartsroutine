export type BluetoothUUID = {
  readonly SERVICE_UUID: string;
  readonly CHARACTERISTIC_UUID: string;
};

export const DARTSLIVE_HOME_BLUETOOTH_UUID: BluetoothUUID = {
  SERVICE_UUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
  CHARACTERISTIC_UUID: '6e40fff6-b5a3-f393-e0a9-e50e24dcca9e',
} as const;
