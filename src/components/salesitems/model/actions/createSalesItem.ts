import salesItemService from '../../../../services/backk-example-microservice.default/salesitem/salesItemService';
import SalesItem from '../../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import store from '../../../../store/store';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';

const { salesItemState } = store.getState();

export default async function createSalesItem(salesItem: SalesItem): Promise<void> {
  salesItemState.tagCreationError = undefined; // NOSONAR
  console.log(salesItem);
  const [, error] = await salesItemService.createSalesItem(salesItem);
  salesItemState.tagCreationError = error;
  if (isLocalValidationError(error)) {
    salesItemState.forceImmediateFormValidationId += 1;
  }
}
