import React from 'react';
import { isBuiltIntTypeArrayProperty, IsOptionalProperty } from 'backk-frontend-utils';
import BasicInput, { BasicInputProps } from './BasicInput';
import OptionalBasicInput from './OptionalBasicInput';
import BasicInputArray from './BasicInputArray';

export default function GenericBasicInput<T extends { [key: string]: any }>(props: BasicInputProps<T>) {
  const { Class, propertyName } = props;

  if (IsOptionalProperty(Class, propertyName)) {
    return <OptionalBasicInput {...props} />;
  } else if (isBuiltIntTypeArrayProperty(Class, propertyName)) {
    return <BasicInputArray {...props} />;
  }

  return <BasicInput {...props} />;
}
