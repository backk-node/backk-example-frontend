// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  Many,
  One,
  PromiseErrorOr,
  Subject,
  validateServiceFunctionArgumentOrThrow,
  Value,
  _Id,
} from 'backk-frontend-utils';
import MicroserviceOptions from '../_backk/MicroserviceOptions';
import GetUserAccountArg from './types/args/GetUserAccountArg';
import _IdAndFollowedUserAccountId from './types/args/_IdAndFollowedUserAccountId';
import _IdAndSalesItemId from './types/args/_IdAndSalesItemId';
import UserAccount from './types/entities/UserAccount';

export default class UserAccountService {
  static async createUserAccount(userAccount: UserAccount): PromiseErrorOr<One<UserAccount>> {
    try {
      await validateServiceFunctionArgumentOrThrow(userAccount, UserAccount, 'create');
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
      'userAccountService.createUserAccount',
      userAccount,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async getIdBySubject(subject: Subject): PromiseErrorOr<One<_Id>> {
    try {
      await validateServiceFunctionArgumentOrThrow(subject, Subject, 'other');
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
      'userAccountService.getIdBySubject',
      subject,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async getUserAccount(getUserAccountArg: GetUserAccountArg): PromiseErrorOr<One<UserAccount>> {
    try {
      await validateServiceFunctionArgumentOrThrow(getUserAccountArg, GetUserAccountArg, 'other');
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
      'userAccountService.getUserAccount',
      getUserAccountArg,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async followUser(_idAndFollowedUserAccountId: _IdAndFollowedUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        _idAndFollowedUserAccountId,
        _IdAndFollowedUserAccountId,
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
      'userAccountService.followUser',
      _idAndFollowedUserAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async unfollowUser(_idAndFollowedUserAccountId: _IdAndFollowedUserAccountId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        _idAndFollowedUserAccountId,
        _IdAndFollowedUserAccountId,
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
      'userAccountService.unfollowUser',
      _idAndFollowedUserAccountId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async addToFavoriteSalesItems(_idAndSalesItemId: _IdAndSalesItemId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndSalesItemId, _IdAndSalesItemId, 'update');
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
      'userAccountService.addToFavoriteSalesItems',
      _idAndSalesItemId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async removeFromFavoriteSalesItems(_idAndSalesItemId: _IdAndSalesItemId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndSalesItemId, _IdAndSalesItemId, 'update');
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
      'userAccountService.removeFromFavoriteSalesItems',
      _idAndSalesItemId,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async updateUserAccount(userAccount: UserAccount): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(userAccount, UserAccount, 'update');
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
      'userAccountService.updateUserAccount',
      userAccount,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async deleteUserAccount(_id: _Id): PromiseErrorOr<null> {
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
      'userAccountService.deleteUserAccount',
      _id,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async getCities(): PromiseErrorOr<Many<Value>> {
    return callRemoteService(
      'backk-example-microservice',
      'userAccountService.getCities',
      undefined,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }
}
