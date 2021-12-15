import React from 'react';
import './SelectInput.css';
import { getSelectInputPossibleValues } from 'backk-frontend-utils';
import { GenericInputProps } from '../generic/GenericInput';

export interface SelectInputProps<T extends { [key: string]: any }> extends GenericInputProps<T> {
  multiple?: boolean;
  transformInputValueToPropertyValue?: (value: string) => any;
}

function defaultTransformInputValueToPropertyValue(value: string): any {
  const numericValue = parseFloat(value);
  return isNaN(numericValue) ? value : numericValue;
}

export default function SelectInput<T extends { [key: string]: any }>({
  instance,
  Class,
  propertyName,
  transformInputValueToPropertyValue = defaultTransformInputValueToPropertyValue,
  multiple = false,
  InputTypeToInputComponentMap,
}: SelectInputProps<T>) {
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

  const selectProps = {
    multiple,
    onChange,
    defaultValue: instance[propertyName],
  };

  let selectComponent = <select {...selectProps}>{options}</select>;
  if (InputTypeToInputComponentMap?.['select']) {
    const SelectComponent = InputTypeToInputComponentMap['select'];
    selectComponent = <SelectComponent {...selectProps}>{options}</SelectComponent>;
  }

  return (
    <div className="row">
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      {selectComponent}
    </div>
  );
}
