import React from 'react';
import './Input.css';
import BasicInput from '../basicinput/BasicInput';
import { PossibleString, validateServiceFunctionArgumentProperty } from 'backk-frontend-utils';
import { ServiceFunctionType } from 'backk-frontend-utils/lib/callRemoteService';
import { GenericInputProps } from '../genericinput/GenericInput';

async function validateProperty(
  Class: new () => any,
  propertyName: any,
  propertyValue: any,
  serviceFunctionType: ServiceFunctionType,
  validationErrorMessage: PossibleString,
  setValidationErrorMessage: React.Dispatch<any>
): Promise<void> {
  const fileReader = new FileReader();

  fileReader.onload = async function () {
    const possibleValidationErrorMessage = await validateServiceFunctionArgumentProperty(
      Class,
      propertyName,
      fileReader.result as any,
      serviceFunctionType
    );

    if (possibleValidationErrorMessage !== validationErrorMessage) {
      setValidationErrorMessage(possibleValidationErrorMessage);
    }
  };

  try {
    fileReader.readAsDataURL(propertyValue);
  } catch {
    const possibleValidationErrorMessage = await validateServiceFunctionArgumentProperty(
      Class,
      propertyName,
      '' as any,
      serviceFunctionType
    );

    if (possibleValidationErrorMessage !== validationErrorMessage) {
      setValidationErrorMessage(possibleValidationErrorMessage);
    }
  }
}

export default function FileInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const propsWithCustomPropertyValidator = { ...props, validateProperty };
  return <BasicInput type="file" {...propsWithCustomPropertyValidator} />;
}
