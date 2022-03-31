import { Module } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { EquipoModule } from 'src/equipo/equipo.module';
import { PerifericoModule } from 'src/periferico/periferico.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asignacion]),
    EquipoModule,
    PerifericoModule,
  ],
  controllers: [AsignacionController],
  providers: [AsignacionService],
})
export class AsignacionModule {}
