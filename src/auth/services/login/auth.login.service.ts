import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { LoginDTO } from 'src/auth/dto/login.dto';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthLoginService {
  private secret: string;
  constructor(private db: PrismaService) {
    this.secret = process.env.SECRET;
  }

  async verifyUserCredentials(loginCredentials: LoginDTO): Promise<string> {
    const { email, password } = loginCredentials;

    const user = await this.db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new BadRequestException({
        error:
          'User not exists in db. Please create a new account to continue.',
      });
    }

    const validatedUser = await compare(password, user.password);

    if (!validatedUser) {
      throw new BadRequestException({
        error: 'Invalid credentials.',
      });
    }

    return user.id;
  }

  async login(loginCredentials: LoginDTO): Promise<string> {
    const userIdValidated = await this.verifyUserCredentials(loginCredentials);

    const token = sign(userIdValidated, this.secret);

    return token;
  }
}
