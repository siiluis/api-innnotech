import { Empleado } from 'src/empleado/entities/empleado.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Licencia } from 'src/licencia/entities/licencia.entity';
import { Periferico } from 'src/periferico/entities/periferico.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Empleado, (empleado) => empleado.asignaciones, {
    createForeignKeyConstraints: false,
  })
  empleado: Empleado;

  @OneToOne(() => Equipo)
  @JoinColumn()
  equipo: Equipo;

  @OneToMany(() => Licencia, (licencia) => licencia.asignacion, {
    createForeignKeyConstraints: false,
  })
  licencias: Licencia[];

  @ManyToMany(() => Periferico)
  @JoinTable()
  perifericos: Periferico[];

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;
}
