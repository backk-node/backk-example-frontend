import React from 'react';
import BasicInput from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

function transformInputValueToPropertyValue(propertyValue: any) {
  return dayjs(propertyValue, 'HH:mm').toDate();
}

export default function TimeInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <BasicInput type="time" {...basicInputProps} />;
}
