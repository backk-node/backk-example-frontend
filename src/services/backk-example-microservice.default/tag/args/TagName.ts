// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsAnyString, IsString, Lengths, MaxLength } from 'backk-frontend-utils';

export default class TagName {
  @MaxLength(Lengths._64)
  @IsAnyString()
  @IsString()
  name: string = '';
}
