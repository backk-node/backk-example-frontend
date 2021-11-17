import React from 'react';
import './Input.css';
import { getSelectInputPossibleValues } from 'backk-frontend-utils';
import { GenericInputProps } from '../generic/GenericInput';

export interface SelectInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  multiple?: boolean;
  transformInputValueToPropertyValue?: (value: any) => any;
}

function defaultTransformInputValueToPropertyValue(value: any): any {
  const numericValue = Number(value);
  return isNaN(numericValue) ? value : numericValue;
}

export default function SelectInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  transformInputValueToPropertyValue = defaultTransformInputValueToPropertyValue,
  multiple = false,
}: SelectInputProps<T>) {
  async function onChange(event: React.FormEvent<HTMLSelectElement>) {
    instance[propertyName] = transformInputValueToPropertyValue(event.currentTarget.value);
  }

  const selectInputValues = getSelectInputPossibleValues(Class, propertyName);
  const options = selectInputValues.map((selectInputValue: any, index: number) => (
    <option selected={index === 0}>{selectInputValue}</option>
  ));

  return (
    <React.Fragment>
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <select multiple={multiple} onChange={onChange}>
        {options}
      </select>
    </React.Fragment>
  );
}
