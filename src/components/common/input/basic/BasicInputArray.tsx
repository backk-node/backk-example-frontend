import React, { useState } from 'react';
import { defaultTransformInputValueToPropertyValue } from './BasicInput';
import GenericBasicInput, { GenericBasicInputProps } from './GenericBasicInput';

export default function BasicInputArray<T extends { [key: string]: any }>(props: GenericBasicInputProps<T>) {
  const { defaultValue, instance, propertyName, transformInputValueToPropertyValue } = props;
  const [inputCount, setInputCount] = useState(instance[propertyName].length || 1);

  async function transformInputValueToArrayPropertyValue(
    inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>,
    index: number
  ) {
    const propertyValue = await (
      transformInputValueToPropertyValue ?? defaultTransformInputValueToPropertyValue
    )(inputEventOrRef);

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
            type="array"
            defaultValue={defaultValue ?? instance[propertyName][index]}
            shouldDisplayLabel={index === 0}
            associatedButtonText={index === inputCount - 1 ? '+' : '\u2013'}
            onAssociatedButtonClick={
              index === inputCount - 1
                ? addInput
                : (event: React.FormEvent<HTMLButtonElement>) => removeInput(event, index)
            }
            transformInputValueToPropertyValue={(inputEventOrRef) =>
              transformInputValueToArrayPropertyValue(inputEventOrRef, index)
            }
          />
        </div>
      );
    });

  return <React.Fragment>{inputs}</React.Fragment>;
}
