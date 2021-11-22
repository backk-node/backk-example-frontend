import React from 'react';
import { GenericInputProps } from '../generic/GenericInput';
import GenericBasicInput from '../basic/GenericBasicInput';

export default function ColorInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const { instance, propertyName, serviceFunctionType } = props;

  return (
    <GenericBasicInput
      type="color"
      isDialogInputType={true}
      defaultValue={serviceFunctionType === 'update' ? instance[propertyName] : '#000000'}
      shouldShowValidationMessage={false}
      {...props}
    />
  );
}
