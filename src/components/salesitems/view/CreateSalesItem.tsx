import React, { useState } from 'react';
import './CreateSalesItem.css';
import {
  createServiceFunctionArgumentPropertyUpdater,
  getInitialErrorMessages,
  getValidationMessage,
  getValidationMessageClassNames,
} from 'backk-frontend-utils';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import { Area } from '../../../services/backk-example-microservice.default/salesitem/types/enums/Area';

export default function CreateSalesItem() {
  const [salesItem, setSalesItem] = useState(new SalesItem());
  const [errorMessages, setErrorMessages] = useState(getInitialErrorMessages(salesItem));
  const updateSalesItemProperty = createServiceFunctionArgumentPropertyUpdater(
    SalesItem,
    'create',
    setSalesItem,
    setErrorMessages
  );

  const updateTitle = async (event: React.FocusEvent<HTMLInputElement>) => {
    await updateSalesItemProperty('title', event.currentTarget.value);
  };

  const updateDescription = async (event: React.FormEvent<HTMLInputElement>) => {
    await updateSalesItemProperty('description', event.currentTarget.value);
  };

  const updateTag = async (event: React.FormEvent<HTMLInputElement>) => {
    await updateSalesItemProperty('tags', [{ _id: undefined, name: event.currentTarget.value }]);
  };

  const updateArea = async (event: React.FormEvent<HTMLInputElement>) => {
    await updateSalesItemProperty('area', event.currentTarget.value as Area);
  };

  return (
    <form>
      <p>Create new sales item:</p>

      <div className="row">
        <label>Title</label>
        <input onBlur={updateTitle} />
        <label className={getValidationMessageClassNames(errorMessages.title)}>
          {getValidationMessage(errorMessages.title)}
        </label>
      </div>

      <div className="row">
        <label>Description</label>
        <input onBlur={updateDescription} />
        <label className={getValidationMessageClassNames(errorMessages.description)}>
          {getValidationMessage(errorMessages.description)}
        </label>
      </div>

      <div className="row">
        <label>Tag</label>
        <input onBlur={updateTag} />
        <label className={getValidationMessageClassNames(errorMessages.tags)}>
          {getValidationMessage(errorMessages.tags)}
        </label>
      </div>

      <div className="row">
        <label>Area</label>
        <input onBlur={updateArea} />
        <label className={getValidationMessageClassNames(errorMessages.area)}>
          {getValidationMessage(errorMessages.area)}
        </label>
      </div>
    </form>
  );
}
