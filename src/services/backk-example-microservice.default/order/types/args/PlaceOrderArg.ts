// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsIn,
  IsStringOrObjectId,
  IsUrl,
  Lengths,
  MaxLength,
  MaxLengthAndMatches,
} from 'backk-frontend-utils';
import { PaymentGateway } from '../enum/PaymentGateway';

export default class PlaceOrderArg {
  @IsStringOrObjectId()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  userAccountId!: string;

  @IsIn(['Paytrail', 'PayPal', 'Klarna'])
  paymentGateway: PaymentGateway = 'Paytrail';

  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  shoppingCartId!: string;

  iAgreeWithTermsAndConditions!: boolean;

  @MaxLength(Lengths._4K)
  @IsUrl()
  uiRedirectUrl!: string;
}
