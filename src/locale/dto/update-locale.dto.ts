import { PartialType } from '@nestjs/mapped-types';
import { CreateLocaleDto } from './create-locale.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateLocaleDto extends PartialType(CreateLocaleDto) {
  @IsOptional()
  @IsString({ message: 'Name of the locale is required.' })
  @MinLength(3, {
    message: 'Name of the locale must have more than 3 characters.',
  })
  name: string;

  @IsOptional()
  @IsString({ message: 'City of the locale is required.' })
  @MinLength(3, {
    message: 'City of the locale must have more than 3 characters.',
  })
  city: string;
  @IsOptional()
  @IsString({ message: 'State of the locale is required.' })
  @MinLength(3, {
    message: 'State of the locale must have more than 3 characters.',
  })
  state: string;
}
