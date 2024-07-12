import { Test, TestingModule } from '@nestjs/testing';
import { CreateLocaleService } from './create-locale.service';

describe('CreateLocaleService', () => {
  let service: CreateLocaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateLocaleService],
    }).compile();

    service = module.get<CreateLocaleService>(CreateLocaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
