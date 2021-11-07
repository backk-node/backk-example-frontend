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
  Type,
  ValidateIf,
  ValidateNested,
} from 'backk-frontend-utils';
import _ from 'lodash';
import Order from '../../../order/types/entities/Order';
import FavoriteSalesItem from '../../../salesitem/types/entities/FavoriteSalesItem';
import OwnSalesItem from '../../../salesitem/types/entities/OwnSalesItem';
import FollowedUserAccount from './FollowedUserAccount';
import FollowingUserAccount from './FollowingUserAccount';
import PaymentMethod from './PaymentMethod';

export default class UserAccount extends BaseUserAccount {
  @MaxLength(Lengths._128)
  @IsAnyString()
  @ValidateIf((o: any) => o.displayName !== undefined, {
    groups: ['__backk_update__'],
  })
  displayName!: string;

  @MaxLength(Lengths._64)
  @IsAnyString()
  @ValidateIf((o: any) => o.firstName !== undefined, {
    groups: ['__backk_update__'],
  })
  firstName!: string;

  @MaxLength(Lengths._64)
  @IsAnyString()
  @ValidateIf((o: any) => o.lastName !== undefined, {
    groups: ['__backk_update__'],
  })
  lastName!: string;

  @IsEmail()
  @ValidateIf((o: any) => o.email !== undefined, {
    groups: ['__backk_update__'],
  })
  email!: string;

  /* this is an example of property documentation */

  @MaxLength(Lengths._512)
  @IsAnyString()
  @ValidateIf((o: any) => o.streetAddress !== undefined, {
    groups: ['__backk_update__'],
  })
  streetAddress!: string;

  @IsPostalCode('FI')
  @ValidateIf((o: any) => o.postalCode !== undefined, {
    groups: ['__backk_update__'],
  })
  postalCode!: string;

  @MaxLength(Lengths._256)
  @IsOneOf('userAccountsService.getCities', 'Tampere')
  @ValidateIf((o: any) => o.city !== undefined, {
    groups: ['__backk_update__'],
  })
  city!: string;

  @IsPhoneNumber('FI')
  @ValidateIf((o: any) => o.phoneNumber !== undefined, {
    groups: ['__backk_update__'],
  })
  phoneNumber!: string;

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.commissionDiscountPercentage !== undefined, {
    groups: ['__backk_update__'],
  })
  commissionDiscountPercentage!: 0 | 25 | 50;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @ValidateIf((o: any) => o.imageDataUri !== undefined, {
    groups: ['__backk_update__'],
  })
  imageDataUri!: string;

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ShouldBeTrueForObject<UserAccount>(
    ({ paymentMethods }) => paymentMethods.filter(({ isDefault }) => isDefault).length === 1,
    'There should be exactly one default payment method'
  )
  @ShouldBeTrueForObject<UserAccount>(
    ({ paymentMethods }) =>
      _.uniqBy(paymentMethods, ({ creditCardNumber }) => creditCardNumber).length === paymentMethods.length,
    'Credit card numbers in payment methods must be unique'
  )
  @IsInstance(PaymentMethod, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => PaymentMethod)
  @ValidateIf((o: any) => o.paymentMethods !== undefined, {
    groups: ['__backk_update__'],
  })
  paymentMethods!: PaymentMethod[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(FavoriteSalesItem, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => FavoriteSalesItem)
  @ValidateIf((o: any) => o.favoriteSalesItems !== undefined, {
    groups: ['__backk_update__'],
  })
  favoriteSalesItems!: FavoriteSalesItem[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(OwnSalesItem, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => OwnSalesItem)
  @ValidateIf((o: any) => o.ownSalesItems !== undefined, {
    groups: ['__backk_update__'],
  })
  ownSalesItems!: OwnSalesItem[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(Order, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => Order)
  @ValidateIf((o: any) => o.orders !== undefined, {
    groups: ['__backk_update__'],
  })
  orders!: Order[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(FollowedUserAccount, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => FollowedUserAccount)
  @ValidateIf((o: any) => o.followedUserAccounts !== undefined, {
    groups: ['__backk_update__'],
  })
  followedUserAccounts!: FollowedUserAccount[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsInstance(FollowingUserAccount, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => FollowingUserAccount)
  @ValidateIf((o: any) => o.followingUserAccounts !== undefined, {
    groups: ['__backk_update__'],
  })
  followingUserAccounts!: FollowingUserAccount[];
}
