// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { callRemoteService, Many, One, PromiseErrorOr } from 'backk-frontend-utils';
import TagName from './args/TagName';
import Tag from './entities/Tag';

export default class TagService {
  createTag(tag: Tag, jwtStorageEncryptionKey: string): PromiseErrorOr<One<Tag>> {
    return callRemoteService(
      'backk-example-microservice',
      'tagService.createTag',
      tag,
      'default',
      jwtStorageEncryptionKey
    );
  }

  getTagsByName(tagName: TagName, jwtStorageEncryptionKey: string): PromiseErrorOr<Many<Tag>> {
    return callRemoteService(
      'backk-example-microservice',
      'tagService.getTagsByName',
      tagName,
      'default',
      jwtStorageEncryptionKey
    );
  }
}
