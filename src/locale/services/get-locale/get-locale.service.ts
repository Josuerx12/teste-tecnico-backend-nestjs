import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class GetLocaleService {
  constructor(private readonly db: PrismaService) {}
  async findOne(id: number) {
    const locale = await this.db.locale.findUnique({
      where: {
        id: id,
      },
    });

    return locale;
  }
}
