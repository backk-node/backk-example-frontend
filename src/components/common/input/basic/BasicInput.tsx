import React, { useEffect, useRef, useState } from 'react';
import './BasicInput.css';
import {
  getInputValidationProps,
  getValidationMessage,
  getValidationMessageHtmlClassNames,
  InputType,
  PossibleString,
  validateServiceFunctionArgumentProperty,
} from 'backk-frontend-utils';
import { GenericBasicInputProps, PropertyValue } from './GenericBasicInput';

export interface BasicInputProps<T extends { [key: string]: any }> extends GenericBasicInputProps<T> {
  inputType: InputType;
  isDialogInputType?: boolean;
  shouldShowValidationMessage?: boolean;
  transformInputValueToPropertyValue?: (
    inputEventOrRef: React.MutableRefObject<HTMLInputElement | null> | React.FocusEvent<HTMLInputElement>
  ) => Promise<PropertyValue> | PropertyValue;
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
  transformPropertyValue = (propertyValue) => propertyValue,
  forceImmediateValidationId,
  inputType,
  defaultValue,
  isDialogInputType = false,
  shouldShowValidationMessage = true,
  shouldDisplayLabel = true,
  children,
  InputTypeToInputComponentMap,
}: BasicInputProps<T>) {
  const inputRef = useRef(null as HTMLInputElement | null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(undefined as PossibleString);
  const [lastDoneImmediateValidationId, setLastDoneImmediateValidationId] = useState(0);

  useEffect(() => {
    async function forcePropertyValueValidation() {
      if (lastDoneImmediateValidationId !== forceImmediateValidationId && inputRef) {
        setLastDoneImmediateValidationId(forceImmediateValidationId);
        const propertyValue = transformPropertyValue(await transformInputValueToPropertyValue(inputRef));
        await validatePropertyValue(propertyValue);
      }
    }

    // noinspection JSIgnoredPromiseFromCall
    forcePropertyValueValidation();
  });

  useEffect(() => {
    if (
      !Array.isArray(instance[propertyName]) &&
      defaultValue !== undefined &&
      instance[propertyName] !== defaultValue
    ) {
      instance[propertyName] = defaultValue;
    }
  }, [defaultValue, instance, propertyName]);

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
    let propertyValue = transformPropertyValue(await transformInputValueToPropertyValue(event));
    if (propertyValue === '' || propertyValue === undefined) {
      setValidationErrorMessage(undefined);
    } else {
      await validatePropertyValue(propertyValue);
    }
    instance[propertyName] = propertyValue as any;
  }

  let validationMessage;
  if (shouldShowValidationMessage) {
    validationMessage = (
      <label className={getValidationMessageHtmlClassNames(validationErrorMessage)}>
        {getValidationMessage(validationErrorMessage)}
      </label>
    );
  }

  const inputProps = {
    ...getInputValidationProps(Class, propertyName),
    ref: inputRef,
    type: inputType,
    defaultValue:
      inputType === 'file' || propertyName === 'version' ? undefined : defaultValue ?? instance[propertyName],
    value: propertyName === 'version' ? defaultValue : undefined,
    readOnly: propertyName === 'version',
    onBlur: isDialogInputType ? undefined : validateAndUpdatePropertyValue,
    onChange: isDialogInputType ? validateAndUpdatePropertyValue : undefined,
  };

  let inputComponent = <input {...inputProps} />;
  if (InputTypeToInputComponentMap?.[inputType]) {
    const InputComponent = InputTypeToInputComponentMap[inputType]!;
    inputComponent = <InputComponent {...inputProps} />;
  }

  const input = (
    <React.Fragment>
      <label>{shouldDisplayLabel ? propertyName[0].toUpperCase() + propertyName.slice(1) : ''}</label>
      <span className="inputAndChildren">
        {inputComponent}
        {children}
      </span>
      {validationMessage}
    </React.Fragment>
  );

  return children ? input : <div className="row">{input}</div>;
}
