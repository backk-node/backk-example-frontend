import salesItemService from '../../../../services/backk-example-microservice.default/salesitem/salesItemService';
import SalesItem from '../../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import store from '../../../../store/store';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';

const { salesItemState } = store.getState();

export default async function updateSalesItem(newSalesItem: SalesItem): Promise<void> {
  salesItemState.salesItemUpdateError = undefined; // NOSONAR
  const [, error] = await salesItemService.updateSalesItem(newSalesItem);
  salesItemState.salesItemUpdateError = error;
  if (!error) {
    salesItemState.version += 1;
  }
  if (isLocalValidationError(error)) {
    salesItemState.forceImmediateUpdateFormValidationId += 1;
  }
}
