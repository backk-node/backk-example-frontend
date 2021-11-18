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
}

export default function BasicInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  serviceFunctionType,
  transformInputValueToPropertyValue = (inputValue) => inputValue as any,
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

  async function validateAndUpdatePropertyValue(event: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.files?.[0] ?? event.currentTarget.value;
    let propertyValue = await transformInputValueToPropertyValue(inputValue);
    const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);
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
      if (
        forceImmediateValidationId !== null &&
        lastDoneImmediateValidationId !== forceImmediateValidationId &&
        inputRef?.current
      ) {
        setLastDoneImmediateValidationId(forceImmediateValidationId);
        await validatePropertyValue(
          await transformInputValueToPropertyValue(inputRef.current.files?.[0] ?? inputRef.current.value)
        );
      }
    }

    // noinspection JSIgnoredPromiseFromCall
    forcePropertyValueValidation();
  });

  const isDialogInputType = type === 'file' || type === 'color';

  return (
    <React.Fragment>
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <input
        ref={inputRef}
        type={type}
        {...getInputValidationProps(Class, propertyName)}
        onBlur={isDialogInputType ? undefined : validateAndUpdatePropertyValue}
        onChange={isDialogInputType ? validateAndUpdatePropertyValue : undefined}
      />
      <label className={getValidationMessageClassNames(validationErrorMessage)}>
        {getValidationMessage(validationErrorMessage)}
      </label>
    </React.Fragment>
  );
}
