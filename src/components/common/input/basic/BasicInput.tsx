import React, { useEffect, useRef, useState } from 'react';
import './BasicInput.css';
import {
  getInputValidationProps,
  getValidationMessage,
  getValidationMessageClassNames,
  isBuiltIntTypeArrayProperty,
  PossibleString,
  validateServiceFunctionArgumentProperty,
} from 'backk-frontend-utils';
import { GenericInputProps } from '../generic/GenericInput';

export interface BasicInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  type: string;
  transformInputValueToPropertyValue?: (inputValue: string | File) => Promise<any> | any;
  defaultValue?: any;
  isDialogInputType?: boolean;
  shouldShowValidationMessage?: boolean;
}

export default function BasicInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  serviceFunctionType,
  transformInputValueToPropertyValue = (inputValue) => inputValue as any,
  forceImmediateValidationId,
  type,
  defaultValue,
  isInputEnabled,
  isDialogInputType = false,
  shouldShowValidationMessage = true,
}: BasicInputProps<T>) {
  const inputRef = useRef(null as HTMLInputElement | null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(undefined as PossibleString);
  const [lastDoneImmediateValidationId, setLastDoneImmediateValidationId] = useState(0);
  const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);

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

  async function validateAndUpdatePropertyValue(event: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.files?.[0] ?? event.currentTarget.value;
    let propertyValue = await transformInputValueToPropertyValue(inputValue);
    propertyValue = isArray ? [propertyValue] : propertyValue;
    if (propertyValue === '') {
      setValidationErrorMessage(undefined);
    } else {
      await validatePropertyValue(propertyValue);
    }
    instance[propertyName] = propertyValue;
  }

  useEffect(() => {
    async function forcePropertyValueValidation() {
      if (lastDoneImmediateValidationId !== forceImmediateValidationId && inputRef.current) {
        setLastDoneImmediateValidationId(forceImmediateValidationId);
        const inputValue = inputRef.current.files?.[0] ?? inputRef.current.value;
        if (serviceFunctionType !== 'update' || (serviceFunctionType === 'update' && inputValue !== '')) {
          const propertyValue = await transformInputValueToPropertyValue(inputValue);
          await validatePropertyValue(isArray ? [...(inputValue ? [propertyValue] : [])] : propertyValue);
        }
      }
    }

    // noinspection JSIgnoredPromiseFromCall
    forcePropertyValueValidation();
  });

  useEffect(() => {
    if (defaultValue !== undefined) {
      instance[propertyName] = defaultValue;
    }
  }, [defaultValue, instance, propertyName]);

  let validationMessage;
  if (shouldShowValidationMessage) {
    validationMessage = (
      <label className={getValidationMessageClassNames(validationErrorMessage)}>
        {getValidationMessage(validationErrorMessage)}
      </label>
    );
  }

  return (
    <React.Fragment>
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <input
        ref={inputRef}
        type={type}
        defaultValue={defaultValue ?? serviceFunctionType === 'update' ? instance[propertyName] : undefined}
        disabled={isInputEnabled === undefined ? undefined : !isInputEnabled}
        {...getInputValidationProps(Class, propertyName)}
        onBlur={isDialogInputType ? undefined : validateAndUpdatePropertyValue}
        onChange={isDialogInputType ? validateAndUpdatePropertyValue : undefined}
      />
      {validationMessage}
    </React.Fragment>
  );
}
