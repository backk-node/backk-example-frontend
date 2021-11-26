import { PossibleBackkError } from 'backk-frontend-utils';
import Tag from '../../../services/backk-example-microservice.default/tag/entities/Tag';

const initialTagsState = {
  isGettingTags: false,
  tagsGetError: undefined as PossibleBackkError,
  forceImmediateGetFormValidationId: 0,
  tags: [] as Tag[],
};

export default initialTagsState;
