import React from 'react';
import BasicInput from '../basic/BasicInput';
import { GenericInputProps } from '../generic/GenericInput';

function transformInputValueToPropertyValue(file: any): Promise<any> {
  return new Promise<string | ArrayBuffer | null>((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      resolve(fileReader.result);
    };
    fileReader.onerror = () => resolve('');
    try {
      fileReader.readAsDataURL(file);
    } catch {
      resolve('');
    }
  });
}

export default function FileInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, isDialogInputType: true, transformInputValueToPropertyValue };
  return <BasicInput type="file" {...basicInputProps} />;
}
