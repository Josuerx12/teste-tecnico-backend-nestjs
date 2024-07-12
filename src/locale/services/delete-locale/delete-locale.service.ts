import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { IUser } from 'src/interfaces/User';

@Injectable()
export class DeleteLocaleService {
  constructor(private readonly db: PrismaService) {}
  async remove(id: number, user: IUser) {
    const locale = await this.db.locale.findUnique({
      where: {
        id: id,
      },
    });

    if (locale.ownerId != user.id) {
      throw new BadRequestException({
        error: 'You are not allowed to delete this locale.',
      });
    }

    await this.db.locale.delete({
      where: {
        id: locale.id,
      },
    });

    return `Locale id: ${locale.id}, deleted with success.`;
  }
}
