import React from 'react';
import './SelectInput.css';
import { getSelectInputPossibleValues } from 'backk-frontend-utils';
import { GenericInputProps } from '../generic/GenericInput';
import isOptionalProperty from 'backk-frontend-utils/lib/utils/isOptionalProperty';

export interface SelectInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  multiple?: boolean;
  transformInputValueToPropertyValue?: (value: string) => any;
}

function defaultTransformInputValueToPropertyValue(value: string): any {
  const numericValue = Number(value);
  return isNaN(numericValue) ? value : numericValue;
}

export default function SelectInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  serviceFunctionType,
  transformInputValueToPropertyValue = defaultTransformInputValueToPropertyValue,
  multiple = false,
}: SelectInputProps<T>) {
  const isOptional = isOptionalProperty(Class, propertyName);

  async function onChange(event: React.FormEvent<HTMLSelectElement>) {
    let propertyValue = transformInputValueToPropertyValue(event.currentTarget.value);
    if (event.currentTarget.value === 'None') {
      propertyValue = undefined; // NOSONAR
    }
    instance[propertyName] = propertyValue;
  }

  const selectInputValues = getSelectInputPossibleValues(Class, propertyName);
  const options = selectInputValues.map((selectInputValue: any) => (
    <option key={selectInputValue}>{selectInputValue}</option>
  ));

  if (isOptional) {
    options.unshift(<option key="None">None</option>);
  }

  return (
    <React.Fragment>
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <select
        multiple={multiple}
        defaultValue={serviceFunctionType === 'update' ? instance[propertyName] : selectInputValues[0]}
        onChange={onChange}
      >
        {options}
      </select>
    </React.Fragment>
  );
}
