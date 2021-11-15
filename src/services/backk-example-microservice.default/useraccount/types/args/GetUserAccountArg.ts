// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  DefaultPostQueryOperations,
  IsInstance,
  IsString,
  SortBy,
  Type,
  ValidateNested,
} from 'backk-frontend-utils';

export default class GetUserAccountArg extends DefaultPostQueryOperations {
  @IsString({
    each: true,
  })
  excludeResponseFields: string[] = [];

  @IsInstance(SortBy, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => SortBy)
  sortBys: SortBy[] = [];
}
