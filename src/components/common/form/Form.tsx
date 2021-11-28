import React from 'react';
import './Form.css';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import {
  getInstanceWithUndefinedRemovedFromArrays,
  isObjectProperty,
  PossibleBackkError,
  removeUnchangedProperties,
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
  onSubmitForm: (instance: T) => Promise<void>;
  error: PossibleBackkError;
  currentInstance?: T;
  buttonText?: string;
}

export default function Form({ error, onSubmitForm, ...props }: FormProps<any>) {
  const { buttonText, Class, currentInstance, instance, serviceFunctionType } = props;

  function submitForm(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (serviceFunctionType === 'update') {
      removeUnchangedProperties(instance, currentInstance);
    }
    onSubmitForm(getInstanceWithUndefinedRemovedFromArrays(instance));
  }

  const inputs = Object.keys(instance)
    .filter(
      (propertyName: any) =>
        shouldPropertyBePresent(SalesItem, propertyName, serviceFunctionType) &&
        !isObjectProperty(SalesItem, propertyName)
    )
    .map((propertyName: any) => {
      const genericInputProps = { ...props, propertyName };
      return (
        <GenericInput
          key={propertyName}
          defaultValue={serviceFunctionType === 'update' ? instance[propertyName] : undefined}
          {...genericInputProps}
        />
      );
    });

  const verb = serviceFunctionType[0].toUpperCase() + serviceFunctionType.slice(1);

  return (
    <React.Fragment>
      <form>
        <p>{serviceFunctionType === 'other' ? '' : `${verb} new ${Class.name}:`}</p>
        {inputs}
        <button onClick={submitForm}>{buttonText ?? `${verb} ${Class.name}`}</button>
      </form>
      <SuccessOrErrorIndicator error={error} />
    </React.Fragment>
  );
}
