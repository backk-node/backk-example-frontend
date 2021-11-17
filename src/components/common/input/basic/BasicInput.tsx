import React, { useRef, useState } from 'react';
import './BasicInput.css';
import {
  getInputValidationProps,
  getValidationMessage,
  getValidationMessageClassNames,
  isBuiltIntTypeArrayProperty,
  PossibleString,
  validateServiceFunctionArgumentProperty,
} from 'backk-frontend-utils';
import { ServiceFunctionType } from 'backk-frontend-utils/lib/callRemoteService';
import { GenericInputProps } from '../generic/GenericInput';

export interface BasicInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  type: string;
  validateProperty?: <T>(
    Class: new () => T,
    propertyName: keyof T,
    propertyValue: any,
    serviceFunctionType: ServiceFunctionType,
    validationErrorMessage: PossibleString,
    setValidationErrorMessage: React.Dispatch<any>
  ) => Promise<void>;
  transformInputValueToPropertyValue?: (inputValue: any) => Promise<any>;
}

export default function BasicInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  serviceFunctionType,
  transformInputValueToPropertyValue = (inputValue) => Promise.resolve(inputValue),
  forceImmediateValidationId,
  type,
}: BasicInputProps<T>) {
  const inputRef = useRef(null as HTMLInputElement | null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(undefined as PossibleString);
  const [lastDoneImmediateValidationId, setLastDoneImmediateValidationId] = useState(-1);

  async function validatePropertyValue(propertyValue: any): Promise<void> {
    const possibleValidationErrorMessage = await validateServiceFunctionArgumentProperty(
      Class,
      propertyName,
      propertyValue,
      serviceFunctionType
    );

    if (possibleValidationErrorMessage !== validationErrorMessage) {
      setValidationErrorMessage(possibleValidationErrorMessage);
    }
  }

  async function validateAndUpdatePropertyValue(event?: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event?.currentTarget.files?.[0] ?? event?.currentTarget.value;
    const propertyValue = await transformInputValueToPropertyValue(inputValue);
    if (propertyValue !== '') {
      await validatePropertyValue(propertyValue);
    }
    const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);
    instance[propertyName] = isArray ? [propertyValue] : propertyValue;
  }

  if (
    forceImmediateValidationId !== null &&
    lastDoneImmediateValidationId !== forceImmediateValidationId &&
    inputRef?.current
  ) {
    setLastDoneImmediateValidationId(forceImmediateValidationId);
    // noinspection JSIgnoredPromiseFromCall
    validatePropertyValue(transformInputValueToPropertyValue(inputRef.current.value));
  }

  return (
    <React.Fragment>
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <input
        ref={inputRef}
        type={type}
        {...getInputValidationProps(Class, propertyName)}
        onBlur={validateAndUpdatePropertyValue}
      />
      <label className={getValidationMessageClassNames(validationErrorMessage)}>
        {getValidationMessage(validationErrorMessage)}
      </label>
    </React.Fragment>
  );
}
