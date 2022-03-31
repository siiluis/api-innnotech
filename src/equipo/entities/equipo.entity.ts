import { Licencia } from 'src/licencia/entities/licencia.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({})
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '1' })
  disponible: string;

  @Column()
  tipoEquipo: string;

  @Column()
  serial: string;

  @Column()
  ram: string;

  @Column()
  discoDuro: string;

  @Column()
  procesador: string;

  @OneToMany(() => Licencia, (empleado) => empleado.equipo)
  licencias: Licencia[];

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
