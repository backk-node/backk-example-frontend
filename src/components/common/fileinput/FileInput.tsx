import React from 'react';
import './Input.css';
import Input, { Props } from '../input/Input';
import { PossibleString, validateServiceFunctionArgumentProperty } from 'backk-frontend-utils';
import { ServiceFunctionType } from 'backk-frontend-utils/lib/callRemoteService';

export default function FileInput<T extends { [key: string]: any }>(props: Props<T>) {
  const validateFileProperty = async (
    Class: new () => any,
    propertyName: any,
    propertyValue: any,
    serviceFunctionType: ServiceFunctionType,
    validationErrorMessage: PossibleString,
    setValidationErrorMessage: React.Dispatch<any>
  ) => {
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
  };

  const finalProps = { ...props, customValidateProperty: validateFileProperty };
  return <Input {...finalProps} />;
}
