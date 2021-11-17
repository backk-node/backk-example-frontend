import React from 'react';
import BasicInput from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';

function transformInputValueToPropertyValue(propertyValue: any) {
  return Promise.resolve(new Date(propertyValue));
}

export default function DateTimeInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <BasicInput type="datetime-local" {...basicInputProps} />;
}
