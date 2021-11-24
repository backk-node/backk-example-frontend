import React, { useEffect, useRef, useState } from 'react';
import './BasicInput.css';
import {
  getInputValidationProps,
  getValidationMessage,
  getValidationMessageClassNames,
  PossibleString,
  validateServiceFunctionArgumentProperty,
} from 'backk-frontend-utils';
import { GenericInputProps } from '../generic/GenericInput';

type PropertyValue = Promise<string> | string | number | Date | Array<PropertyValue>;

export interface BasicInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  type: string;
  transformInputValueToPropertyValue?: (
    inputEventOrRef: React.MutableRefObject<HTMLInputElement | null> | React.FocusEvent<HTMLInputElement>
  ) => Promise<PropertyValue> | PropertyValue;
  defaultValue?: any;
  isDialogInputType?: boolean;
  shouldShowValidationMessage?: boolean;
  associatedButtonText?: string;
  onAssociatedButtonClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  shouldDisplayLabel?: boolean;
}

export function defaultTransformInputValueToPropertyValue(
  inputEventOrRef: React.MutableRefObject<HTMLInputElement | null> | React.FocusEvent<HTMLInputElement>
) {
  return 'currentTarget' in inputEventOrRef
    ? inputEventOrRef.currentTarget.value
    : inputEventOrRef?.current?.value ?? '';
}

export default function BasicInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  serviceFunctionType,
  transformInputValueToPropertyValue = defaultTransformInputValueToPropertyValue,
  forceImmediateValidationId,
  type,
  defaultValue,
  isDialogInputType = false,
  shouldShowValidationMessage = true,
  shouldDisplayLabel = true,
  associatedButtonText,
  onAssociatedButtonClick,
}: BasicInputProps<T>) {
  const inputRef = useRef(null as HTMLInputElement | null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(undefined as PossibleString);
  const [lastDoneImmediateValidationId, setLastDoneImmediateValidationId] = useState(0);

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
    let propertyValue = await transformInputValueToPropertyValue(event);
    if (propertyValue === '' || propertyValue === undefined) {
      setValidationErrorMessage(undefined);
    } else {
      await validatePropertyValue(propertyValue);
    }
    instance[propertyName] = propertyValue as any;
  }

  useEffect(() => {
    async function forcePropertyValueValidation() {
      if (lastDoneImmediateValidationId !== forceImmediateValidationId && inputRef) {
        setLastDoneImmediateValidationId(forceImmediateValidationId);
        const propertyValue = await transformInputValueToPropertyValue(inputRef);
        if (serviceFunctionType !== 'update' || (serviceFunctionType === 'update' && propertyValue !== '')) {
          await validatePropertyValue(propertyValue);
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

  let associatedButton;
  if (associatedButtonText) {
    associatedButton = <button onClick={onAssociatedButtonClick}>{associatedButtonText}</button>;
  }

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
      <label>{shouldDisplayLabel ? propertyName[0].toUpperCase() + propertyName.slice(1) : ''}</label>
      <span className="inputAndAssociatedButton">
        <input
          ref={inputRef}
          type={type}
          defaultValue={defaultValue ?? serviceFunctionType === 'update' ? instance[propertyName] : undefined}
          {...getInputValidationProps(Class, propertyName)}
          onBlur={isDialogInputType ? undefined : validateAndUpdatePropertyValue}
          onChange={isDialogInputType ? validateAndUpdatePropertyValue : undefined}
        />
        {associatedButton}
      </span>
      {validationMessage}
    </React.Fragment>
  );
}
