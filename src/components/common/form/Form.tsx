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
  buttonText?: string;
}

export default function Form({ error, onSubmitForm, ...props }: FormProps<any>) {
  const { buttonText, Class, instance, serviceFunctionType } = props;

  const inputs = Object.keys(instance)
    .filter(
      (propertyName: any) =>
        shouldPropertyBePresent(SalesItem, propertyName, serviceFunctionType) &&
        !isObjectProperty(SalesItem, propertyName)
    )
    .map((propertyName: any) => {
      const genericInputProps = { ...props, propertyName };
      return <GenericInput key={propertyName} {...genericInputProps} />;
    });

  const verb = serviceFunctionType[0].toUpperCase() + serviceFunctionType.slice(1);

  return (
    <React.Fragment>
      <form>
        <p>{serviceFunctionType === 'other' ? '' : `${verb} new ${Class.name}:`}</p>
        {inputs}
        <button onClick={onSubmitForm}>{buttonText ?? `${verb} ${Class.name}`}</button>
      </form>
      <SuccessOrErrorIndicator error={error} />
    </React.Fragment>
  );
}
