import React, { useState } from 'react';
import GenericBasicInput, { GenericBasicInputProps, PropertyValue } from './GenericBasicInput';

export default function BasicInputArray<T extends { [key: string]: any }>(props: GenericBasicInputProps<T>) {
  const { defaultValue, instance, propertyName } = props;
  const [hasInputs, setHasInputs] = useState(
    instance[propertyName].length > 0 ? Array(instance[propertyName].length).fill(true) : [true]
  );

  function transformPropertyValueToArrayPropertyValue(propertyValue: PropertyValue, index: number) {
    instance[propertyName][index] = propertyValue === '' ? undefined : propertyValue;
    return instance[propertyName];
  }

  function addInput(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setHasInputs([...hasInputs, true]);
  }

  function removeInput(event: React.FormEvent<HTMLButtonElement>, index: number) {
    event.preventDefault();
    hasInputs[index] = false;
    setHasInputs([...hasInputs]);
    instance[propertyName][index] = undefined; // NOSONAR
  }

  const inputCount = hasInputs.filter((hasInput) => hasInput).length;
  const firstInputIndex = hasInputs.indexOf(true);
  const lastInputIndex = hasInputs.lastIndexOf(true);

  const inputs = hasInputs.map((hasInput, index) => {
    if (!hasInput) {
      return null;
    }

    let removeInputButton;
    if (inputCount > 1) {
      removeInputButton = (
        <button onClick={(event: React.FormEvent<HTMLButtonElement>) => removeInput(event, index)}>
          {'\u2013'}
        </button>
      );
    }

    let addInputButton;
    if (index === lastInputIndex) {
      addInputButton = <button onClick={addInput}>+</button>;
    }

    return (
      <div key={index} className="row">
        <GenericBasicInput
          {...props}
          genericType="array"
          defaultValue={defaultValue ?? instance[propertyName][index]}
          shouldDisplayLabel={index === firstInputIndex}
          transformPropertyValue={(inputEventOrRef) =>
            transformPropertyValueToArrayPropertyValue(inputEventOrRef, index)
          }
        >
          {removeInputButton}
          {addInputButton}
        </GenericBasicInput>
      </div>
    );
  });

  return <React.Fragment>{inputs}</React.Fragment>;
}
