// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  BaseUserAccount,
  IsAnyString,
  IsDataUri,
  IsEmail,
  IsInstance,
  IsOneOf,
  IsPhoneNumber,
  IsPostalCode,
  IsUndefined,
  Lengths,
  MaxLength,
  ShouldBeTrueForObject,
  ValidateIf,
} from 'backk-frontend-utils';
import uniqBy from 'lodash/uniqBy';
import Order from '../../../order/types/entities/Order';
import FavoriteSalesItem from '../../../salesitem/types/entities/FavoriteSalesItem';
import OwnSalesItem from '../../../salesitem/types/entities/OwnSalesItem';
import MicroserviceOptions from '../../../_backk/MicroserviceOptions';
import FollowedUserAccount from './FollowedUserAccount';
import FollowingUserAccount from './FollowingUserAccount';
import PaymentMethod from './PaymentMethod';

export default class UserAccount extends BaseUserAccount {
  @MaxLength(Lengths._128)
  @IsAnyString()
  @ValidateIf((o: any) => o.displayName !== undefined)
  displayName!: string;

  @MaxLength(Lengths._64)
  @IsAnyString()
  @ValidateIf((o: any) => o.firstName !== undefined)
  firstName!: string;

  @MaxLength(Lengths._64)
  @IsAnyString()
  @ValidateIf((o: any) => o.lastName !== undefined)
  lastName!: string;

  @IsEmail()
  @ValidateIf((o: any) => o.email !== undefined)
  email!: string;

  /* this is an example of property documentation */

  @MaxLength(Lengths._512)
  @IsAnyString()
  @ValidateIf((o: any) => o.streetAddress !== undefined)
  streetAddress!: string;

  @IsPostalCode('FI')
  @ValidateIf((o: any) => o.postalCode !== undefined)
  postalCode!: string;

  @MaxLength(Lengths._256)
  @IsOneOf(
    'backk-example-microservice',
    'default',
    MicroserviceOptions.fqdn,
    MicroserviceOptions.accessTokenStorageEncryptionKey,
    'userAccountsService.getCities',
    'Tampere'
  )
  @ValidateIf((o: any) => o.city !== undefined)
  city!: string;

  @IsPhoneNumber('FI')
  @ValidateIf((o: any) => o.phoneNumber !== undefined)
  phoneNumber!: string;

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.commissionDiscountPercentage !== undefined)
  commissionDiscountPercentage!: 0 | 25 | 50;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @ValidateIf((o: any) => o.imageDataUri !== undefined)
  imageDataUri!: string;

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ShouldBeTrueForObject<UserAccount>(
    ({ paymentMethods }) => paymentMethods.filter(({ isDefault }) => isDefault).length === 1,
    'There should be exactly one default payment method'
  )
  @ShouldBeTrueForObject<UserAccount>(
    ({ paymentMethods }) =>
      uniqBy(paymentMethods, ({ creditCardNumber }) => creditCardNumber).length === paymentMethods.length,
    'Credit card numbers in payment methods must be unique'
  )
  @IsInstance(PaymentMethod, {
    each: true,
  })
  @ValidateIf((o: any) => o.paymentMethods !== undefined)
  paymentMethods!: PaymentMethod[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(FavoriteSalesItem, {
    each: true,
  })
  @ValidateIf((o: any) => o.favoriteSalesItems !== undefined)
  favoriteSalesItems!: FavoriteSalesItem[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(OwnSalesItem, {
    each: true,
  })
  @ValidateIf((o: any) => o.ownSalesItems !== undefined)
  ownSalesItems!: OwnSalesItem[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(Order, {
    each: true,
  })
  @ValidateIf((o: any) => o.orders !== undefined)
  orders!: Order[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(FollowedUserAccount, {
    each: true,
  })
  @ValidateIf((o: any) => o.followedUserAccounts !== undefined)
  followedUserAccounts!: FollowedUserAccount[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(FollowingUserAccount, {
    each: true,
  })
  @ValidateIf((o: any) => o.followingUserAccounts !== undefined)
  followingUserAccounts!: FollowingUserAccount[];
}
