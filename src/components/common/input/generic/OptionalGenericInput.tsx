import React, { useEffect, useState } from 'react';
import './BasicInput.css';
import GenericInput, { GenericInputProps } from './GenericInput';

export default function OptionalGenericInput<T extends { [key: string]: any }>(
  props: Omit<GenericInputProps<T>, 'isInputEnabled'>
) {
  const { instance, propertyName } = props;
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [inputValue, setInputValue] = useState(instance[propertyName]);

  useEffect(() => {
    if (isInputEnabled) {
      instance[propertyName] = inputValue;
    } else {
      setInputValue(instance[propertyName]);
      (instance as any)[propertyName] = undefined; // NOSONAR
    }
  }, [isInputEnabled, inputValue, instance, propertyName]);

  function enableOrDisableInput() {
    setIsInputEnabled(!isInputEnabled);
  }

  return (
    <React.Fragment>
      <input type="checkbox" onChange={enableOrDisableInput} />
      <GenericInput isInputEnabled={isInputEnabled} {...props} />
    </React.Fragment>
  );
}
