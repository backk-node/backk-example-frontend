import React from 'react';
import './Form.css';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import {
  isObjectProperty,
  PossibleBackkError,
  ServiceFunctionType,
  shouldPropertyBePresent,
} from 'backk-frontend-utils';
import SuccessOrErrorIndicator from '../successorerrorindicator/SuccessOrErrorIndicator';
import GenericInput from '../../common/input/generic/GenericInput';

export interface FormProps<T extends { [key: string]: any }> {
  Class: new () => T;
  instance: T;
  serviceFunctionType: ServiceFunctionType;
  forceImmediateValidationId: number;
  onSubmitForm: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
  error: PossibleBackkError;
}

export default function Form({ error, onSubmitForm, ...props }: FormProps<any>) {
  const inputs = Object.keys(props.instance)
    .filter(
      (propertyName: any) =>
        shouldPropertyBePresent(SalesItem, propertyName, props.serviceFunctionType) &&
        !isObjectProperty(SalesItem, propertyName)
    )
    .map((propertyName: any) => {
      const genericInputProps = { ...props, propertyName };
      return <GenericInput key={propertyName} {...genericInputProps} />;
    });

  const className = props.Class.name;

  return (
    <React.Fragment>
      <form>
        <p>{`Create new ${className}:`}</p>
        {inputs}
        <button onClick={onSubmitForm}>{`Create ${className}`}</button>
      </form>
      <SuccessOrErrorIndicator error={error} />
    </React.Fragment>
  );
}
