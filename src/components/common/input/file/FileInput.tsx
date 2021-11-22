import React from 'react';
import { GenericInputProps } from '../generic/GenericInput';
import GenericBasicInput from '../basic/GenericBasicInput';

function transformInputValueToPropertyValue(
  inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
): Promise<any> {
  return new Promise<string | ArrayBuffer | null>((resolve) => {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      resolve(fileReader.result);
    };

    fileReader.onerror = () => resolve('');

    try {
      const file =
        'currentTarget' in inputEventOrRef
          ? inputEventOrRef.currentTarget.files?.[0]
          : inputEventOrRef.current.files?.[0];

      fileReader.readAsDataURL(file);
    } catch {
      resolve('');
    }
  });
}

export default function FileInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, isDialogInputType: true, transformInputValueToPropertyValue };
  return <GenericBasicInput type="file" {...basicInputProps} />;
}
