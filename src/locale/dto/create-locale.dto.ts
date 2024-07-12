import { IsString, MinLength } from 'class-validator';
import { Locale } from '../entities/locale.entity';

export class CreateLocaleDto extends Locale {
  @IsString({ message: 'Name of the locale is required.' })
  @MinLength(3, {
    message: 'Name of the locale must have more than 3 characters.',
  })
  name: string;

  @IsString({ message: 'City of the locale is required.' })
  @MinLength(3, {
    message: 'City of the locale must have more than 3 characters.',
  })
  city: string;

  @IsString({ message: 'State of the locale is required.' })
  @MinLength(3, {
    message: 'State of the locale must have more than 3 characters.',
  })
  state: string;
}
