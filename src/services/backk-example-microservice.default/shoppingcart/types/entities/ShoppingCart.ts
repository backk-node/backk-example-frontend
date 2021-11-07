// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsInstance,
  IsUndefined,
  Type,
  ValidateIf,
  ValidateNested,
  _IdAndUserAccountId,
} from 'backk-frontend-utils';
import ShoppingCartOrOrderSalesItem from './ShoppingCartOrOrderSalesItem';

export default class ShoppingCart extends _IdAndUserAccountId {
  @ArrayMinSize(0)
  @ArrayMaxSize(50)
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
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
  salesItems!: ShoppingCartOrOrderSalesItem[];
}
