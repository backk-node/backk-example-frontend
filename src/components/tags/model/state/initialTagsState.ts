import { BackkError } from 'backk-frontend-utils';
import Tag from '../../../../services/backk-example-microservice.default/tag/entities/Tag';

const initialTagsState = {
  tags: [] as Tag[],
  lastError: null as BackkError | null | undefined,
  isGettingTags: false,
};

export default initialTagsState;
