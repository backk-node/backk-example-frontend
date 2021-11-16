import React from 'react';
import './Input.css';
import { getInputProps, isBuiltIntTypeArrayProperty } from 'backk-frontend-utils';
import { Props } from '../basicinput/Input';

export default function SelectInput<T extends { [key: string]: any }>({
  Class,
  propertyName,
  updateProperty,
}: Props<T>) {
  const onChange = async (event: React.FormEvent<HTMLSelectElement>) => {
    const propertyValue = event.currentTarget.value;
    const isArray = isBuiltIntTypeArrayProperty(Class, propertyName);
    updateProperty(propertyName, isArray ? [propertyValue] : propertyValue);
  };

  const inputProps = getInputProps(Class, propertyName);
  const options = inputProps.options.map((option: any, index: number) => (
    <option selected={index === 0}>{option}</option>
  ));

  return (
    <div className="row">
      <label>{propertyName[0].toUpperCase() + propertyName.slice(1)}</label>
      <select onChange={onChange}>{options}</select>
    </div>
  );
}
