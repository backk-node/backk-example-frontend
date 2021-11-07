// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  One,
  PromiseErrorOr,
  UserAccountId,
  validateServiceFunctionArgumentOrThrow,
} from 'backk-frontend-utils';
import EncryptionKeyManager from '../_backk/EncryptionKeyManager';
import UserAccountIdAndSalesItemId from './types/args/UserAccountIdAndSalesItemId';
import ShoppingCart from './types/entities/ShoppingCart';

export default class ShoppingCartService {
  static async getShoppingCart(userAccountId: UserAccountId): PromiseErrorOr<One<ShoppingCart>> {
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
      'shoppingCartService.getShoppingCart',
      userAccountId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
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
      'shoppingCartService.addToShoppingCart',
      userAccountIdAndSalesItemId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
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
      'shoppingCartService.removeFromShoppingCart',
      userAccountIdAndSalesItemId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async emptyShoppingCart(userAccountId: UserAccountId): PromiseErrorOr<null> {
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
      'shoppingCartService.emptyShoppingCart',
      userAccountId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }
}
