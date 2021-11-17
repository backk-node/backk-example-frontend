import React from 'react';
import { GenericInputProps } from '../generic/GenericInput';
import BasicInput from '../basic/BasicInput';

function transformInputValueToPropertyValue(inputValue: any) {
  return Promise.resolve(Number(inputValue));
}

export default function NumberInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const finalProps = { ...props, transformInputValueToPropertyValue };
  return <BasicInput type="number" {...finalProps} />;
}
