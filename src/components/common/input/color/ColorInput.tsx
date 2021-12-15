import React from 'react';
import { GenericInputProps } from '../generic/GenericInput';
import BasicInput from '../basic/BasicInput';

export default function ColorInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { instance, propertyName } = props;

  return (
    <BasicInput
      inputType="color"
      isDialogInputType={true}
      defaultValue={instance[propertyName] || '#000000'}
      shouldShowValidationMessage={false}
      {...props}
    />
  );
}
