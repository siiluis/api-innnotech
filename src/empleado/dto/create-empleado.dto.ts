import { Area } from 'src/area/entities/area.entity';

export class CreateEmpleadoDto {
  nombre: string;

  cedula: string;

  email: string;

  telefono: string;

  area: Area;
}
