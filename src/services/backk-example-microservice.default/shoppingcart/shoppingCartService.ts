// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  One,
  PromiseErrorOr,
  UserAccountId,
  validateServiceFunctionArgumentOrThrow,
} from 'backk-frontend-utils';
import MicroserviceOptions from '../_backk/MicroserviceOptions';
import UserAccountIdAndSalesItemId from './types/args/UserAccountIdAndSalesItemId';
import ShoppingCart from './types/entities/ShoppingCart';

export interface ShoppingCartService {
  getShoppingCart(arg: UserAccountId): PromiseErrorOr<One<ShoppingCart>>;
  addToShoppingCart(arg: UserAccountIdAndSalesItemId): PromiseErrorOr<null>;
  removeFromShoppingCart(arg: UserAccountIdAndSalesItemId): PromiseErrorOr<null>;
  emptyShoppingCart(arg: UserAccountId): PromiseErrorOr<null>;
}

export class ShoppingCartServiceImpl implements ShoppingCartService {
  async getShoppingCart(userAccountId: UserAccountId): PromiseErrorOr<One<ShoppingCart>> {
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
      'shoppingCartService.getShoppingCart',
      userAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async addToShoppingCart(userAccountIdAndSalesItemId: UserAccountIdAndSalesItemId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        userAccountIdAndSalesItemId,
        UserAccountIdAndSalesItemId,
        'update'
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
      'shoppingCartService.addToShoppingCart',
      userAccountIdAndSalesItemId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async removeFromShoppingCart(
    userAccountIdAndSalesItemId: UserAccountIdAndSalesItemId
  ): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        userAccountIdAndSalesItemId,
        UserAccountIdAndSalesItemId,
        'update'
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
      'shoppingCartService.removeFromShoppingCart',
      userAccountIdAndSalesItemId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async emptyShoppingCart(userAccountId: UserAccountId): PromiseErrorOr<null> {
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
      'shoppingCartService.emptyShoppingCart',
      userAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }
}

const shoppingCartService = new ShoppingCartServiceImpl();
export default shoppingCartService;
