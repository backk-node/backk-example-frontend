import AES from 'crypto-js/aes';
import accessTokenStorageEncryptionKey from './accessTokenStorageEncryptionKey';

export default function storeAccessTokenToSessionStorage(accessToken: string): void {
  const encryptedAccessToken = AES.encrypt(accessToken, accessTokenStorageEncryptionKey).toString();
  sessionStorage.setItem('accessToken', encryptedAccessToken);
}
