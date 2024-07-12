import { Controller, Post, Body } from '@nestjs/common';
import { AuthRegisterService } from '../services/register/auth.register.service';
import { RegisterUserDTO } from '../dto/register-user.dto';
import { LoginDTO } from '../dto/login.dto';
import { AuthLoginService } from '../services/login/auth.login.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly AuthRegisterService: AuthRegisterService,
    private readonly AuthLoginService: AuthLoginService,
  ) {}

  @Post('register')
  create(@Body() newUserCredentials: RegisterUserDTO) {
    return this.AuthRegisterService.register(newUserCredentials);
  }

  @Post('login')
  update(@Body() loginCredentials: LoginDTO) {
    return this.AuthLoginService.login(loginCredentials);
  }
}
