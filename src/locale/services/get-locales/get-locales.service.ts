import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
@Injectable()
export class GetLocalesService {
  constructor(private readonly db: PrismaService) {}

  async findAll(name: string) {
    const locales = await this.db.locale.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    return locales;
  }
}
