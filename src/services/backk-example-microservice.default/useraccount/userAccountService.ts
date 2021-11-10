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

/** Users service doc goes here
 * - jee
 * - jaa
 * **/
export interface UserAccountService {
  // createUserAccount documentation goes here..
  createUserAccount(arg: UserAccount): PromiseErrorOr<One<UserAccount>>;
  getIdBySubject(arg: Subject): PromiseErrorOr<One<_Id>>;
  getUserAccount(arg: GetUserAccountArg): PromiseErrorOr<One<UserAccount>>;
  followUser(arg: _IdAndFollowedUserAccountId): PromiseErrorOr<null>;
  unfollowUser(arg: _IdAndFollowedUserAccountId): PromiseErrorOr<null>;
  addToFavoriteSalesItems(arg: _IdAndSalesItemId): PromiseErrorOr<null>;
  removeFromFavoriteSalesItems(arg: _IdAndSalesItemId): PromiseErrorOr<null>;
  updateUserAccount(arg: UserAccount): PromiseErrorOr<null>;
  deleteUserAccount(arg: _Id): PromiseErrorOr<null>;
  getCities(): PromiseErrorOr<Many<Value>>;
}

export class UserAccountServiceImpl implements UserAccountService {
  async createUserAccount(userAccount: UserAccount): PromiseErrorOr<One<UserAccount>> {
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

  async getIdBySubject(subject: Subject): PromiseErrorOr<One<_Id>> {
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

  async getUserAccount(getUserAccountArg: GetUserAccountArg): PromiseErrorOr<One<UserAccount>> {
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

  async followUser(_idAndFollowedUserAccountId: _IdAndFollowedUserAccountId): PromiseErrorOr<null> {
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

  async unfollowUser(_idAndFollowedUserAccountId: _IdAndFollowedUserAccountId): PromiseErrorOr<null> {
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

  async addToFavoriteSalesItems(_idAndSalesItemId: _IdAndSalesItemId): PromiseErrorOr<null> {
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

  async removeFromFavoriteSalesItems(_idAndSalesItemId: _IdAndSalesItemId): PromiseErrorOr<null> {
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

  async updateUserAccount(userAccount: UserAccount): PromiseErrorOr<null> {
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

  async deleteUserAccount(_id: _Id): PromiseErrorOr<null> {
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

  async getCities(): PromiseErrorOr<Many<Value>> {
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

const userAccountService = new UserAccountServiceImpl();
export default userAccountService;
