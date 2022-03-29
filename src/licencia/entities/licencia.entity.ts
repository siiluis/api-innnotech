import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
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

  @ManyToOne(() => Asignacion, (asignacion) => asignacion.licencias)
  asignacion: Asignacion;

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
