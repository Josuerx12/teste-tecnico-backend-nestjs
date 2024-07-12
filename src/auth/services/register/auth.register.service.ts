import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { hash } from 'bcryptjs';
import { RegisterUserDTO } from 'src/auth/dto/register-user.dto';

@Injectable()
export class AuthRegisterService {
  constructor(private db: PrismaService) {}

  async newUserValidation(newUserCredentials: RegisterUserDTO) {
    const { email, password, confirmPassword } = newUserCredentials;

    if (password != confirmPassword) {
      throw new BadRequestException({
        error: 'The password and confirm password must be equals!',
      });
    }

    const user = await this.db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new BadRequestException({
        email: 'E-mail already in use.',
      });
    }
  }

  async register(newUserCredentials: RegisterUserDTO) {
    await this.newUserValidation(newUserCredentials);

    const passwordHash = await hash(newUserCredentials.password, 10);

    await this.db.user.create({
      data: {
        ...newUserCredentials,
        password: passwordHash,
      },
    });

    return 'This action adds a new auth';
  }
}
