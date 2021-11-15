// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsString, IsStringOrObjectId, MaxLengthAndMatches, _IdAndVersion } from 'backk-frontend-utils';

export default class _IdAndOrderItemId extends _IdAndVersion {
  @IsString()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  orderItemId: string = '';
}
