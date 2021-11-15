// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsBoolean,
  IsIn,
  IsString,
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
  @IsString()
  userAccountId: string = '';

  @IsIn(['Paytrail', 'PayPal', 'Klarna'])
  paymentGateway: PaymentGateway = 'Paytrail';

  @IsString()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  shoppingCartId: string = '';

  @IsBoolean()
  iAgreeWithTermsAndConditions: boolean = false;

  @MaxLength(Lengths._4K)
  @IsUrl()
  @IsString()
  uiRedirectUrl: string = '';
}
