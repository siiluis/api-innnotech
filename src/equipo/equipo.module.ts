import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { Equipo } from './entities/equipo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenciaModule } from 'src/licencia/licencia.module';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo]), LicenciaModule],
  controllers: [EquipoController],
  providers: [EquipoService],
  exports: [EquipoService],
})
export class EquipoModule {}
