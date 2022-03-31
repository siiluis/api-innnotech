import { Empleado } from 'src/empleado/entities/empleado.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Licencia } from 'src/licencia/entities/licencia.entity';
import { Periferico } from 'src/periferico/entities/periferico.entity';

export class CreateAsignacionDto {
  empleado: Empleado;
  equipo: Equipo;
  perifericos: Periferico[];
}
