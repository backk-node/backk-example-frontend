// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  Many,
  One,
  PromiseErrorOr,
  UserAccountId,
  validateServiceFunctionArgumentOrThrow,
  _Id,
  _IdAndUserAccountId,
} from 'backk-frontend-utils';
import EncryptionKeyManager from '../_backk/EncryptionKeyManager';
import GetSalesItemsArg from './types/args/GetSalesItemsArg';
import GetSalesItemsByUserDefinedFiltersArg from './types/args/GetSalesItemsByUserDefinedFiltersArg';
import SalesItem from './types/entities/SalesItem';
import FollowedUserSalesItem from './types/responses/FollowedUserSalesItem';

export default class SalesItemService {
  static async createSalesItem(salesItem: SalesItem): PromiseErrorOr<One<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(salesItem, SalesItem, 'create');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.createSalesItem',
      salesItem,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async getSalesItems(getSalesItemsArg: GetSalesItemsArg): PromiseErrorOr<Many<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(getSalesItemsArg, GetSalesItemsArg, 'other');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.getSalesItems',
      getSalesItemsArg,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async getSalesItemsByUserDefinedFilters(
    getSalesItemsByUserDefinedFiltersArg: GetSalesItemsByUserDefinedFiltersArg
  ): PromiseErrorOr<Many<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        getSalesItemsByUserDefinedFiltersArg,
        GetSalesItemsByUserDefinedFiltersArg,
        'other'
      );
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.getSalesItemsByUserDefinedFilters',
      getSalesItemsByUserDefinedFiltersArg,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async getFollowedUsersSalesItems(
    userAccountId: UserAccountId
  ): PromiseErrorOr<Many<FollowedUserSalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(userAccountId, UserAccountId, 'other');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.getFollowedUsersSalesItems',
      userAccountId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async getSalesItem(_id: _Id): PromiseErrorOr<One<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(_id, _Id, 'other');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.getSalesItem',
      _id,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async followSalesItemPriceChange(_idAndUserAccountId: _IdAndUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndUserAccountId, _IdAndUserAccountId, 'update');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.followSalesItemPriceChange',
      _idAndUserAccountId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async unfollowSalesItemPriceChange(_idAndUserAccountId: _IdAndUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndUserAccountId, _IdAndUserAccountId, 'update');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.unfollowSalesItemPriceChange',
      _idAndUserAccountId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async toggleLikeSalesItem(_idAndUserAccountId: _IdAndUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndUserAccountId, _IdAndUserAccountId, 'update');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.toggleLikeSalesItem',
      _idAndUserAccountId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async updateSalesItem(salesItem: SalesItem): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(salesItem, SalesItem, 'update');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.updateSalesItem',
      salesItem,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async deleteSalesItem(_id: _Id): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_id, _Id, 'other');
    } catch (error) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-example-microservice',
      'salesItemService.deleteSalesItem',
      _id,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }
}
