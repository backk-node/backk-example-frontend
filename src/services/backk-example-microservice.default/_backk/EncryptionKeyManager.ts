export default class EncryptionKeyManager {
  static accessTokenStorageEncryptionKey: string;
  static setAccessTokenStorageEncryptionKey(encryptionKey: string): void {
    EncryptionKeyManager.accessTokenStorageEncryptionKey = encryptionKey;
  }
}
