import { Area } from 'src/area/entities/area.entity';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({})
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cedula: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @ManyToOne(() => Area, (area) => area.empleados)
  area: Area;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.empleado)
  asignaciones: Asignacion[];

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
