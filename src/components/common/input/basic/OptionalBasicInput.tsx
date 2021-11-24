import React, { useEffect } from 'react';
import BasicInput, { BasicInputProps, defaultTransformInputValueToPropertyValue } from './BasicInput';

export default function OptionalBasicInput<T extends { [key: string]: any }>(props: BasicInputProps<T>) {
  const { instance, propertyName, transformInputValueToPropertyValue } = props;

  useEffect(() => {
    instance[propertyName] = undefined as any;
  }, [instance, propertyName]);

  async function transformOptionalInputValueToPropertyValue(
    inputEventOrRef: React.MutableRefObject<HTMLInputElement | null> | React.FocusEvent<HTMLInputElement>
  ) {
    const propertyValue = await (
      transformInputValueToPropertyValue ?? defaultTransformInputValueToPropertyValue
    )(inputEventOrRef);

    if (propertyValue === '') {
      instance[propertyName] = undefined as any;
    }

    return propertyValue;
  }

  return (
    <BasicInput transformInputValueToPropertyValue={transformOptionalInputValueToPropertyValue} {...props} />
  );
}
