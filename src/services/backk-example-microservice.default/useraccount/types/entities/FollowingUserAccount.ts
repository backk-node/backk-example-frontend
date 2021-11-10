// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsAnyString,
  IsDataUri,
  IsOneOf,
  IsStringOrObjectId,
  IsUndefined,
  Lengths,
  MaxLength,
  MaxLengthAndMatches,
  ValidateIf,
} from 'backk-frontend-utils';
import MicroserviceOptions from '../../../_backk/MicroserviceOptions'; // This is an auto-generated file from the respective .type file

export default class FollowingUserAccount {
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
}
