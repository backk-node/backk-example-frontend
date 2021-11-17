import React from 'react';
import './Input.css';
import { GenericInputProps } from '../generic/GenericInput';
import SelectInput from './SelectInput';

function transformInputValueToPropertyValue(value: any): any {
  const numericValue = Number(value[0]);
  return isNaN(numericValue) ? value : value.map((val: any) => Number(val));
}

export default function MultipleSelectInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const selectInputProps = { ...props, transformInputValueToPropertyValue };
  return <SelectInput multiple {...selectInputProps} />;
}
