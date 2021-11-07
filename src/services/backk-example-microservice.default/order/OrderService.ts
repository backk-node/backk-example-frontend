// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  One,
  PromiseErrorOr,
  validateServiceFunctionArgumentOrThrow,
  _Id,
} from 'backk-frontend-utils';
import EncryptionKeyManager from '../_backk/EncryptionKeyManager';
import DeliverOrderItemArg from './types/args/DeliverOrderItemArg';
import PayOrderArg from './types/args/PayOrderArg';
import PlaceOrderArg from './types/args/PlaceOrderArg';
import RemoveOrderItemArg from './types/args/RemoveOrderItemArg';
import _IdAndOrderItemId from './types/args/_IdAndOrderItemId';
import Order from './types/entities/Order';

export default class OrderService {
  static async placeOrder(placeOrderArg: PlaceOrderArg): PromiseErrorOr<One<Order>> {
    try {
      await validateServiceFunctionArgumentOrThrow(placeOrderArg, PlaceOrderArg, 'create');
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
      'orderService.placeOrder',
      placeOrderArg,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async getOrder(_id: _Id): PromiseErrorOr<One<Order>> {
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
      'orderService.getOrder',
      _id,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async discardUnpaidOrder(_id: _Id): PromiseErrorOr<null> {
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
      'orderService.discardUnpaidOrder',
      _id,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async payOrder(payOrderArg: PayOrderArg): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(payOrderArg, PayOrderArg, 'update');
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
      'orderService.payOrder',
      payOrderArg,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async removeUndeliveredOrderItem(removeOrderItemArg: RemoveOrderItemArg): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(removeOrderItemArg, RemoveOrderItemArg, 'update');
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
      'orderService.removeUndeliveredOrderItem',
      removeOrderItemArg,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async deleteUndeliveredPaidOrder(_id: _Id): PromiseErrorOr<null> {
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
      'orderService.deleteUndeliveredPaidOrder',
      _id,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async deliverOrderItem(deliverOrderItemArg: DeliverOrderItemArg): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(deliverOrderItemArg, DeliverOrderItemArg, 'update');
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
      'orderService.deliverOrderItem',
      deliverOrderItemArg,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async receiveOrderItem(_idAndOrderItemId: _IdAndOrderItemId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndOrderItemId, _IdAndOrderItemId, 'update');
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
      'orderService.receiveOrderItem',
      _idAndOrderItemId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async returnOrderItem(_idAndOrderItemId: _IdAndOrderItemId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndOrderItemId, _IdAndOrderItemId, 'update');
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
      'orderService.returnOrderItem',
      _idAndOrderItemId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }

  static async receiveReturnedOrderItem(_idAndOrderItemId: _IdAndOrderItemId): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_idAndOrderItemId, _IdAndOrderItemId, 'update');
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
      'orderService.receiveReturnedOrderItem',
      _idAndOrderItemId,
      'default',
      EncryptionKeyManager.accessTokenStorageEncryptionKey
    );
  }
}
