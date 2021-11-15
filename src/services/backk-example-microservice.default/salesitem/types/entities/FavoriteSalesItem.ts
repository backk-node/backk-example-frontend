// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  IsAnyString,
  IsDataUri,
  IsFloat,
  IsString,
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
  @IsString()
  _id: string | undefined = '';

  @MaxLength(Lengths._64)
  @IsAnyString()
  @IsString()
  @ValidateIf((o: any) => o.title !== undefined, {
    groups: ['__backk_update__'],
  })
  title: string | undefined = '';

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @ValidateIf((o: any) => o.price !== undefined, {
    groups: ['__backk_update__'],
  })
  price: number | undefined = NaN;

  @IsFloat(2)
  @MinMax(0, Values._1B)
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.previousPrice !== null)
  @ValidateIf((o: any) => o.previousPrice !== undefined, {
    groups: ['__backk_update__'],
  })
  previousPrice: number | null | undefined = NaN;

  @MaxLength(Lengths._10M)
  @IsDataUri()
  @IsString()
  @ValidateIf((o: any) => o.primaryImageDataUri !== undefined, {
    groups: ['__backk_update__'],
  })
  primaryImageDataUri: string | undefined = '';
}
