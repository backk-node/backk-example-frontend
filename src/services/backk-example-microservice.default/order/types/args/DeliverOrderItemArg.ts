// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsBigInt,
  IsInstance,
  IsStringOrObjectId,
  IsUndefined,
  Max,
  MaxLengthAndMatches,
  Min,
} from 'backk-frontend-utils';
import OrderItemForDelivery from './OrderItemForDelivery';

export default class DeliverOrderItemArg {
  @IsUndefined({
    groups: ['__backk_create__'],
  })
  @IsStringOrObjectId({
    groups: ['__backk_update__'],
  })
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/, {
    groups: ['__backk_update__'],
  })
  _id!: string;

  @IsUndefined({
    groups: ['__backk_create__'],
  })
  @IsBigInt({
    groups: ['__backk_none__'],
  })
  @Min(-1)
  @Max(Number.MAX_SAFE_INTEGER)
  version!: number;

  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @IsInstance(OrderItemForDelivery, {
    each: true,
  })
  orderItems!: OrderItemForDelivery[];
}
