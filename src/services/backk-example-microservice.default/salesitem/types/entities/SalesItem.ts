// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotUnique,
  IsAnyString,
  IsDataUri,
  IsFloat,
  IsIn,
  IsInstance,
  IsInt,
  IsUndefined,
  Lengths,
  MaxLength,
  MAX_INT_VALUE,
  MinMax,
  ValidateIf,
  Values,
  _IdAndVersionAndCreatedAtTimestampAndLastModifiedTimestampAndUserAccountId,
} from 'backk-frontend-utils';
import Tag from '../../../tag/entities/Tag';
import { Area } from '../enums/Area';
import { Category } from '../enums/Category';
import { Department } from '../enums/Department';
import { SalesItemState } from '../enums/SalesItemState';

export default class SalesItem extends _IdAndVersionAndCreatedAtTimestampAndLastModifiedTimestampAndUserAccountId {
  @MaxLength(Lengths._64)
  @IsAnyString()
  @ValidateIf((o: any) => o.title !== undefined)
  title!: string;

  @MaxLength(Lengths._1K)
  @IsAnyString()
  @ValidateIf((o: any) => o.description !== undefined)
  description!: string;

  @ArrayMinSize(0)
  @ArrayMaxSize(Values._25)
  @IsInstance(Tag, {
    each: true,
  })
  @ValidateIf((o: any) => o.tags !== undefined)
  tags!: Tag[];

  @IsIn(['Area1', 'Area2', 'Area3'])
  @ValidateIf((o: any) => o.area !== undefined)
  area!: Area;

  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productDepartment !== undefined)
  productDepartment!: Department;

  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productCategory !== undefined)
  productCategory!: Category;

  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productSubCategory !== undefined)
  productSubCategory!: Category;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.price !== undefined)
  price!: number;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.previousPrice !== null)
  @ValidateIf((o: any) => o.previousPrice !== undefined)
  previousPrice!: number | null;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.shippingCost !== undefined)
  shippingCost!: number;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @ValidateIf((o: any) => o.primaryImageDataUri !== undefined)
  primaryImageDataUri!: string;

  @MaxLength(Lengths._1M)
  @IsDataUri()
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.primaryImageThumbnailDataUri !== undefined)
  primaryImageThumbnailDataUri!: string;

  @MaxLength(Lengths._10M, {
    each: true,
  })
  @IsDataUri({
    each: true,
  })
  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ArrayNotUnique()
  @ValidateIf((o: any) => o.secondaryImageDataUris !== undefined)
  secondaryImageDataUris!: string[];

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsIn(['forSale', 'reserved', 'sold'])
  @ValidateIf((o: any) => o.state !== undefined)
  state!: SalesItemState;

  @IsInt()
  @MinMax(0, MAX_INT_VALUE)
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.likeCount !== undefined)
  likeCount!: number;
}
