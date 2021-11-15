// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsString,
  IsStringOrObjectId,
  MaxLengthAndMatches,
  ShouldBeTrueForObject,
  _Id,
} from 'backk-frontend-utils';

export default class _IdAndFollowedUserAccountId extends _Id {
  @ShouldBeTrueForObject<_IdAndFollowedUserAccountId>(
    ({ _id, followedUserAccountId }) => _id !== followedUserAccountId,
    '_id and followedUserAccountId may not be the same'
  )
  @IsString()
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/)
  @IsStringOrObjectId()
  followedUserAccountId: string = '';
}
