import { PossibleBackkError } from 'backk-frontend-utils';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';

const initialSalesItemState = {
  createdSalesItem: undefined as SalesItem | undefined,
  salesItemCreationError: undefined as PossibleBackkError,
  salesItemUpdateError: undefined as PossibleBackkError,
  forceImmediateCreateFormValidationId: 0,
  forceImmediateUpdateFormValidationId: 0,
  version: 1,
};

export default initialSalesItemState;
