// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsBigInt,
  IsStringOrObjectId,
  IsUndefined,
  Max,
  MaxLengthAndMatches,
  Min,
  Values,
} from 'backk-frontend-utils';

export default class RemoveOrderItemArg {
  @IsUndefined({
    groups: ['__backk_create__'],
  })
  @IsStringOrObjectId({
    groups: ['__backk_update__'],
  })
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/, {
    groups: ['__backk_update__'],
  })
  _id!: string | undefined;

  @IsUndefined({
    groups: ['__backk_create__'],
  })
  @IsBigInt({
    groups: ['__backk_none__'],
  })
  @Min(-1)
  @Max(Number.MAX_SAFE_INTEGER)
  version!: number | undefined;

  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  orderItemId!: string;

  @IsStringOrObjectId()
  @MaxLengthAndMatches(Values._24, /^[a-f\d]{1,24}$/)
  userAccountId!: string;
}
