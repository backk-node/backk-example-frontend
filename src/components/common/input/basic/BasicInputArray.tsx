import React, { useState } from 'react';
import BasicInput, { BasicInputProps, defaultTransformInputValueToPropertyValue } from './BasicInput';

export default function BasicInputArray<T extends { [key: string]: any }>(props: BasicInputProps<T>) {
  const { instance, propertyName } = props;
  const [inputCount, setInputCount] = useState(1);

  function transformInputValueToArrayPropertyValue(
    inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>,
    index: number
  ) {
    const propertyValue = (
      props.transformInputValueToPropertyValue ?? defaultTransformInputValueToPropertyValue
    )(inputEventOrRef);

    if (propertyValue && Array.isArray(instance[propertyName])) {
      instance[propertyName][index] = propertyValue;
      return instance[propertyValue];
    }

    return propertyValue ? [propertyValue] : [];
  }

  function addInput() {
    setInputCount(inputCount + 1);
  }

  function removeInput(index: number) {
    setInputCount(inputCount - 1);
    instance[propertyName] = instance[propertyName].splice(index, 1);
  }

  const inputs = Array(inputCount)
    .fill(0)
    .map((_, index) => {
      return (
        <BasicInput
          associatedButtonText={index === inputCount - 1 ? '+' : '-'}
          onAssociatedButtonClick={index === inputCount - 1 ? addInput : () => removeInput(index)}
          transformInputValueToPropertyValue={(inputEventOrRef) =>
            transformInputValueToArrayPropertyValue(inputEventOrRef, index)
          }
          {...props}
        />
      );
    });

  return <React.Fragment>{inputs}</React.Fragment>;
}
