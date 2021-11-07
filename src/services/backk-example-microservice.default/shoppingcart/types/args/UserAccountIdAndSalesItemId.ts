// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsStringOrObjectId, MaxLengthAndMatches, UserAccountId } from 'backk-frontend-utils';

export default class UserAccountIdAndSalesItemId extends UserAccountId {
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  salesItemId!: string;
}
