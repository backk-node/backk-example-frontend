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
  ValidateIf,
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
  @ValidateIf((o: any) => o.displayName !== undefined)
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
  @ValidateIf((o: any) => o.city !== undefined)
  city!: string;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @ValidateIf((o: any) => o.imageDataUri !== undefined)
  imageDataUri!: string;

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
