import React, { useRef, useState } from 'react';
import './Input.css';
import {
  getInputProps,
  getValidationMessage,
  getValidationMessageClassNames,
  isBuiltIntTypeArrayProperty,
  PossibleString,
  validateServiceFunctionArgumentProperty,
} from 'backk-frontend-utils';
import { ServiceFunctionType } from 'backk-frontend-utils/lib/callRemoteService';
import FileInput from '../fileinput/FileInput';
import SelectInput from '../SelectInput/SelectInput';

export type Props<T extends { [key: string]: any }> = {
  Class: new () => T;
  propertyName: keyof T & string;
  serviceFunctionType: ServiceFunctionType;
  updateProperty: (propertyName: string, propertyValue: any) => void;
  customValidateProperty?: <T>(
    Class: new () => T,
    propertyName: keyof T,
    propertyValue: any,
    serviceFunctionType: ServiceFunctionType,
    validationErrorMessage: PossibleString,
    setValidationErrorMessage: React.Dispatch<any>
  ) => Promise<void>;
  forceImmediateValidationId: number | null;
};

export default function Input<T extends { [key: string]: any }>({
  Class,
  propertyName,
  serviceFunctionType,
  updateProperty,
  customValidateProperty,
  forceImmediateValidationId,
}: Props<T>) {
  const inputRef = useRef(null as HTMLInputElement | null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(undefined as PossibleString);
  const [doneForceImmediateValidationId, setDoneForceImmediateValidationId] = useState(-1);

  const validateProperty = async <T,>(
    Class: new () => T,
    propertyName: keyof T,
    propertyValue: any,
    serviceFunctionType: ServiceFunctionType
  ) => {
    if (customValidateProperty) {
      customValidateProperty(
        Class,
        propertyName,
        propertyValue,
        serviceFunctionType,
        validationErrorMessage,
        setValidationErrorMessage
      );
      return;
    }

    const possibleValidationErrorMessage = await validateServiceFunctionArgumentProperty(
      Class,
      propertyName,
      propertyValue,
      serviceFunctionType
    );

    if (possibleValidationErrorMessage !== validationErrorMessage) {
      setValidationErrorMessage(possibleValidationErrorMessage);
    }
  };

  const onBlur = async (event?: React.FocusEvent<HTMLInputElement>) => {
    const propertyValue = event?.currentTarget.value;
    if (propertyValue !== '') {
      validateProperty(Class, propertyName, propertyValue, serviceFunctionType);
    }
    const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);
    updateProperty(propertyName, isArray ? [propertyValue] : propertyValue);
  };

  if (
    forceImmediateValidationId !== null &&
    doneForceImmediateValidationId < forceImmediateValidationId &&
    inputRef?.current
  ) {
    setDoneForceImmediateValidationId(forceImmediateValidationId);
    validateProperty(Class, propertyName, inputRef.current.value, serviceFunctionType);
  }

  const inputProps = getInputProps(Class, propertyName);

  let input;
  if (inputProps.type === 'select') {
    input = <SelectInput {...inputProps} />;
  } else if (inputProps.type === 'file' && !customValidateProperty) {
    input = <FileInput {...inputProps} />;
  } else {
    input = <input ref={inputRef} {...inputProps} onBlur={onBlur} />;
  }

  return (
    <div className="row">
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      {input}
      <label className={getValidationMessageClassNames(validationErrorMessage)}>
        {getValidationMessage(validationErrorMessage)}
      </label>
    </div>
  );
}
