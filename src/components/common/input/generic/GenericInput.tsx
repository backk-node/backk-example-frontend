import React from 'react';
import './GenericInput.css';
import { getInputType, ServiceFunctionType } from 'backk-frontend-utils';
import FileInput from '../file/FileInput';
import BasicInput from '../basic/BasicInput';
import CheckboxInput from '../checkbox/CheckboxInput';
import NumberInput from '../number/NumberInput';
import GenericDateTimeInput from '../datetime/genericdatetimeinput/GenericDateTimeInput';
import GenericSelectInput from '../select/GenericSelectInput';
import ColorInput from '../color/ColorInput';

export interface GenericInputProps<T extends { [key: string]: any }> {
  instance: T;
  Class: new () => T;
  propertyName: keyof T & string;
  serviceFunctionType: ServiceFunctionType;
  forceImmediateValidationId: number;
  isInputEnabled?: boolean;
}

export default function GenericInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { Class, isInputEnabled, propertyName } = props;
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
      input = <BasicInput type={inputType} {...props} />;
  }

  return isInputEnabled ? <span>{input}</span> : <div className="row">{input}</div>;
}
