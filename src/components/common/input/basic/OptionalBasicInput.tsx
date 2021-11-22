import React, { useEffect } from 'react';
import BasicInput, { BasicInputProps, defaultTransformInputValueToPropertyValue } from './BasicInput';

export default function OptionalBasicInput<T extends { [key: string]: any }>(props: BasicInputProps<T>) {
  const { instance, propertyName, transformInputValueToPropertyValue } = props;

  useEffect(() => {
    instance[propertyName] = undefined as any;
  }, [instance, propertyName]);

  function transformOptionalInputValueToPropertyValue(
    inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
  ) {
    const propertyValue = (transformInputValueToPropertyValue ?? defaultTransformInputValueToPropertyValue)(
      inputEventOrRef
    );

    if (propertyValue === '') {
      instance[propertyName] = undefined as any;
    }
  }

  return (
    <BasicInput transformInputValueToPropertyValue={transformOptionalInputValueToPropertyValue} {...props} />
  );
}
