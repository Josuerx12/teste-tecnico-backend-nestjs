import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { AuthRegisterService } from './services/register/auth.register.service';
import { AuthLoginService } from './services/login/auth.login.service';
import { PrismaService } from 'src/infra/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthRegisterService, AuthLoginService, PrismaService],
})
export class AuthModule {}
