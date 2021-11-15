// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { DefaultPostQueryOperations, IsAnyString, IsString, Lengths, MaxLength } from 'backk-frontend-utils';

export default class GetUsersArg extends DefaultPostQueryOperations {
  @MaxLength(Lengths._256)
  @IsAnyString()
  @IsString()
  displayNameFilter: string = '';
}
