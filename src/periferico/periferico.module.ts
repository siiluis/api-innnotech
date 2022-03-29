import { Module } from '@nestjs/common';
import { PerifericoService } from './periferico.service';
import { PerifericoController } from './periferico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periferico } from './entities/periferico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Periferico])],
  controllers: [PerifericoController],
  providers: [PerifericoService],
})
export class PerifericoModule {}
