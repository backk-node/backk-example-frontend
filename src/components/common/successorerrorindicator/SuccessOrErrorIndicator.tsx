import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './SuccessOrErrorIndicator.css';
import { PossibleBackkError } from 'backk-frontend-utils';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';

const SUCCESS_MESSAGE_TIMEOUT_IN_MS = 1500;

export type Props = {
  error: PossibleBackkError;
};

export default function SuccessOrErrorIndicator({ error }: Props) {
  const [isSuccessMessageShown, setIsSuccessMessageShown] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsSuccessMessageShown(false);
    }, SUCCESS_MESSAGE_TIMEOUT_IN_MS);
    return () => clearTimeout(timerId);
  });

  if (error) {
    if (!isLocalValidationError(error)) {
      const errorMessage = [
        error.statusCode ? `Status ${error.statusCode}:` : '',
        error.errorCode + ':' ?? '',
        error.message,
      ].join(' ');
      return <div className="errorMessage">{errorMessage}</div>;
    }
  } else if (error === null) {
    const classes = classNames('successMessage', { hidden: !isSuccessMessageShown });
    return <div className={classes}>Operation succeeded!</div>;
  }

  return null;
}
