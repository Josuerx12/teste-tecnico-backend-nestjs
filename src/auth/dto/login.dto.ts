import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDTO } from './register-user.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO extends PartialType(RegisterUserDTO) {
  @IsEmail({}, { message: 'E-mail must be valid' })
  email: string;
  @IsNotEmpty({ message: "password can't be empty." })
  password: string;
}
