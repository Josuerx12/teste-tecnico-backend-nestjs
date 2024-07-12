import { Test, TestingModule } from '@nestjs/testing';

import { AuthRegisterService } from '../services/register/auth.register.service';
import { AuthController } from './auth.controller';
import { AuthLoginService } from '../services/login/auth.login.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthRegisterService, AuthLoginService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
