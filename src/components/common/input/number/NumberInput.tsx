import React from 'react';
import { GenericInputProps } from '../generic/GenericInput';
import GenericBasicInput from '../basic/GenericBasicInput';

function transformInputValueToPropertyValue(inputValue: any) {
  const numericValue = parseFloat(inputValue);
  return isNaN(numericValue) ? inputValue : numericValue;
}

export default function NumberInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <GenericBasicInput type="number" {...basicInputProps} />;
}
