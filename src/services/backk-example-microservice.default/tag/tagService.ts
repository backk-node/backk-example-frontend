// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  Many,
  One,
  PromiseErrorOr,
  validateServiceFunctionArgumentOrThrow,
} from 'backk-frontend-utils';
import MicroserviceOptions from '../_backk/MicroserviceOptions';
import TagName from './args/TagName';
import Tag from './entities/Tag';

export interface TagService {
  createTag(arg: Tag): PromiseErrorOr<One<Tag>>;
  getTagsByName(arg: TagName): PromiseErrorOr<Many<Tag>>;
}

export class TagServiceImpl implements TagService {
  async createTag(tag: Tag): PromiseErrorOr<One<Tag>> {
    try {
      await validateServiceFunctionArgumentOrThrow(tag, Tag, 'create');
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'tagService.createTag',
      tag,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getTagsByName(tagName: TagName): PromiseErrorOr<Many<Tag>> {
    try {
      await validateServiceFunctionArgumentOrThrow(tagName, TagName, 'other');
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'tagService.getTagsByName',
      tagName,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }
}

const tagService = new TagServiceImpl();
export default tagService;
