import { DARTSLIVE_HOME_BLUETOOTH_UUID } from '../constants/bluetooth-uuid';
import { DARTS_POSITION_FORMAT } from '../constants/position-format';

/**
 * 「Connect」ボタンがクリックされたときに実行される関数です。
 * ブラウザがWeb Bluetooth APIをサポートしているかどうかを確認し、サポートしていない場合は警告します。
 */
export function handleConnectClick() {
  if (!navigator.bluetooth) {
    alert('Web Bluetooth API is not available in this browser!');
    return;
  }
  connectToBluetoothDevice();
}

/**
 * Bluetoothデバイスへの接続を試みる関数です。
 * Dartのスコア計測器に接続するためのフィルタとサービスを指定してデバイスを要求します。
 */
function connectToBluetoothDevice() {
  navigator.bluetooth
    .requestDevice({
      optionalServices: [DARTSLIVE_HOME_BLUETOOTH_UUID.SERVICE_UUID],
      filters: [
        { services: [DARTSLIVE_HOME_BLUETOOTH_UUID.SERVICE_UUID] },
        { namePrefix: 'DARTSLIVE' },
      ],
    })
    .then(connectToDevice)
    .catch(error => console.log(`Argh! ${error}`));
}

/**
 * Bluetoothデバイスに接続する関数です。
 * GATTサーバーに接続し、必要なサービスとキャラクタリスティックを取得します。
 * @param {BluetoothDevice} device - 接続するBluetoothデバイス
 */
function connectToDevice(device: BluetoothDevice) {
  if (device.gatt === undefined) {
    throw new Error('Bluetooth Device is not connected.');
  }

  return device.gatt
    .connect()
    .then(server =>
      getBluetoothService(server, DARTSLIVE_HOME_BLUETOOTH_UUID.SERVICE_UUID),
    )
    .then(service =>
      getBluetoothCharacteristic(
        service,
        DARTSLIVE_HOME_BLUETOOTH_UUID.CHARACTERISTIC_UUID,
      ),
    )
    .then(characteristic => startNotifications(characteristic))
    .catch(error => console.log(`Argh! ${error}`));
}

/**
 * GATTサービスを取得する関数です。
 * @param {BluetoothRemoteGATTServer} server - 接続されたデバイスのGATTサーバー
 * @param {string} serviceUUID - 取得したいサービスのUUID
 * @returns {Promise<BluetoothRemoteGATTService>} 取得したサービス
 */
function getBluetoothService(
  server: BluetoothRemoteGATTServer,
  serviceUUID: string,
) {
  return server.getPrimaryService(serviceUUID);
}

/**
 * Bluetoothキャラクタリスティックを取得する関数です。
 * @param {BluetoothRemoteGATTService} service - 取得したいキャラクタリスティックが属するサービス
 * @param {string} characteristicUUID - 取得したいキャラクタリスティックのUUID
 * @returns {Promise<BluetoothRemoteGATTCharacteristic>} 取得したキャラクタリスティック
 */
function getBluetoothCharacteristic(
  service: BluetoothRemoteGATTService,
  characteristicUUID: string,
) {
  return service.getCharacteristic(characteristicUUID);
}

/**
 * Bluetoothキャラクタリスティックからの通知を開始する関数です。
 * @param {BluetoothRemoteGATTCharacteristic} characteristic - 通知を開始するキャラクタリスティック
 * @returns {Promise<void>} 通知開始の完了
 */
function startNotifications(characteristic: BluetoothRemoteGATTCharacteristic) {
  return characteristic.startNotifications().then(() => {
    characteristic.addEventListener(
      'characteristicvaluechanged',
      handleCharacteristicValueChanged,
    );
  });
}

/**
 * Bluetoothキャラクタリスティックの値が変更された際に実行されるイベントハンドラです。
 * @param {Event} event - キャラクタリスティック値変更イベント
 */
function handleCharacteristicValueChanged(
  event: Event,
): (typeof DARTS_POSITION_FORMAT)[number] | undefined {
  const characteristic = event.target as BluetoothRemoteGATTCharacteristic;
  const value = characteristic.value;

  if (!value) {
    return;
  }

  const data = new Uint8Array(value.buffer);

  return DARTS_POSITION_FORMAT[data[2]];
}
