import React from 'react';
import TimeInput from '../timeinput/TimeInput';
import DateTimeInput from '../datetimeinput/DateTimeInput';
import DateInput from '../dateinput/DateInput';
import MonthInput from '../monthinput/MonthInput';

import { GenericInputProps } from '../../generic/GenericInput';

export interface GenericDateTimeInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  type: 'date' | 'time' | 'datetime-local' | 'month';
}

export default function GenericDateTimeInput<T extends { [key: string]: any }>({
  type,
  ...genericInputProps
}: GenericDateTimeInputProps<T>) {
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
