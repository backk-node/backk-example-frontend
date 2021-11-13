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
  Type,
  ValidateIf,
  ValidateNested,
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
  @ValidateIf((o: any) => o.title !== undefined, {
    groups: ['__backk_update__'],
  })
  title!: string | undefined;

  @MaxLength(Lengths._1K)
  @IsAnyString()
  @ValidateIf((o: any) => o.description !== undefined, {
    groups: ['__backk_update__'],
  })
  description!: string | undefined;

  @ArrayMinSize(0)
  @ArrayMaxSize(Values._25)
  @IsInstance(Tag, {
    each: true,
  })
  @ValidateNested({
    each: true,
  })
  @Type(() => Tag)
  @ValidateIf((o: any) => o.tags !== undefined, {
    groups: ['__backk_update__'],
  })
  tags!: Tag[] | undefined;

  @IsIn(['Area1', 'Area2', 'Area3'])
  @ValidateIf((o: any) => o.area !== undefined, {
    groups: ['__backk_update__'],
  })
  area!: Area | undefined;

  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productDepartment !== undefined, {
    groups: ['__backk_update__'],
  })
  productDepartment!: Department | undefined;

  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productCategory !== undefined, {
    groups: ['__backk_update__'],
  })
  productCategory!: Category | undefined;

  @IsIn(['Vehicles', 'Clothes'])
  @ValidateIf((o: any) => o.productSubCategory !== undefined, {
    groups: ['__backk_update__'],
  })
  productSubCategory!: Category | undefined;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.price !== undefined, {
    groups: ['__backk_update__'],
  })
  price!: number | undefined;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.previousPrice !== null)
  @ValidateIf((o: any) => o.previousPrice !== undefined, {
    groups: ['__backk_update__'],
  })
  previousPrice!: number | null | undefined;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.shippingCost !== undefined, {
    groups: ['__backk_update__'],
  })
  shippingCost!: number | undefined;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @ValidateIf((o: any) => o.primaryImageDataUri !== undefined, {
    groups: ['__backk_update__'],
  })
  primaryImageDataUri!: string | undefined;

  @MaxLength(Lengths._1M)
  @IsDataUri()
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.primaryImageThumbnailDataUri !== undefined, {
    groups: ['__backk_update__'],
  })
  primaryImageThumbnailDataUri!: string | undefined;

  @MaxLength(Lengths._10M, {
    each: true,
  })
  @IsDataUri({
    each: true,
  })
  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @ArrayNotUnique()
  @ValidateIf((o: any) => o.secondaryImageDataUris !== undefined, {
    groups: ['__backk_update__'],
  })
  secondaryImageDataUris!: string[] | undefined;

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.state !== undefined, {
    groups: ['__backk_update__'],
  })
  state!: SalesItemState | undefined;

  @IsInt()
  @MinMax(0, MAX_INT_VALUE)
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.likeCount !== undefined, {
    groups: ['__backk_update__'],
  })
  likeCount!: number | undefined;
}
