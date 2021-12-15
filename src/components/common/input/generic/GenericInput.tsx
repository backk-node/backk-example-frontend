import React, { ComponentType } from 'react';
import './GenericInput.css';
import { getInputType, InputType, ServiceFunctionType } from 'backk-frontend-utils';
import CheckboxInput from '../checkbox/CheckboxInput';
import GenericSelectInput from '../select/GenericSelectInput';
import GenericBasicInput from '../basic/GenericBasicInput';

export interface GenericInputProps<T extends Record<string, any>> {
  instance: T;
  Class: new () => T;
  propertyName: keyof T & string;
  serviceFunctionType: ServiceFunctionType;
  forceImmediateValidationId: number;
  defaultValue?: any;
  InputTypeToInputComponentMap?: Partial<Record<InputType, ComponentType<any>>>;
}

export default function GenericInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { Class, propertyName } = props;
  const inputType = getInputType(Class, propertyName);

  switch (inputType) {
    case 'select':
      return <GenericSelectInput {...props} />;
    case 'checkbox':
      return <CheckboxInput {...props} />;
    default:
      return <GenericBasicInput {...props} />;
  }
}
