import salesItemService from '../../../../services/backk-example-microservice.default/salesitem/salesItemService';
import SalesItem from '../../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';
import { One, PromiseErrorOr } from 'backk-frontend-utils';

export default function createSalesItem(salesItem: SalesItem): PromiseErrorOr<One<SalesItem>> {
  return salesItemService.createSalesItem(salesItem);
}
