import store from '../../../../store/store';
import tagService from '../../../../services/backk-example-microservice.default/tag/tagService';
import isLocalValidationError from 'backk-frontend-utils/lib/errors/isLocalValidationError';
import TagName from '../../../../services/backk-example-microservice.default/tag/args/TagName';

const { tagsState } = store.getState();

export default async function getTagsByName(tagName: TagName): Promise<void> {
  tagsState.tagsGetError = undefined; // NOSONAR
  tagsState.isGettingTags = true;
  const [tags, error] = await tagService.getTagsByName(tagName);
  tagsState.isGettingTags = false;
  tagsState.tagsGetError = error;
  tagsState.tags = tags?.data ?? [];
  if (isLocalValidationError(error)) {
    tagsState.forceImmediateGetFormValidationId += 1;
  }
}
