import salesItemService from '../../../../services/backk-example-microservice.default/salesitem/salesItemService';
import SalesItem from '../../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import store from '../../../../store/store';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';
import { removeUnchangedProperties } from 'backk-frontend-utils';

const { salesItemState } = store.getState();

export default async function updateSalesItem(
  currentSalesItem: SalesItem,
  newSalesItem: SalesItem
): Promise<void> {
  removeUnchangedProperties(newSalesItem, currentSalesItem);
  const [, error] = await salesItemService.updateSalesItem(newSalesItem);
  salesItemState.salesItemUpdateError = error;
  if (isLocalValidationError(error)) {
    salesItemState.forceImmediateUpdateFormValidationId += 1;
  }
}
