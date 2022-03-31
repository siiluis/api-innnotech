import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({})
export class Licencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  disponible: boolean;

  @Column()
  producto: string;

  @Column()
  productoSerial: string;

  @ManyToOne(() => Equipo, (equipo) => equipo.licencias, {
    createForeignKeyConstraints: false,
  })
  equipo: Equipo;

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
