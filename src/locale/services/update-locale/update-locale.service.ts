import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { IUser } from 'src/interfaces/User';
import { UpdateLocaleDto } from 'src/locale/dto/update-locale.dto';

@Injectable()
export class UpdateLocaleService {
  constructor(private readonly db: PrismaService) {}

  async update(id: number, updateLocaleDto: UpdateLocaleDto, user: IUser) {
    const locale = await this.db.locale.findUnique({
      where: {
        id: id,
      },
    });

    if (locale.ownerId != user.id) {
      throw new BadRequestException({
        error: 'You are not allower to make this request.',
      });
    }

    const localeUpdated = await this.db.locale.update({
      where: {
        id: id,
      },
      data: {
        ...updateLocaleDto,
      },
    });

    return `Locale id: ${localeUpdated.id}, updated successfully.`;
  }
}
