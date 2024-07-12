import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class AuthGuardMiddleware implements NestMiddleware {
  constructor(private readonly db: PrismaService) {}
  use(req: Request, res: Response, next: () => void) {
    const secret = process.env.SECRET;

    const headerToken = req.headers.authorization;

    if (!headerToken) {
      throw new BadRequestException({
        token: 'Token is required to access this route.',
      });
    }

    const token = headerToken.split(' ')[1];

    if (!token) {
      throw new BadRequestException({
        token: 'Token is required to access this route.',
      });
    }

    verify(token, secret, async (err, decodedToken: string) => {
      if (err) {
        console.log(err);
        throw new BadRequestException(
          { token: 'Token invalido' },
          { cause: new Error(), description: 'token-invalido' },
        );
      }

      const user = await this.db.user.findUnique({
        where: {
          id: decodedToken,
        },
      });

      req.user = user;

      next();
    });
  }
}
