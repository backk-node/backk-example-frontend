import React, { useState } from 'react';
import './CreateSalesItem.css';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import { ServiceFunctionType } from 'backk-frontend-utils/lib/callRemoteService';
import { isObjectProperty, PossibleBackkError, shouldPropertyBePresent } from 'backk-frontend-utils';
import createSalesItem from '../model/actions/createSalesItem';
import BackEndError from '../../common/backenderror/BackEndError';
import GenericInput from '../../common/input/genericinput/GenericInput';

export default function CreateSalesItem() {
  const [salesItem, setSalesItem] = useState(new SalesItem());
  const [error, setError] = useState(null as PossibleBackkError);
  const [forceImmediateValidationId, setForceImmediateValidationId] = useState(-1);

  const updateProperty = (propertyName: string, propertyValue: any) => {
    setSalesItem({ ...salesItem, [propertyName]: propertyValue });
  };

  const onCreateSalesItemButtonClick = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const [, error] = await createSalesItem(salesItem);
    setError(error);
    setForceImmediateValidationId(forceImmediateValidationId + 1);
  };

  const inputProps = {
    updateProperty,
    Class: SalesItem,
    serviceFunctionType: 'create' as ServiceFunctionType,
    forceImmediateValidationId: !error?.statusCode && error?.message ? forceImmediateValidationId : null,
  };

  const inputs = Object.keys(salesItem)
    .filter(
      (propertyName: any) =>
        shouldPropertyBePresent(SalesItem, propertyName, 'create') &&
        !isObjectProperty(SalesItem, propertyName)
    )
    .map((propertyName: any) => {
      const props = { ...inputProps, propertyName };
      return <GenericInput key={propertyName} {...props} />;
    });

  return (
    <form>
      <p>Create new sales item:</p>
      {inputs}
      <button onClick={onCreateSalesItemButtonClick}>Create sales item</button>
      <BackEndError error={error} />
    </form>
  );
}
