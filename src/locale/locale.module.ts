import { Module } from '@nestjs/common';
import { LocaleController } from './controllers/locale.controller';
import { PrismaService } from 'src/infra/prisma.service';
import { CreateLocaleService } from './services/create-locale/create-locale.service';
import { UpdateLocaleService } from './services/update-locale/update-locale.service';
import { GetLocaleService } from './services/get-locale/get-locale.service';
import { GetLocalesService } from './services/get-locales/get-locales.service';
import { DeleteLocaleService } from './services/delete-locale/delete-locale.service';

@Module({
  controllers: [LocaleController],
  providers: [
    CreateLocaleService,
    UpdateLocaleService,
    GetLocaleService,
    GetLocalesService,
    DeleteLocaleService,
    PrismaService,
  ],
})
export class LocaleModule {}
