import { sign } from 'jsonwebtoken';
import AES from 'crypto-js/aes';
import { jwtStorageEncryptionKey } from './jwtStorageEncryptionKey';

export default function generateAndStoreJwt() {
  const payload: any = {};
  payload.sub = 'fbdb4e4a-6e93-4b08-a1e7-0b7bd08520a6';
  payload.iss = 'http://localhost:8080/auth/realms/test';
  payload.realm_access = {
    roles: ['vitjaAdmin'],
  };

  const jwt = sign(payload, 'abcdef');
  const { ciphertext } = AES.encrypt(jwt, jwtStorageEncryptionKey);
  const encryptedJwt = ciphertext.toString();
  sessionStorage.setItem('jwt', encryptedJwt);
}
