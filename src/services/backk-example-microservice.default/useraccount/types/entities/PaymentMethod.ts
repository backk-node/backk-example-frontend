// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  Id,
  IsCreditCard,
  IsCreditCardExpiration,
  IsCreditCardVerificationCode,
  ValidateIf,
} from 'backk-frontend-utils';

export default class PaymentMethod extends Id {
  @ValidateIf((o: any) => o.isDefault !== undefined)
  isDefault!: boolean;

  @ValidateIf((o: any) => o.paymentMethodType !== undefined)
  paymentMethodType!: 'creditCard';

  @IsCreditCard()
  @ValidateIf((o: any) => o.creditCardNumber !== undefined)
  creditCardNumber!: string;

  @IsCreditCardExpiration()
  @ValidateIf((o: any) => o.creditCardExpiration !== undefined)
  creditCardExpiration!: string;

  @IsCreditCardVerificationCode()
  @ValidateIf((o: any) => o.cardVerificationCode !== undefined)
  cardVerificationCode!: string;
}
