import { PossibleBackkError } from 'backk-frontend-utils';
import Tag from '../../../services/backk-example-microservice.default/tag/entities/Tag';

const initialTagsState = {
  tags: [] as Tag[],
  tagsGetError: null as PossibleBackkError,
  isGettingTags: false,
};

export default initialTagsState;
