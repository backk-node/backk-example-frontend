import React from 'react';
import TimeInput from '../timeinput/TimeInput';
import DateTimeInput from '../datetimeinput/DateTimeInput';
import DateInput from '../dateinput/DateInput';
import MonthInput from '../monthinput/MonthInput';
import { GenericBasicInputProps } from '../../basic/GenericBasicInput';

export default function GenericDateTimeInput<T extends { [key: string]: any }>({
  type,
  ...genericInputProps
}: GenericBasicInputProps<T>) {
  switch (type) {
    case 'time':
      return <TimeInput {...genericInputProps} />;
    case 'datetime-local':
      return <DateTimeInput {...genericInputProps} />;
    case 'date':
      return <DateInput {...genericInputProps} />;
    case 'month':
      return <MonthInput {...genericInputProps} />;
    default:
      return null;
  }
}
