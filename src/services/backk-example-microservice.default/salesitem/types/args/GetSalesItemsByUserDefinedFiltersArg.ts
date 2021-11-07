// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsInstance,
  Type,
  UserDefinedFilter,
  ValidateNested,
} from 'backk-frontend-utils';

export default class GetSalesItemsByUserDefinedFiltersArg {
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsInstance(UserDefinedFilter, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => UserDefinedFilter)
  filters!: UserDefinedFilter[];
}
