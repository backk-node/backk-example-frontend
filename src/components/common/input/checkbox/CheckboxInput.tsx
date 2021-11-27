import React from 'react';
import '../basic/BasicInput.css';
import { GenericInputProps } from '../generic/GenericInput';

export default function CheckboxInput<T extends Record<string, any>>({
  instance,
  propertyName,
}: GenericInputProps<T>) {
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    instance[propertyName] = event.currentTarget.checked as any;
  }

  return (
    <div className="row">
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <input type="checkbox" defaultChecked={instance[propertyName]} onChange={onChange} />
    </div>
  );
}
