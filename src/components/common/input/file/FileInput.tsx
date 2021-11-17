import React from 'react';
import noop from 'lodash/noop';
import './Input.css';
import BasicInput from '../basic/BasicInput';
import { GenericInputProps } from '../generic/GenericInput';

function transformInputValueToPropertyValue(inputValue: any): Promise<any> {
  const fileReader = new FileReader();
  let dataUriPromise = new Promise<string | ArrayBuffer | null>(noop);

  fileReader.onload = function () {
    // noinspection ReuseOfLocalVariableJS
    dataUriPromise = Promise.resolve(fileReader.result);
  };

  try {
    fileReader.readAsDataURL(inputValue);
    return dataUriPromise;
  } catch {
    return Promise.resolve(undefined);
  }
}

export default function FileInput<T extends { [key: string]: any }>(props: GenericInputProps<T>) {
  const basicInputProps = { ...props, transformInputValueToPropertyValue };
  return <BasicInput type="file" {...basicInputProps} />;
}
