import React from 'react';
import '../basic/BasicInput.css';
import { GenericInputProps } from '../generic/GenericInput';

export default function CheckboxInput<T extends { [key: string]: any }>({
  instance,
  propertyName,
  isInputEnabled,
  serviceFunctionType,
}: GenericInputProps<T>) {
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    instance[propertyName] = event.currentTarget.checked as any;
  }

  return (
    <React.Fragment>
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <input
        type="checkbox"
        defaultChecked={serviceFunctionType === 'update' ? instance[propertyName] : undefined}
        disabled={isInputEnabled === undefined ? undefined : !isInputEnabled}
        onChange={onChange}
      />
    </React.Fragment>
  );
}
