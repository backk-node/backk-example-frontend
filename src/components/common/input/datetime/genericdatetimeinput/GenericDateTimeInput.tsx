import React from 'react';
import TimeInput from '../timeinput/TimeInput';
import DateTimeInput from '../datetimeinput/DateTimeInput';
import DateInput from '../dateinput/DateInput';
import MonthInput from '../monthinput/MonthInput';
import { GenericBasicInputProps } from '../../basic/GenericBasicInput';

interface GenericDateTimeInputProps<T extends { [key: string]: any }> extends GenericBasicInputProps<T> {
  dateTimeInputType: 'time' | 'date' | 'datetime-local' | 'month';
}

export default function GenericDateTimeInput<T extends { [key: string]: any }>({
  dateTimeInputType,
  ...genericInputProps
}: GenericDateTimeInputProps<T>) {
  switch (dateTimeInputType) {
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
