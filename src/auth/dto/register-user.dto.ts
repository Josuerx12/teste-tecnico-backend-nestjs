import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class RegisterUserDTO extends User {
  @IsString({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must have more than 3 characters.' })
  name: string;
  @IsEmail({}, { message: 'E-mail must be valid.' })
  email: string;
  @IsNotEmpty({ message: "Password can't be empty." })
  @Length(6, 20, {
    message: 'Password must have 6 characters and less than 20 characters.',
  })
  password: string;
  @IsNotEmpty({ message: "Confirm password can't be empty." })
  confirmPassword: string;
}
