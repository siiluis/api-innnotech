import { Test, TestingModule } from '@nestjs/testing';
import { PerifericoService } from './periferico.service';

describe('PerifericoService', () => {
  let service: PerifericoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerifericoService],
    }).compile();

    service = module.get<PerifericoService>(PerifericoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
