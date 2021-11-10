import React, { useState } from 'react';
import { validateServiceFunctionArgumentOrThrow } from 'backk-frontend-utils';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';

export default function CreateSalesItem() {
  const [newSalesItem, setNewSalesItem] = useState({
    title: '',
    description: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    title: null,
    description: null,
  });

  const changeTitle = async ({ currentTarget: { value: title } }: React.FormEvent<HTMLInputElement>) => {
    try {
      await validateServiceFunctionArgumentOrThrow({ title }, SalesItem, 'other');
      setNewSalesItem({
        ...newSalesItem,
        title,
      });
    } catch (error: any) {
      setErrorMessages({ ...errorMessages, title: error.message });
    }
  };

  const changeDescription = async ({
    currentTarget: { value: description },
  }: React.FormEvent<HTMLInputElement>) => {
    try {
      await validateServiceFunctionArgumentOrThrow({ description }, SalesItem, 'other');
      setNewSalesItem({
        ...newSalesItem,
        description,
      });
    } catch (error: any) {
      setErrorMessages({ ...errorMessages, description: error.message });
    }
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
