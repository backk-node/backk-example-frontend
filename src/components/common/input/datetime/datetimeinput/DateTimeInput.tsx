import React from 'react';
import { defaultTransformInputValueToPropertyValue } from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';
import GenericBasicInput from '../../basic/GenericBasicInput';

function transformInputValueToPropertyValue(
  inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
) {
  return new Date(defaultTransformInputValueToPropertyValue(inputEventOrRef));
}

export default function DateTimeInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <GenericBasicInput type="datetime-local" {...basicInputProps} />;
}
