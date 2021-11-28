import salesItemService from '../../../../services/backk-example-microservice.default/salesitem/salesItemService';
import SalesItem from '../../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import store from '../../../../store/store';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';

const { salesItemState } = store.getState();

export default async function updateSalesItem(newSalesItem: SalesItem): Promise<void> {
  console.log(newSalesItem);
  const [, error] = await salesItemService.updateSalesItem(newSalesItem);
  console.log(error);
  salesItemState.salesItemUpdateError = error;
  if (isLocalValidationError(error)) {
    salesItemState.forceImmediateUpdateFormValidationId += 1;
  }
}
