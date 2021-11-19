import React from 'react';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import createSalesItem from '../model/actions/createSalesItem';
import store from '../../../store/store';
import preventDefaultAnd from '../../../utils/preventDefaultAnd';
import Form from '../../common/form/Form';

const salesItem = new SalesItem();
const { salesItemState } = store.getState();

export default function CreateSalesItem() {
  store.useState([salesItemState]);

  return (
    <Form
      Class={SalesItem}
      instance={salesItem}
      serviceFunctionType={'create'}
      forceImmediateValidationId={salesItemState.forceImmediateFormValidationId}
      error={salesItemState.tagCreationError}
      onSubmitForm={preventDefaultAnd(createSalesItem, salesItem)}
    />
  );
}
