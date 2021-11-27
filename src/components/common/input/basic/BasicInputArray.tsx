import React, { useState } from 'react';
import GenericBasicInput, { GenericBasicInputProps, PropertyValue } from './GenericBasicInput';

export default function BasicInputArray<T extends { [key: string]: any }>(props: GenericBasicInputProps<T>) {
  const { defaultValue, instance, propertyName } = props;
  const [inputCount, setInputCount] = useState(instance[propertyName].length || 1);

  function transformPropertyValueToArrayPropertyValue(propertyValue: PropertyValue, index: number) {
    if (propertyValue && Array.isArray(instance[propertyName])) {
      instance[propertyName][index] = propertyValue;
      return instance[propertyName];
    }
    return propertyValue ? [propertyValue] : [];
  }

  function addInput(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setInputCount(inputCount + 1);
  }

  function removeInput(event: React.FormEvent<HTMLButtonElement>, index: number) {
    event.preventDefault();
    setInputCount(inputCount - 1);
    instance[propertyName] = instance[propertyName].splice(index, 1);
  }

  const inputs = Array(inputCount)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index} className="row">
          <GenericBasicInput
            {...props}
            genericType="array"
            defaultValue={defaultValue ?? instance[propertyName][index]}
            shouldDisplayLabel={index === 0}
            transformPropertyValue={(inputEventOrRef) =>
              transformPropertyValueToArrayPropertyValue(inputEventOrRef, index)
            }
          >
            <button
              onClick={
                index === inputCount - 1
                  ? addInput
                  : (event: React.FormEvent<HTMLButtonElement>) => removeInput(event, index)
              }
            >
              {index === inputCount - 1 ? '+' : '\u2013'}
            </button>
          </GenericBasicInput>
        </div>
      );
    });

  return <React.Fragment>{inputs}</React.Fragment>;
}
