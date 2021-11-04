import store from '../../../../store/store';
import TagService from '../../../../services/backk-example-microservice.default/tag/TagService';

export default async function getTagsByName(name: string): Promise<void> {
  const { tagsState } = store.getState();

  tagsState.isGettingTags = true;
  const [tagsResponse, error] = await TagService.getTagsByName({ name });
  tagsState.isGettingTags = false;
  tagsState.lastError = error;
  tagsState.tags = tagsResponse ? tagsResponse.data : [];
}
