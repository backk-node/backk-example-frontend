// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  Id,
  IsCreditCard,
  IsCreditCardExpiration,
  IsCreditCardVerificationCode,
  ValidateIf,
} from 'backk-frontend-utils';

export default class PaymentMethod extends Id {
  @ValidateIf((o: any) => o.isDefault !== undefined, {
    groups: ['__backk_update__'],
  })
  isDefault!: boolean | undefined;

  @ValidateIf((o: any) => o.paymentMethodType !== undefined, {
    groups: ['__backk_update__'],
  })
  paymentMethodType!: 'creditCard' | undefined;

  @IsCreditCard()
  @ValidateIf((o: any) => o.creditCardNumber !== undefined, {
    groups: ['__backk_update__'],
  })
  creditCardNumber!: string | undefined;

  @IsCreditCardExpiration()
  @ValidateIf((o: any) => o.creditCardExpiration !== undefined, {
    groups: ['__backk_update__'],
  })
  creditCardExpiration!: string | undefined;

  @IsCreditCardVerificationCode()
  @ValidateIf((o: any) => o.cardVerificationCode !== undefined, {
    groups: ['__backk_update__'],
  })
  cardVerificationCode!: string | undefined;
}
