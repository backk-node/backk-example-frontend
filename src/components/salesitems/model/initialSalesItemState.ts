import { PossibleBackkError } from 'backk-frontend-utils';
import SalesItem from '../../../services/backk-example-microservice.default/salesitem/types/entities/SalesItem';

const initialSalesItemState = {
  createdSalesItem: undefined as SalesItem | undefined,
  tagCreationError: undefined as PossibleBackkError,
  forceImmediateFormValidationId: 0,
};

export default initialSalesItemState;
