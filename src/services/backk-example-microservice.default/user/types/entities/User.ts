// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsAnyString,
  IsDataUri,
  IsInstance,
  IsOneOf,
  IsStringOrObjectId,
  IsUndefined,
  Lengths,
  MaxLength,
  MaxLengthAndMatches,
  Type,
  ValidateIf,
  ValidateNested,
} from 'backk-frontend-utils';
import OwnSalesItem from '../../../salesitem/types/entities/OwnSalesItem';
import FollowedUserAccount from '../../../useraccount/types/entities/FollowedUserAccount';
import FollowingUserAccount from '../../../useraccount/types/entities/FollowingUserAccount';
import MicroserviceOptions from '../../../_backk/MicroserviceOptions'; // This is an auto-generated file from the respective .type file

export default class User {
  @IsUndefined({
    groups: ['__backk_create__'],
  })
  @IsStringOrObjectId({
    groups: ['__backk_update__'],
  })
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/, {
    groups: ['__backk_update__'],
  })
  _id!: string;

  @MaxLength(Lengths._128)
  @IsAnyString()
  @ValidateIf((o: any) => o.displayName !== undefined, {
    groups: ['__backk_update__'],
  })
  displayName!: string;

  @MaxLength(Lengths._256)
  @IsOneOf(
    'backk-example-microservice',
    'default',
    MicroserviceOptions.fqdn,
    MicroserviceOptions.accessTokenStorageEncryptionKey,
    'userAccountsService.getCities',
    'Tampere'
  )
  @ValidateIf((o: any) => o.city !== undefined, {
    groups: ['__backk_update__'],
  })
  city!: string;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @ValidateIf((o: any) => o.imageDataUri !== undefined, {
    groups: ['__backk_update__'],
  })
  imageDataUri!: string;

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
