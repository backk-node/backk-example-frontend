// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  AcceptFileTypes,
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

export default class ShoppingCartOrOrderSalesItem {
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
  @ValidateIf((o: any) => o.shippingCost !== undefined, {
    groups: ['__backk_update__'],
  })
  shippingCost: number | undefined = NaN;

  @MaxLength(Lengths._1M)
  @IsDataUri()
  @AcceptFileTypes(['image/*'])
  @IsString()
  @IsUndefined({
    groups: ['__backk_create__', '__backk_update__'],
  })
  @ValidateIf((o: any) => o.primaryImageThumbnailDataUri !== undefined, {
    groups: ['__backk_update__'],
  })
  primaryImageThumbnailDataUri: string | undefined = '';
}
