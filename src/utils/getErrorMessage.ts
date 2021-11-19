import { BackkError } from 'backk-frontend-utils';

export default function getErrorMessage(error: BackkError): string {
  return [
    error.statusCode ? `Status ${error.statusCode},` : '',
    `${error.errorCode}:` ?? '',
    error.message,
  ].join(' ');
}
