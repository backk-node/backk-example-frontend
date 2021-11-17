import React from 'react';
import BasicInput from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

function transformInputValueToPropertyValue(propertyValue: any) {
  return Promise.resolve(dayjs(propertyValue, 'YYYY-MM').toDate());
}

export default function MonthInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <BasicInput type="month" {...basicInputProps} />;
}
