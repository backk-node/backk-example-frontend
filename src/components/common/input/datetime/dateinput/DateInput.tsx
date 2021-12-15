import React from 'react';
import BasicInput, { defaultTransformInputValueToPropertyValue } from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

function transformInputValueToPropertyValue(
  inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
) {
  return dayjs(defaultTransformInputValueToPropertyValue(inputEventOrRef), 'YYYY-MM-DD').toDate();
}

export default function DateInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { instance, propertyName } = props;
  const propertyValue = instance[propertyName];
  const defaultValue = propertyValue ? dayjs(propertyValue).format('YYYY-MM-DD') : undefined;
  const basicInputProps = { ...props, transformInputValueToPropertyValue, defaultValue };
  return <BasicInput inputType="date" {...basicInputProps} />;
}
