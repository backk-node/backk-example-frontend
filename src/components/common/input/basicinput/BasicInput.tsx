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
import { GenericInputProps } from '../genericinput/GenericInput';

async function defaultValidateProperty(
  Class: new () => any,
  propertyName: any,
  propertyValue: any,
  serviceFunctionType: ServiceFunctionType,
  validationErrorMessage: PossibleString,
  setValidationErrorMessage: React.Dispatch<any>
): Promise<void> {
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

async function defaultTransformPropertyValue(propertyValue: any) {
  return propertyValue;
}

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
  transformPropertyValue?: (propertyValue: any) => any;
}

export default function BasicInput<T extends { [key: string]: any }>({
  Class,
  propertyName,
  serviceFunctionType,
  updateProperty,
  validateProperty = defaultValidateProperty,
  transformPropertyValue = defaultTransformPropertyValue,
  forceImmediateValidationId,
  type,
}: BasicInputProps<T>) {
  const inputRef = useRef(null as HTMLInputElement | null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(undefined as PossibleString);
  const [doneForceImmediateValidationId, setDoneForceImmediateValidationId] = useState(-1);

  async function onBlur(event?: React.FocusEvent<HTMLInputElement>) {
    const propertyValue = transformPropertyValue(event?.currentTarget.value);
    if (propertyValue !== '') {
      await validateProperty(
        Class,
        propertyName,
        propertyValue,
        serviceFunctionType,
        validationErrorMessage,
        setValidationErrorMessage
      );
    }
    const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);
    updateProperty(propertyName, isArray ? [propertyValue] : propertyValue);
  }

  if (
    forceImmediateValidationId !== null &&
    doneForceImmediateValidationId < forceImmediateValidationId &&
    inputRef?.current
  ) {
    setDoneForceImmediateValidationId(forceImmediateValidationId);
    // noinspection JSIgnoredPromiseFromCall
    validateProperty(
      Class,
      propertyName,
      transformPropertyValue(inputRef.current.value),
      serviceFunctionType,
      validationErrorMessage,
      setValidationErrorMessage
    );
  }

  return (
    <div className="row">
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <input ref={inputRef} type={type} {...getInputValidationProps(Class, propertyName)} onBlur={onBlur} />
      <label className={getValidationMessageClassNames(validationErrorMessage)}>
        {getValidationMessage(validationErrorMessage)}
      </label>
    </div>
  );
}
