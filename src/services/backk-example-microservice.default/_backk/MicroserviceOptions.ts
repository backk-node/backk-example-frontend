export default class MicroserviceOptions {
  static accessTokenStorageEncryptionKey = '';
  static fqdn = '';

  static setAccessTokenStorageEncryptionKey(encryptionKey: string): void {
    MicroserviceOptions.accessTokenStorageEncryptionKey = encryptionKey;
  }

  static setFqdn(fqdn: string): void {
    MicroserviceOptions.fqdn = fqdn;
  }
}
