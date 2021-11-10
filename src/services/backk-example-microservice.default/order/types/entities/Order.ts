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
  ValidateIf,
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
  @ValidateIf((o: any) => o.orderItems !== undefined)
  orderItems!: OrderItem[];

  @IsIn(['Paytrail', 'PayPal', 'Klarna'])
  @ValidateIf((o: any) => o.paymentGateway !== undefined)
  paymentGateway: PaymentGateway = 'Paytrail';

  @MaxLength(Lengths._256)
  @IsAlphanumeric()
  @ValidateIf((o: any) => o.transactionId !== null)
  @ValidateIf((o: any) => o.transactionId !== undefined)
  transactionId!: string | null;

  @ValidateIf((o: any) => o.transactionTimestamp !== null)
  @ValidateIf((o: any) => o.transactionTimestamp !== undefined)
  transactionTimestamp!: Date | null;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.paymentAmount !== null)
  @ValidateIf((o: any) => o.paymentAmount !== undefined)
  paymentAmount!: number | null;
}
