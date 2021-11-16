import React from 'react';
import BasicInput from '../basicinput/BasicInput';
import { GenericInputProps } from '../genericinput/GenericInput';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

function transformPropertyValue(propertyValue: any) {
  return dayjs(propertyValue, 'YYYY-MM').toDate();
}

export default function MonthInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const propsWithCustomPropertyValueTransformer = { ...props, transformPropertyValue };
  return <BasicInput type="month" {...propsWithCustomPropertyValueTransformer} />;
}
