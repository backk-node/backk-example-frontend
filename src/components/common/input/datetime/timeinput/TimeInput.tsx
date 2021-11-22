import React from 'react';
import { defaultTransformInputValueToPropertyValue } from '../../basic/BasicInput';
import { GenericInputProps } from '../../generic/GenericInput';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import GenericBasicInput from '../../basic/GenericBasicInput';

dayjs.extend(customParseFormat);

function transformInputValueToPropertyValue(
  inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
) {
  return dayjs(defaultTransformInputValueToPropertyValue(inputEventOrRef), 'HH:mm').toDate();
}

export default function TimeInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <GenericBasicInput type="time" {...basicInputProps} />;
}
