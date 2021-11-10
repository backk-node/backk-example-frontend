// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  Id,
  IsIn,
  IsInstance,
  IsUrl,
  Lengths,
  MaxLength,
  ShouldBeTrueForObject,
  ValidateIf,
} from 'backk-frontend-utils';
import ShoppingCartOrOrderSalesItem from '../../../shoppingcart/types/entities/ShoppingCartOrOrderSalesItem';
import { OrderItemState } from '../enum/OrderItemState';

export default class OrderItem extends Id {
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @IsInstance(ShoppingCartOrOrderSalesItem, {
    each: true,
  })
  @ValidateIf((o: any) => o.salesItems !== undefined)
  salesItems!: ShoppingCartOrOrderSalesItem[];

  @ShouldBeTrueForObject<OrderItem>(
    ({ state, deliveryTimestamp }) =>
      (state === 'toBeDelivered' && deliveryTimestamp === null) ||
      (state !== 'toBeDelivered' && deliveryTimestamp !== null)
  )
  @ValidateIf((o: any) => o.deliveryTimestamp !== null)
  @ValidateIf((o: any) => o.deliveryTimestamp !== undefined)
  deliveryTimestamp!: Date | null;

  @IsIn(['toBeDelivered', 'delivering', 'delivered', 'returning', 'returned'])
  @ValidateIf((o: any) => o.state !== undefined)
  state!: OrderItemState;

  @MaxLength(Lengths._3K)
  @IsUrl()
  @ShouldBeTrueForObject<OrderItem>(
    ({ state, trackingUrl }) =>
      (state === 'toBeDelivered' && trackingUrl === null) ||
      (state !== 'toBeDelivered' && trackingUrl !== null)
  )
  @ValidateIf((o: any) => o.trackingUrl !== null)
  @ValidateIf((o: any) => o.trackingUrl !== undefined)
  trackingUrl!: string | null;
}
