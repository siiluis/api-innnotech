import { Test, TestingModule } from '@nestjs/testing';
import { PerifericoController } from './periferico.controller';
import { PerifericoService } from './periferico.service';

describe('PerifericoController', () => {
  let controller: PerifericoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerifericoController],
      providers: [PerifericoService],
    }).compile();

    controller = module.get<PerifericoController>(PerifericoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
