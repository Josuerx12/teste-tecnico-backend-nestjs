import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { IUser } from 'src/interfaces/User';
import { CreateLocaleDto } from 'src/locale/dto/create-locale.dto';

@Injectable()
export class CreateLocaleService {
  constructor(private readonly db: PrismaService) {}

  async create(createLocaleDto: CreateLocaleDto, user: IUser): Promise<string> {
    const locale = await this.db.locale.create({
      data: {
        ...createLocaleDto,
        ownerId: user.id,
      },
    });

    return `Locale id: ${locale.id}, created succefully.`;
  }
}
