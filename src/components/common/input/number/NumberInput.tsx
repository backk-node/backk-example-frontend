import React from 'react';
import { GenericInputProps } from '../generic/GenericInput';
import BasicInput from '../basic/BasicInput';

function transformInputValueToPropertyValue(inputValue: any) {
  const numericValue = parseFloat(inputValue);
  return isNaN(numericValue) ? inputValue : numericValue;
}

export default function NumberInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <BasicInput type="number" {...basicInputProps} />;
}
