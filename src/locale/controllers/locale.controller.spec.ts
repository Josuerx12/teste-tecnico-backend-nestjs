import { Test, TestingModule } from '@nestjs/testing';
import { LocaleController } from './locale.controller';
import { CreateLocaleService } from '../services/create-locale/create-locale.service';
import { UpdateLocaleService } from '../services/update-locale/update-locale.service';
import { GetLocalesService } from '../services/get-locales/get-locales.service';
import { GetLocaleService } from '../services/get-locale/get-locale.service';
import { DeleteLocaleService } from '../services/delete-locale/delete-locale.service';

describe('LocaleController', () => {
  let controller: LocaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocaleController],
      providers: [
        CreateLocaleService,
        UpdateLocaleService,
        GetLocalesService,
        GetLocaleService,
        DeleteLocaleService,
      ],
    }).compile();

    controller = module.get<LocaleController>(LocaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
