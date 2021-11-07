// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  Many,
  One,
  PromiseErrorOr,
  validateServiceFunctionArgumentOrThrow,
} from 'backk-frontend-utils';
import EncryptionKeyManager from '../_backk/EncryptionKeyManager';
import TagName from './args/TagName';
import Tag from './entities/Tag';

export default class TagService {
  static async createTag(tag: Tag): PromiseErrorOr<One<Tag>> {
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
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async getTagsByName(tagName: TagName): PromiseErrorOr<Many<Tag>> {
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
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }
}
