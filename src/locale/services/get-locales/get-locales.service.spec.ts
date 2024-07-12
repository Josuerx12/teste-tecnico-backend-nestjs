import { Test, TestingModule } from '@nestjs/testing';
import { GetLocalesService } from './get-locales.service';

describe('GetLocalesService', () => {
  let service: GetLocalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetLocalesService],
    }).compile();

    service = module.get<GetLocalesService>(GetLocalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
