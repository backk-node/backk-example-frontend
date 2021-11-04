import AES from 'crypto-js/aes';
import jwtStorageEncryptionKey from './jwtStorageEncryptionKey';

export default function storeJwtToSessionStorage(jwt: string): void {
  const cipherParams = AES.encrypt(jwt, jwtStorageEncryptionKey);
  const encryptedJwt = cipherParams.toString();
  sessionStorage.setItem('jwt', encryptedJwt);
}
