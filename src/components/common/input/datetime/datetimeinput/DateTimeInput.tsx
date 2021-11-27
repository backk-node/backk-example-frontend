import React from 'react';
import BasicInput, { defaultTransformInputValueToPropertyValue } from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';
import dayjs from 'dayjs';

function transformInputValueToPropertyValue(
  inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
) {
  return new Date(defaultTransformInputValueToPropertyValue(inputEventOrRef));
}

export default function DateTimeInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { instance, propertyName } = props;
  const propertyValue = instance[propertyName];
  const defaultValue = propertyValue
    ? dayjs(propertyValue).format('YYYY-MM-DD') + 'T' + dayjs(propertyValue).format('HH:mm')
    : undefined;
  const basicInputProps = { ...props, transformInputValueToPropertyValue, defaultValue };
  return <BasicInput type="datetime-local" {...basicInputProps} />;
}
