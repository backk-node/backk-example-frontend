// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  DefaultSortingAndPagination,
  IsAnyString,
  IsIn,
  IsInstance,
  IsInt,
  Lengths,
  MaxLength,
  MinMax,
  SortBy,
  ValidateIf,
} from 'backk-frontend-utils';
import { Area } from '../enums/Area';
import { Category } from '../enums/Category';
import { Department } from '../enums/Department';

export default class GetSalesItemsArg extends DefaultSortingAndPagination {
  @MaxLength(Lengths._512)
  @IsAnyString()
  @ValidateIf((o: any) => o.textFilter !== undefined)
  textFilter?: string;

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ArrayUnique()
  @IsIn(['Area1', 'Area2', 'Area3'])
  @ValidateIf((o: any) => o.areas !== undefined)
  areas?: Area[];

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ArrayUnique()
  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productDepartments !== undefined)
  productDepartments?: Department[];

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ArrayUnique()
  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productCategories !== undefined)
  productCategories?: Category[];

  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ArrayUnique()
  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productSubCategories !== undefined)
  productSubCategories?: Category[];

  @IsInt()
  @MinMax(0, 1000000000)
  @ValidateIf((o: any) => o.minPrice !== undefined)
  minPrice?: number;

  @IsInt()
  @MinMax(0, 1000000000)
  @ValidateIf((o: any) => o.maxPrice !== undefined)
  maxPrice?: number;

  @IsInstance(SortBy, {
    each: true,
  })
  sortBys: SortBy[] = [
    {
      fieldName: '_id',
      sortDirection: 'DESC',
    },
    {
      subEntityPath: '*',
      fieldName: '_id',
      sortDirection: 'ASC',
    },
    {
      subEntityPath: '*',
      fieldName: 'id',
      sortDirection: 'ASC',
    },
  ];
}
