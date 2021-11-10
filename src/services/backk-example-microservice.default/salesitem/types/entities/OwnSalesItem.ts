// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsAnyString,
  IsDataUri,
  IsDate,
  IsFloat,
  IsIn,
  IsStringOrObjectId,
  IsUndefined,
  Lengths,
  MaxLength,
  MaxLengthAndMatches,
  MinMax,
  Type,
  ValidateIf,
  Values,
} from 'backk-frontend-utils';
import { SalesItemState } from '../enums/SalesItemState';

export default class OwnSalesItem {
  @IsUndefined({
    groups: ['__backk_create__'],
  })
  @IsStringOrObjectId({
    groups: ['__backk_update__'],
  })
  @MaxLengthAndMatches(24, /^[a-f\d]{1,24}$/, {
    groups: ['__backk_update__'],
  })
  _id!: string;

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsDate({
    groups: ['__backk_none__'],
  })
  @Type(() => Date)
  @ValidateIf((o: any) => o.createdAtTimestamp !== undefined)
  createdAtTimestamp!: Date;

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsDate({
    groups: ['__backk_none__'],
  })
  @Type(() => Date)
  @ValidateIf((o: any) => o.lastModifiedTimestamp !== undefined)
  lastModifiedTimestamp!: Date;

  @MaxLength(Lengths._64)
  @IsAnyString()
  @ValidateIf((o: any) => o.title !== undefined)
  title!: string;

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

  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @IsIn(['forSale', 'reserved', 'sold'])
  @ValidateIf((o: any) => o.state !== undefined)
  state!: SalesItemState;
}
