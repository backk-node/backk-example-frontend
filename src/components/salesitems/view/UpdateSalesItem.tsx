import React from 'react';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import store from '../../../store/store';
import Form from '../../common/form/Form';
import updateSalesItem from '../model/actions/updateSalesItem';

export interface UpdateSalesItemProps {
  currentSalesItem?: SalesItem;
}

const { salesItemState } = store.getState();

export default function UpdateSalesItem({ currentSalesItem }: UpdateSalesItemProps) {
  store.useState([salesItemState]);
  const { forceImmediateUpdateFormValidationId, salesItemUpdateError } = salesItemState;
  const newSalesItem = Object.assign(new SalesItem(), currentSalesItem);

  if (currentSalesItem) {
    return (
      <Form
        Class={SalesItem}
        currentInstance={currentSalesItem}
        instance={newSalesItem}
        serviceFunctionType={'update'}
        forceImmediateValidationId={forceImmediateUpdateFormValidationId}
        error={salesItemUpdateError}
        onSubmitForm={updateSalesItem}
      />
    );
  }

  return null;
}
