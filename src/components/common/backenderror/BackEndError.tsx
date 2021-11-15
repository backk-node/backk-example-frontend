import React from 'react';
import './BackEndError.css';
import { PossibleBackkError } from 'backk-frontend-utils';

export type Props = {
  error: PossibleBackkError;
};

export default function BackEndError({ error }: Props) {
  if (error?.statusCode) {
    const errorCode = error?.errorCode ? ` ${error.errorCode} ` : ' ';
    return <div className="errorMessage">{`${error.statusCode}${errorCode}${error.message}`}</div>;
  }
  return null;
}
