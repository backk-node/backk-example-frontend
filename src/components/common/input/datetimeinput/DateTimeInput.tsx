import React from 'react';
import BasicInput from '../basicinput/BasicInput';
import { GenericInputProps } from '../genericinput/GenericInput';

function transformPropertyValue(propertyValue: any) {
  return new Date(propertyValue);
}

export default function DateTimeInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const propsWithCustomPropertyValueTransformer = { ...props, transformPropertyValue };
  return <BasicInput type="datetime-local" {...propsWithCustomPropertyValueTransformer} />;
}
