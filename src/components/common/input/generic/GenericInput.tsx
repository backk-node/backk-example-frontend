import React from 'react';
import './GenericInput.css';
import { getInputType, isBuiltIntTypeArrayProperty, ServiceFunctionType } from 'backk-frontend-utils';
import FileInput from '../file/FileInput';
import CheckboxInput from '../checkbox/CheckboxInput';
import NumberInput from '../number/NumberInput';
import GenericDateTimeInput from '../datetime/genericdatetimeinput/GenericDateTimeInput';
import GenericSelectInput from '../select/GenericSelectInput';
import ColorInput from '../color/ColorInput';
import GenericBasicInput from '../basic/GenericBasicInput';

export interface GenericInputProps<T extends { [key: string]: any }> {
  instance: T;
  Class: new () => T;
  propertyName: keyof T & string;
  serviceFunctionType: ServiceFunctionType;
  forceImmediateValidationId: number;
}

export default function GenericInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { Class, propertyName } = props;
  const inputType = getInputType(Class, propertyName);

  let input;
  switch (inputType) {
    case 'select':
      input = <GenericSelectInput {...props} />;
      break;
    case 'time':
    case 'datetime-local':
    case 'date':
    case 'month':
      input = <GenericDateTimeInput type={inputType} {...props} />;
      break;
    case 'file':
      input = <FileInput {...props} />;
      break;
    case 'checkbox':
      input = <CheckboxInput {...props} />;
      break;
    case 'number':
      input = <NumberInput {...props} />;
      break;
    case 'color':
      input = <ColorInput {...props} />;
      break;
    default:
      input = <GenericBasicInput type={inputType} {...props} />;
  }

  return isBuiltIntTypeArrayProperty(Class, propertyName) ? input : <div className="row">{input}</div>;
}
