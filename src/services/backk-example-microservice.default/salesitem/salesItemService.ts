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
import MicroserviceOptions from '../_backk/MicroserviceOptions';
import GetSalesItemsArg from './types/args/GetSalesItemsArg';
import GetSalesItemsByUserDefinedFiltersArg from './types/args/GetSalesItemsByUserDefinedFiltersArg';
import SalesItem from './types/entities/SalesItem';
import FollowedUserSalesItem from './types/responses/FollowedUserSalesItem';

export interface SalesItemService {
  createSalesItem(arg: SalesItem): PromiseErrorOr<One<SalesItem>>;
  getSalesItems(arg: GetSalesItemsArg): PromiseErrorOr<Many<SalesItem>>;
  getSalesItemsByUserDefinedFilters(
    arg: GetSalesItemsByUserDefinedFiltersArg
  ): PromiseErrorOr<Many<SalesItem>>;
  getFollowedUsersSalesItems(arg: UserAccountId): PromiseErrorOr<Many<FollowedUserSalesItem>>;
  getSalesItem(arg: _Id): PromiseErrorOr<One<SalesItem>>;
  followSalesItemPriceChange(arg: _IdAndUserAccountId): PromiseErrorOr<null>;
  unfollowSalesItemPriceChange(arg: _IdAndUserAccountId): PromiseErrorOr<null>;
  toggleLikeSalesItem(arg: _IdAndUserAccountId): PromiseErrorOr<null>;
  updateSalesItem(arg: SalesItem): PromiseErrorOr<null>;
  deleteSalesItem(arg: _Id): PromiseErrorOr<null>;
}

export class SalesItemServiceImpl implements SalesItemService {
  async createSalesItem(salesItem: SalesItem): PromiseErrorOr<One<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(salesItem, SalesItem, 'create');
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
      'salesItemService.createSalesItem',
      salesItem,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getSalesItems(getSalesItemsArg: GetSalesItemsArg): PromiseErrorOr<Many<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(getSalesItemsArg, GetSalesItemsArg, 'other');
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
      'salesItemService.getSalesItems',
      getSalesItemsArg,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getSalesItemsByUserDefinedFilters(
    getSalesItemsByUserDefinedFiltersArg: GetSalesItemsByUserDefinedFiltersArg
  ): PromiseErrorOr<Many<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        getSalesItemsByUserDefinedFiltersArg,
        GetSalesItemsByUserDefinedFiltersArg,
        'other'
      );
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
      'salesItemService.getSalesItemsByUserDefinedFilters',
      getSalesItemsByUserDefinedFiltersArg,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getFollowedUsersSalesItems(
    userAccountId: UserAccountId
  ): PromiseErrorOr<Many<FollowedUserSalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(userAccountId, UserAccountId, 'other');
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
      'salesItemService.getFollowedUsersSalesItems',
      userAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getSalesItem(_id: _Id): PromiseErrorOr<One<SalesItem>> {
    try {
      await validateServiceFunctionArgumentOrThrow(_id, _Id, 'other');
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
      'salesItemService.getSalesItem',
      _id,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async followSalesItemPriceChange(_idAndUserAccountId: _IdAndUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndUserAccountId, _IdAndUserAccountId, 'update');
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
      'salesItemService.followSalesItemPriceChange',
      _idAndUserAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async unfollowSalesItemPriceChange(_idAndUserAccountId: _IdAndUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndUserAccountId, _IdAndUserAccountId, 'update');
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
      'salesItemService.unfollowSalesItemPriceChange',
      _idAndUserAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async toggleLikeSalesItem(_idAndUserAccountId: _IdAndUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndUserAccountId, _IdAndUserAccountId, 'update');
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
      'salesItemService.toggleLikeSalesItem',
      _idAndUserAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async updateSalesItem(salesItem: SalesItem): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(salesItem, SalesItem, 'update');
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
      'salesItemService.updateSalesItem',
      salesItem,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async deleteSalesItem(_id: _Id): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_id, _Id, 'other');
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
      'salesItemService.deleteSalesItem',
      _id,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }
}

const salesItemService = new SalesItemServiceImpl();
export default salesItemService;
