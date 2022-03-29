import { Module } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { EquipoService } from 'src/equipo/equipo.service';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Licencia } from 'src/licencia/entities/licencia.entity';
import { LicenciaService } from 'src/licencia/licencia.service';
import { EquipoModule } from 'src/equipo/equipo.module';
import { LicenciaModule } from 'src/licencia/licencia.module';
import { PerifericoModule } from 'src/periferico/periferico.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asignacion]),
    EquipoModule,
    LicenciaModule,
    PerifericoModule,
  ],
  controllers: [AsignacionController],
  providers: [AsignacionService],
})
export class AsignacionModule {}
