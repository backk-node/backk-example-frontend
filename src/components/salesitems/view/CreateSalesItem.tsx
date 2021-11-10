import React, { useState } from 'react';
import { useBackkState, validateServiceFunctionArgument } from 'backk-frontend-utils';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';

export default function CreateSalesItem() {
  const [salesItem, updateSalesItemIfNotError] = useBackkState({
    title: '',
    description: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    title: null,
    description: null,
  } as { [key: string]: string | null });

  const changeTitle = async ({ currentTarget: { value: title } }: React.FormEvent<HTMLInputElement>) => {
    const errorMessage = await validateServiceFunctionArgument({ title }, SalesItem, 'other');
    setErrorMessages({ ...errorMessages, title: errorMessage });
    updateSalesItemIfNotError({ title }, errorMessage);
  };

  const changeDescription = async ({
    currentTarget: { value: description },
  }: React.FormEvent<HTMLInputElement>) => {
    const errorMessage = await validateServiceFunctionArgument(salesItem, SalesItem, 'other');
    setErrorMessages({ ...errorMessages, description: errorMessage });
    updateSalesItemIfNotError({ description }, errorMessage);
  };

  return (
    <div>
      <p>Create new sales item:</p>
      <label htmlFor="title">Title&nbsp;</label>
      <input id="title" onChange={changeTitle} />
      <label style={{ color: 'red' }}>{errorMessages.title ?? ''}</label>
      <br />
      <label htmlFor="description">Description&nbsp;</label>
      <input id="description" onChange={changeDescription} />
      <label style={{ color: 'red' }}>{errorMessages.description ?? ''}</label>
    </div>
  );
}
