// DO NOT MODIFY THIS FILE! This is an auto-generated file
// This is an auto-generated file from the respective .type file
// DO NOT MODIFY THIS FILE! Updates should be made to the respective .type file only
// This file can be generated from the respective .type file by running npm script 'generateTypes'
import { IsAnyString, Lengths, MaxLength } from 'backk-frontend-utils';

export default class TagName {
  @MaxLength(Lengths._64)
  @IsAnyString()
  name!: string;
}
