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
} from 'backk-frontend-utils'; // This is an auto-generated file from the respective .type file
import OwnSalesItem from '../../../salesitem/types/entities/OwnSalesItem';
import getCities from '../../validation/getCities';

export default class FollowedUserAccount {
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
  @IsOneOf(getCities, 'userAccountsService.getCities', 'Tampere')
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
}
