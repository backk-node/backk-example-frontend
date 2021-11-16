import React from 'react';
import './Input.css';
import { getSelectInputPossibleValues, isBuiltIntTypeArrayProperty } from 'backk-frontend-utils';
import { GenericInputProps } from '../genericinput/GenericInput';

export default function SelectInput<T extends { [key: string]: any }>({
  Class,
  propertyName,
  updateProperty,
}: GenericInputProps<T>) {
  async function onChange(event: React.FormEvent<HTMLSelectElement>) {
    const propertyValue = event.currentTarget.value;
    const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);
    updateProperty(propertyName, isArray ? [propertyValue] : propertyValue);
  }

  const selectInputValues = getSelectInputPossibleValues(Class, propertyName);
  const options = selectInputValues.map((selectInputValue: any, index: number) => (
    <option selected={index === 0}>{selectInputValue}</option>
  ));

  return (
    <div className="row">
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <select onChange={onChange}>{options}</select>
    </div>
  );
}
