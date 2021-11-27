import React, { useEffect } from 'react';
import { defaultTransformInputValueToPropertyValue } from './BasicInput';
import GenericBasicInput, { GenericBasicInputProps } from './GenericBasicInput';

export default function OptionalBasicInput<T extends { [key: string]: any }>(
  props: GenericBasicInputProps<T>
) {
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
    <GenericBasicInput
      type="optional"
      transformInputValueToPropertyValue={transformOptionalInputValueToPropertyValue}
      {...props}
    />
  );
}
