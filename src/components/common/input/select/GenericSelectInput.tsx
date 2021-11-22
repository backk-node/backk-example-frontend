import React from 'react';
import { isMultipleSelectInput } from 'backk-frontend-utils';
import MultipleSelectInput from './MultipleSelectInput';
import SelectInput from './SelectInput';
import { GenericInputProps } from '../generic/GenericInput';

export default function GenericSelectInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  if (isMultipleSelectInput(props.Class, props.propertyName)) {
    return <MultipleSelectInput {...props} />;
  }
  return <SelectInput {...props} />;
}
