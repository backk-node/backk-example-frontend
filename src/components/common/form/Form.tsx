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
import isOptionalProperty from 'backk-frontend-utils/lib/utils/isOptionalProperty';
import OptionalGenericInput from '../input/generic/OptionalGenericInput';

export interface FormProps<T extends { [key: string]: any }> {
  Class: new () => T;
  instance: T;
  serviceFunctionType: ServiceFunctionType;
  forceImmediateValidationId: number;
  onSubmitForm: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
  error: PossibleBackkError;
}

export default function Form({ error, onSubmitForm, ...props }: FormProps<any>) {
  const { Class, instance, serviceFunctionType } = props;

  const inputs = Object.keys(instance)
    .filter(
      (propertyName: any) =>
        shouldPropertyBePresent(SalesItem, propertyName, serviceFunctionType) &&
        !isObjectProperty(SalesItem, propertyName)
    )
    .map((propertyName: any) => {
      const genericInputProps = { ...props, propertyName };
      if (isOptionalProperty(Class, propertyName)) {
        return <OptionalGenericInput key={propertyName} {...genericInputProps} />;
      }
      return <GenericInput key={propertyName} {...genericInputProps} />;
    });

  const verb = serviceFunctionType[0].toUpperCase() + serviceFunctionType.slice(1);

  return (
    <React.Fragment>
      <form>
        <p>{`${verb} new ${Class.name}:`}</p>
        {inputs}
        <button onClick={onSubmitForm}>{`${verb} ${Class.name}`}</button>
      </form>
      <SuccessOrErrorIndicator error={error} />
    </React.Fragment>
  );
}
