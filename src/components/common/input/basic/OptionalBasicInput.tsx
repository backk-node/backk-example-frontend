import React, { useEffect } from 'react';
import GenericBasicInput, { GenericBasicInputProps, PropertyValue } from './GenericBasicInput';

export default function OptionalBasicInput<T extends { [key: string]: any }>(
  props: GenericBasicInputProps<T>
) {
  const { instance, propertyName } = props;

  useEffect(() => {
    instance[propertyName] = undefined as any;
  }, [instance, propertyName]);

  function setInstancePropertyToUndefinedIfInputEmpty(propertyValue: PropertyValue) {
    if (propertyValue === '') {
      instance[propertyName] = undefined as any;
    }
    return propertyValue;
  }

  return (
    <GenericBasicInput
      genericType="optional"
      transformPropertyValue={setInstancePropertyToUndefinedIfInputEmpty}
      {...props}
    />
  );
}
