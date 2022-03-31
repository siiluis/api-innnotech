import { Licencia } from 'src/licencia/entities/licencia.entity';

export class CreateEquipoDto {
  tipoEquipo: string;

  serial: string;

  ram: string;

  discoDuro: string;

  procesador: string;
  licencias: Licencia[];
}
