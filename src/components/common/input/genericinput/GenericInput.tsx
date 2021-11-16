import React from 'react';
import './GenericInput.css';
import { getInputType, ServiceFunctionType } from 'backk-frontend-utils';
import FileInput from '../fileinput/FileInput';
import SelectInput from '../selectInput/SelectInput';
import BasicInput from '../basicinput/BasicInput';
import DateInput from '../dateinput/DateInput';
import TimeInput from '../timeinput/TimeInput';
import DateTimeInput from '../datetimeinput/DateTimeInput';
import MonthInput from '../monthinput/MonthInput';

export interface GenericInputProps<T extends { [key: string]: any }> {
  Class: new () => T;
  propertyName: keyof T & string;
  serviceFunctionType: ServiceFunctionType;
  updateProperty: (propertyName: string, propertyValue: any) => void;
  forceImmediateValidationId: number | null;
}

export default function GenericInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const inputType = getInputType(props.Class, props.propertyName);

  let input;
  switch (inputType) {
    case 'select':
      input = <SelectInput {...props} />;
      break;
    case 'file':
      input = <FileInput {...props} />;
      break;
    case 'time':
      input = <TimeInput {...props} />;
      break;
    case 'datetime':
      input = <DateTimeInput {...props} />;
      break;
    case 'date':
      input = <DateInput {...props} />;
      break;
    case 'month':
      input = <MonthInput {...props} />;
      break;
    default:
      input = <BasicInput type={inputType} {...props} />;
  }

  return <div className="row">{input}</div>;
}
