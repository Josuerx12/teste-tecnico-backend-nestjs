import { Test, TestingModule } from '@nestjs/testing';
import { DeleteLocaleService } from './delete-locale.service';

describe('DeleteLocaleService', () => {
  let service: DeleteLocaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteLocaleService],
    }).compile();

    service = module.get<DeleteLocaleService>(DeleteLocaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
