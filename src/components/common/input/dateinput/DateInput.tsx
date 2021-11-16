import React from 'react';
import BasicInput from '../basicinput/BasicInput';
import { GenericInputProps } from '../genericinput/GenericInput';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

function transformPropertyValue(propertyValue: any) {
  return dayjs(propertyValue, 'YYYY-MM-DD').toDate();
}

export default function DateInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const propsWithCustomPropertyValueTransformer = { ...props, transformPropertyValue };
  return <BasicInput type="date" {...propsWithCustomPropertyValueTransformer} />;
}
