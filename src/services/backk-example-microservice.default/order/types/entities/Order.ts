// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsAlphanumeric,
  IsFloat,
  IsIn,
  IsInstance,
  Lengths,
  MaxLength,
  MinMax,
  Type,
  ValidateIf,
  ValidateNested,
  Values,
  _IdAndVersionAndCreatedAtTimestampAndLastModifiedTimestampAndUserAccountId,
} from 'backk-frontend-utils';
import { PaymentGateway } from '../enum/PaymentGateway';
import OrderItem from './OrderItem';

export default class Order extends _IdAndVersionAndCreatedAtTimestampAndLastModifiedTimestampAndUserAccountId {
  @ArrayMinSize(1)
  @ArrayMaxSize(Values._50)
  @IsInstance(OrderItem, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => OrderItem)
  @ValidateIf((o: any) => o.orderItems !== undefined, {
    groups: ['__backk_update__'],
  })
  orderItems!: OrderItem[] | undefined;

  @IsIn(['Paytrail', 'PayPal', 'Klarna'])
  @ValidateIf((o: any) => o.paymentGateway !== undefined, {
    groups: ['__backk_update__'],
  })
  paymentGateway: PaymentGateway | undefined = 'Paytrail';

  @MaxLength(Lengths._256)
  @IsAlphanumeric()
  @ValidateIf((o: any) => o.transactionId !== null)
  @ValidateIf((o: any) => o.transactionId !== undefined, {
    groups: ['__backk_update__'],
  })
  transactionId!: string | null | undefined;

  @ValidateIf((o: any) => o.transactionTimestamp !== null)
  @ValidateIf((o: any) => o.transactionTimestamp !== undefined, {
    groups: ['__backk_update__'],
  })
  transactionTimestamp!: Date | null | undefined;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.paymentAmount !== null)
  @ValidateIf((o: any) => o.paymentAmount !== undefined, {
    groups: ['__backk_update__'],
  })
  paymentAmount!: number | null | undefined;
}
