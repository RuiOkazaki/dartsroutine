import { DARTSLIVE_HOME_BLUETOOTH_UUID } from '@/entitie/dartsboard/constants/bluetooth-uuid';

interface ScoreFormat {
  [key: number]: string;
}

/**
 * Dartのスコアフォーマットを管理するオブジェクトです。
 * 各数字に対応するスコアの文字列（例：シングル、ダブル、トリプル、ブル）がマッピングされています。
 */
const SCORE_FORMAT: ScoreFormat = {
  1: 'S1_I',
  2: 'S2_I',
  3: 'S3_I',
  4: 'S4_I',
  5: 'S5_I',
  6: 'S6_I',
  7: 'S7_I',
  8: 'S8_I',
  9: 'S9_I',
  10: 'S10_I',
  11: 'S11_I',
  12: 'S12_I',
  13: 'S13_I',
  14: 'S14_I',
  15: 'S15_I',
  16: 'S16_I',
  17: 'S17_I',
  18: 'S18_I',
  19: 'S19_I',
  20: 'S20_I',
  21: 'S1_O',
  22: 'S2_O',
  23: 'S3_O',
  24: 'S4_O',
  25: 'S5_O',
  26: 'S6_O',
  27: 'S7_O',
  28: 'S8_O',
  29: 'S9_O',
  30: 'S10_O',
  31: 'S11_O',
  32: 'S12_O',
  33: 'S13_O',
  34: 'S14_O',
  35: 'S15_O',
  36: 'S16_O',
  37: 'S17_O',
  38: 'S18_O',
  39: 'S19_O',
  40: 'S20_O',
  41: 'D1',
  42: 'D2',
  43: 'D3',
  44: 'D4',
  45: 'D5',
  46: 'D6',
  47: 'D7',
  48: 'D8',
  49: 'D9',
  50: 'D10',
  51: 'D11',
  52: 'D12',
  53: 'D13',
  54: 'D14',
  55: 'D15',
  56: 'D16',
  57: 'D17',
  58: 'D18',
  59: 'D19',
  60: 'D20',
  61: 'T1',
  62: 'T2',
  63: 'T3',
  64: 'T4',
  65: 'T5',
  66: 'T6',
  67: 'T7',
  68: 'T8',
  69: 'T9',
  70: 'T10',
  71: 'T11',
  72: 'T12',
  73: 'T13',
  74: 'T14',
  75: 'T15',
  76: 'T16',
  77: 'T17',
  78: 'T18',
  79: 'T19',
  80: 'T20',
  81: 'BULL',
  82: 'D-BULL',
  84: 'CHANGE',
};

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
  console.log('Requesting Bluetooth Device...');
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
  console.log(`Found ${device.name}`);
  console.log('Connecting to GATT Server...');

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
  console.log('Getting Service...');
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
  console.log('Getting Characteristic...');
  return service.getCharacteristic(characteristicUUID);
}

/**
 * Bluetoothキャラクタリスティックからの通知を開始する関数です。
 * @param {BluetoothRemoteGATTCharacteristic} characteristic - 通知を開始するキャラクタリスティック
 * @returns {Promise<void>} 通知開始の完了
 */
function startNotifications(characteristic: BluetoothRemoteGATTCharacteristic) {
  console.log('Starting Notifications...');
  return characteristic.startNotifications().then(() => {
    characteristic.addEventListener(
      'characteristicvaluechanged',
      handleCharacteristicValueChanged,
    );
    console.log('Notifications have been started.');
  });
}

/**
 * Bluetoothキャラクタリスティックの値が変更された際に実行されるイベントハンドラです。
 * @param {Event} event - キャラクタリスティック値変更イベント
 */
function handleCharacteristicValueChanged(
  event: Event,
): (typeof SCORE_FORMAT)[number] | undefined {
  const characteristic = event.target as BluetoothRemoteGATTCharacteristic;
  const value = characteristic.value;

  if (!value) {
    return;
  }

  const data = new Uint8Array(value.buffer);
  console.log(SCORE_FORMAT[data[2]]);

  return SCORE_FORMAT[data[2]];
}
