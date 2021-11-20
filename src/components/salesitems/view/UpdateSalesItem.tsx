import React from 'react';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import store from '../../../store/store';
import preventDefaultAnd from '../../../utils/preventDefaultAnd';
import Form from '../../common/form/Form';
import updateSalesItem from '../model/actions/updateSalesItem';

export interface UpdateSalesItemProps {
  currentSalesItem: SalesItem;
}

const { salesItemState } = store.getState();

export default function UpdateSalesItem({ currentSalesItem }: UpdateSalesItemProps) {
  store.useState([salesItemState]);
  const newSalesItem = Object.assign(new SalesItem(), currentSalesItem);

  return (
    <Form
      Class={SalesItem}
      instance={newSalesItem}
      serviceFunctionType={'update'}
      forceImmediateValidationId={salesItemState.forceImmediateUpdateFormValidationId}
      error={salesItemState.salesItemUpdateError}
      onSubmitForm={preventDefaultAnd(updateSalesItem, currentSalesItem, newSalesItem)}
    />
  );
}