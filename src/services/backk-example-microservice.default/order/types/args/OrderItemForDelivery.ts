// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsStringOrObjectId,
  IsUrl,
  Lengths,
  MaxLength,
  MaxLengthAndMatches,
  ShouldBeTrueForObject,
  ValidateIf,
} from 'backk-frontend-utils'; // This is an auto-generated file from the respective .type file
import OrderItem from '../entities/OrderItem';

export default class OrderItemForDelivery {
  @IsStringOrObjectId()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  id!: string;

  @ShouldBeTrueForObject<OrderItem>(
    ({ state, deliveryTimestamp }) =>
      (state === 'toBeDelivered' && deliveryTimestamp === null) ||
      (state !== 'toBeDelivered' && deliveryTimestamp !== null)
  )
  @ValidateIf((o: any) => o.deliveryTimestamp !== null)
  deliveryTimestamp!: Date | null;

  @MaxLength(Lengths._3K)
  @IsUrl()
  @ShouldBeTrueForObject<OrderItem>(
    ({ state, trackingUrl }) =>
      (state === 'toBeDelivered' && trackingUrl === null) ||
      (state !== 'toBeDelivered' && trackingUrl !== null)
  )
  @ValidateIf((o: any) => o.trackingUrl !== null)
  trackingUrl!: string | null;
}
