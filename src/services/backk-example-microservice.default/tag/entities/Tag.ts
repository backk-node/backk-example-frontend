// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsAnyString, IsString, Lengths, MaxLength, ValidateIf, _Id } from 'backk-frontend-utils';

export default class Tag extends _Id {
  @MaxLength(Lengths._64)
  @IsAnyString()
  @IsString()
  @ValidateIf((o: any) => o.name !== undefined, {
    groups: ['__backk_update__'],
  })
  name: string | undefined = '';
}
