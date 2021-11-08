// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  Many,
  One,
  PromiseErrorOr,
  validateServiceFunctionArgumentOrThrow,
  _Id,
} from 'backk-frontend-utils';
import MicroserviceOptions from '../_backk/MicroserviceOptions';
import GetUsersArg from './/types/args/GetUsersArg';
import User from './types/entities/User';

export default class UserService {
  static async getUsers(getUsersArg: GetUsersArg): PromiseErrorOr<Many<User>> {
    try {
      await validateServiceFunctionArgumentOrThrow(getUsersArg, GetUsersArg, 'other');
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
      'userService.getUsers',
      getUsersArg,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  static async getUser(_id: _Id): PromiseErrorOr<One<User>> {
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
      'userService.getUser',
      _id,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }
}
