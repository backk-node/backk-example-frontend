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
  Type,
  ValidateIf,
  ValidateNested,
} from 'backk-frontend-utils';
import ShoppingCartOrOrderSalesItem from '../../../shoppingcart/types/entities/ShoppingCartOrOrderSalesItem';
import { OrderItemState } from '../enum/OrderItemState';

export default class OrderItem extends Id {
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @IsInstance(ShoppingCartOrOrderSalesItem, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => ShoppingCartOrOrderSalesItem)
  @ValidateIf((o: any) => o.salesItems !== undefined, {
    groups: ['__backk_update__'],
  })
  salesItems!: ShoppingCartOrOrderSalesItem[] | undefined;

  @ShouldBeTrueForObject<OrderItem>(
    ({ state, deliveryTimestamp }) =>
      (state === 'toBeDelivered' && deliveryTimestamp === null) ||
      (state !== 'toBeDelivered' && deliveryTimestamp !== null)
  )
  @ValidateIf((o: any) => o.deliveryTimestamp !== null)
  @ValidateIf((o: any) => o.deliveryTimestamp !== undefined, {
    groups: ['__backk_update__'],
  })
  deliveryTimestamp!: Date | null | undefined;

  @IsIn(['toBeDelivered', 'delivering', 'delivered', 'returning', 'returned'])
  @ValidateIf((o: any) => o.state !== undefined, {
    groups: ['__backk_update__'],
  })
  state!: OrderItemState | undefined;

  @MaxLength(Lengths._3K)
  @IsUrl()
  @ShouldBeTrueForObject<OrderItem>(
    ({ state, trackingUrl }) =>
      (state === 'toBeDelivered' && trackingUrl === null) ||
      (state !== 'toBeDelivered' && trackingUrl !== null)
  )
  @ValidateIf((o: any) => o.trackingUrl !== null)
  @ValidateIf((o: any) => o.trackingUrl !== undefined, {
    groups: ['__backk_update__'],
  })
  trackingUrl!: string | null | undefined;
}
