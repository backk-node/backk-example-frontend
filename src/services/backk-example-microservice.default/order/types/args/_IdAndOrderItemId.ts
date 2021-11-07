// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsStringOrObjectId, MaxLengthAndMatches, _IdAndVersion } from 'backk-frontend-utils';

export default class _IdAndOrderItemId extends _IdAndVersion {
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  orderItemId!: string;
}
