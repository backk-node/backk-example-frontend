import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './SuccessOrErrorIndicator.css';
import { PossibleBackkError } from 'backk-frontend-utils';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';
import getErrorMessage from '../../../utils/getErrorMessage';

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
      return <div className="errorMessage">{getErrorMessage(error)}</div>;
    }
  } else if (error === null) {
    const classes = classNames('successMessage', { hidden: !isSuccessMessageShown });
    return <div className={classes}>Operation succeeded!</div>;
  }

  return null;
}
