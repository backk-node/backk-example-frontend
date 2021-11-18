import React from 'react';
import './BackEndError.css';
import { PossibleBackkError } from 'backk-frontend-utils';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';

export type Props = {
  error: PossibleBackkError;
};

export default function BackEndError({ error }: Props) {
  if (error && !isLocalValidationError(error)) {
    const errorMessage = [
      error.statusCode ? `Status ${error.statusCode}:` : '',
      error.errorCode + ':' ?? '',
      error.message,
    ].join(' ');
    return <div className="errorMessage">{errorMessage}</div>;
  }
  return null;
}
