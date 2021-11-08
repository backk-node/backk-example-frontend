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

export default class ShoppingCartService {
  static async getShoppingCart(userAccountId: UserAccountId): PromiseErrorOr<One<ShoppingCart>> {
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

  static async addToShoppingCart(
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
      'shoppingCartService.addToShoppingCart',
      userAccountIdAndSalesItemId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async removeFromShoppingCart(
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

  static async emptyShoppingCart(userAccountId: UserAccountId): PromiseErrorOr<null> {
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
