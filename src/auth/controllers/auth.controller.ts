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
  async create(@Body() newUserCredentials: RegisterUserDTO) {
    const payload = await this.AuthRegisterService.register(newUserCredentials);
    return { payload };
  }

  @Post('login')
  async update(@Body() loginCredentials: LoginDTO) {
    const token = await this.AuthLoginService.login(loginCredentials);
    return { token };
  }
}
