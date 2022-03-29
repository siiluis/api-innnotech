import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseModel } from 'src/utils/response.model';
@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private repository: Repository<Empleado>,
  ) {}
  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const newEmpleado = new Empleado();
    newEmpleado.cedula = createEmpleadoDto.cedula;
    newEmpleado.nombre = createEmpleadoDto.nombre;
    newEmpleado.email = createEmpleadoDto.email;
    newEmpleado.telefono = createEmpleadoDto.telefono;
    newEmpleado.area = createEmpleadoDto.area;
    return await this.repository.save(newEmpleado);
  }

  async findAll(): Promise<ResponseModel> {
    const result = await this.repository.find({
      relations: ['area'],
    });
    return {
      data: result,
      total: result.length,
    } as ResponseModel;
  }

  async findOne(id: number): Promise<ResponseModel> {
    const result = await this.repository.findOne(id);
    return {
      data: result,
    } as ResponseModel;
  }

  async update(
    id: number,
    updateEmpleadoDto: UpdateEmpleadoDto,
  ): Promise<ResponseModel> {
    const result = await this.repository.update(id, updateEmpleadoDto);
    return {
      msg: 'UPDATE SUCCESS',
      total: result.affected,
    } as ResponseModel;
  }

  async remove(id: number) {
    const result = await this.repository.delete(id);
    return {
      msg: 'DELETE SUCCESS',
      total: result.affected,
    } as ResponseModel;
  }
}
