import store from '../../../../store/store';
import tagService from '../../../../services/backk-example-microservice.default/tag/tagService';

const { tagsState } = store.getState();

export default async function getTagsByName(name: string): Promise<void> {
  tagsState.isGettingTags = true;
  const [tagsResponse, error] = await tagService.getTagsByName({ name });
  tagsState.isGettingTags = false;
  tagsState.tagsGetError = error;
  tagsState.tags = tagsResponse ? tagsResponse.data : [];
}
