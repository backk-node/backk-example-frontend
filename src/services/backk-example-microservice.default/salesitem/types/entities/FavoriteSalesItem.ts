// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsAnyString,
  IsDataUri,
  IsFloat,
  IsStringOrObjectId,
  IsUndefined,
  Lengths,
  MaxLength,
  MaxLengthAndMatches,
  MinMax,
  ValidateIf,
  Values,
} from 'backk-frontend-utils';

export default class FavoriteSalesItem {
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
}
