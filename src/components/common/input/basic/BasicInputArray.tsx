import React, { useState } from 'react';
import BasicInput, { BasicInputProps, defaultTransformInputValueToPropertyValue } from './BasicInput';

export default function BasicInputArray<T extends { [key: string]: any }>(props: BasicInputProps<T>) {
  const { instance, propertyName, transformInputValueToPropertyValue } = props;
  const [inputCount, setInputCount] = useState(1);

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
          <BasicInput
            {...props}
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
