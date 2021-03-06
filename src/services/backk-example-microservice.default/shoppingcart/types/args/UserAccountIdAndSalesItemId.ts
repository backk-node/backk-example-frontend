// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsString, IsStringOrObjectId, MaxLengthAndMatches, UserAccountId } from 'backk-frontend-utils';

export default class UserAccountIdAndSalesItemId extends UserAccountId {
  @IsString()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  salesItemId: string = '';
}
