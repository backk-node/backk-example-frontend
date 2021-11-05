import { sign } from 'jsonwebtoken';

export default function generateAccessToken(): string {
  const jwtPayload: any = {};
  jwtPayload.sub = 'fbdb4e4a-6e93-4b08-a1e7-0b7bd08520a6';
  jwtPayload.iss = 'http://localhost:8080/auth/realms/test';
  jwtPayload.realm_access = {
    roles: ['vitjaAdmin'],
  };

  return sign(jwtPayload, 'abcdef');
}
