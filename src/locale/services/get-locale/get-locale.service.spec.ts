import { Test, TestingModule } from '@nestjs/testing';
import { GetLocaleService } from './get-locale.service';

describe('GetLocaleService', () => {
  let service: GetLocaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetLocaleService],
    }).compile();

    service = module.get<GetLocaleService>(GetLocaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
