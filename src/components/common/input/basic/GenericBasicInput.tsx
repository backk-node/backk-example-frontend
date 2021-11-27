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

type PropertyValue = Promise<string> | string | number | Date | Array<PropertyValue>;

export interface GenericBasicInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  type?: string;
  transformInputValueToPropertyValue?: (
    inputEventOrRef: React.MutableRefObject<HTMLInputElement | null> | React.FocusEvent<HTMLInputElement>
  ) => Promise<PropertyValue> | PropertyValue;
  defaultValue?: any;
  associatedButtonText?: string;
  onAssociatedButtonClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  shouldDisplayLabel?: boolean;
}

export default function GenericBasicInput<T extends { [key: string]: any }>(
  props: GenericBasicInputProps<T>
) {
  const { Class, propertyName, type } = props;

  if (IsOptionalProperty(Class, propertyName) && !type) {
    return <OptionalBasicInput {...props} />;
  } else if (isBuiltInTypeArrayProperty(Class, propertyName) && !type) {
    return <BasicInputArray {...props} />;
  }

  const inputType = getInputType(Class, propertyName);

  switch (inputType) {
    case 'time':
    case 'datetime-local':
    case 'date':
    case 'month':
      return <GenericDateTimeInput type={inputType} {...props} />;
    case 'file':
      return <FileInput {...props} />;
    case 'number':
      return <NumberInput {...props} />;
    case 'color':
      return <ColorInput {...props} />;
    default:
      return <BasicInput {...props} />;
  }
}
