import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadoModule } from './empleado/empleado.module';
import { EquipoModule } from './equipo/equipo.module';
import { PerifericoModule } from './periferico/periferico.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './empleado/entities/empleado.entity';
import { AreaModule } from './area/area.module';
import { Area } from './area/entities/area.entity';
import { Equipo } from './equipo/entities/equipo.entity';
import { LicenciaModule } from './licencia/licencia.module';
import { Licencia } from './licencia/entities/licencia.entity';
import { Periferico } from './periferico/entities/periferico.entity';
import { Asignacion } from './asignacion/entities/asignacion.entity';
import { EquipoService } from './equipo/equipo.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '4DrPzA3TWl02',
      database: 'innotech_db',
      entities: [
        Usuario,
        Empleado,
        Area,
        Equipo,
        Licencia,
        Periferico,
        Asignacion,
      ],
      synchronize: true,
    }),
    EmpleadoModule,
    EquipoModule,
    PerifericoModule,
    UsuarioModule,
    AsignacionModule,
    AreaModule,
    LicenciaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
