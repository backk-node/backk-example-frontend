import React, { useState } from 'react';
import './FileInput.css';
import BasicInput from '../basic/BasicInput';
import { GenericBasicInputProps } from '../basic/GenericBasicInput';

export default function FileInput<T extends { [key: string]: any }>(props: GenericBasicInputProps<T>) {
  const { children, defaultValue, propertyName } = props;
  const [dataUri, setDataUri] = useState(defaultValue);

  function transformInputValueToPropertyValue(
    inputEventOrRef: React.MutableRefObject<any> | React.FocusEvent<any>
  ) {
    return new Promise<string>((resolve) => {
      const fileReader = new FileReader();

      fileReader.onload = function () {
        resolve(fileReader.result as string);
        setDataUri(fileReader.result);
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

  const basicInputProps = { ...props, isDialogInputType: true, transformInputValueToPropertyValue };
  return (
    <BasicInput defaultValue="" type="file" {...basicInputProps}>
      {children}
      {dataUri?.startsWith('data:image/') ? <img alt={propertyName + ' image'} src={dataUri} /> : null}
    </BasicInput>
  );
}
