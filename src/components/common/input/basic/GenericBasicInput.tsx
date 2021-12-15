import React from 'react';
import { getInputType, isBuiltInTypeArrayProperty, IsOptionalProperty } from 'backk-frontend-utils';
import BasicInput from './BasicInput';
import OptionalBasicInput from './OptionalBasicInput';
import BasicInputArray from './BasicInputArray';
import GenericDateTimeInput from '../datetime/genericdatetimeinput/GenericDateTimeInput';
import FileInput from '../file/FileInput';
import NumberInput from '../number/NumberInput';
import ColorInput from '../color/ColorInput';
import { GenericInputProps } from '../generic/GenericInput';

export type PropertyValue = Promise<string> | string | number | Date | Array<PropertyValue>;

export interface GenericBasicInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  transformPropertyValue?: (propertyValue: PropertyValue) => PropertyValue;
  genericType?: string;
  defaultValue?: any;
  shouldDisplayLabel?: boolean;
  children?: any;
}

export default function GenericBasicInput<T extends { [key: string]: any }>(
  props: GenericBasicInputProps<T>
) {
  const { Class, propertyName, genericType } = props;

  if (IsOptionalProperty(Class, propertyName) && !genericType) {
    return <OptionalBasicInput {...props} />;
  } else if (isBuiltInTypeArrayProperty(Class, propertyName) && !genericType) {
    return <BasicInputArray {...props} />;
  }

  const inputType = getInputType(Class, propertyName);

  switch (inputType) {
    case 'time':
    case 'datetime-local':
    case 'date':
    case 'month':
      return <GenericDateTimeInput dateTimeInputType={inputType} {...props} />;
    case 'file':
      return <FileInput {...props} />;
    case 'number':
      return <NumberInput {...props} />;
    case 'color':
      return <ColorInput {...props} />;
    default:
      return <BasicInput inputType="text" {...props} />;
  }
}
