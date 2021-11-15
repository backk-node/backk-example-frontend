// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsString, IsStringOrObjectId, MaxLengthAndMatches, _Id } from 'backk-frontend-utils';

export default class _IdAndSalesItemId extends _Id {
  @IsString()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  salesItemId: string = '';
}
