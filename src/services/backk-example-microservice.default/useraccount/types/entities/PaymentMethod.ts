// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  Id,
  IsBoolean,
  IsCreditCard,
  IsCreditCardExpiration,
  IsCreditCardVerificationCode,
  IsString,
  ValidateIf,
} from 'backk-frontend-utils';

export default class PaymentMethod extends Id {
  @IsBoolean()
  @ValidateIf((o: any) => o.isDefault !== undefined, {
    groups: ['__backk_update__'],
  })
  isDefault: boolean | undefined = false;

  @ValidateIf((o: any) => o.paymentMethodType !== undefined, {
    groups: ['__backk_update__'],
  })
  paymentMethodType: 'creditCard' | undefined = 'creditCard';

  @IsCreditCard()
  @IsString()
  @ValidateIf((o: any) => o.creditCardNumber !== undefined, {
    groups: ['__backk_update__'],
  })
  creditCardNumber: string | undefined = '';

  @IsCreditCardExpiration()
  @IsString()
  @ValidateIf((o: any) => o.creditCardExpiration !== undefined, {
    groups: ['__backk_update__'],
  })
  creditCardExpiration: string | undefined = '';

  @IsCreditCardVerificationCode()
  @IsString()
  @ValidateIf((o: any) => o.cardVerificationCode !== undefined, {
    groups: ['__backk_update__'],
  })
  cardVerificationCode: string | undefined = '';
}
