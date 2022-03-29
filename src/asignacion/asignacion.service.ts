import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { EquipoService } from 'src/equipo/equipo.service';
import { LicenciaService } from 'src/licencia/licencia.service';
import { ResponseModel } from 'src/utils/response.model';
import { Repository } from 'typeorm';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Asignacion } from './entities/asignacion.entity';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionRepository: Repository<Asignacion>,
    private equipoService: EquipoService,
    private licenciaService: LicenciaService,
  ) {}
  async create(createAsignacionDto: CreateAsignacionDto): Promise<Asignacion> {
    const newAsignacion = new Asignacion();
    newAsignacion.empleado = createAsignacionDto.empleado;
    newAsignacion.equipo = createAsignacionDto.equipo;
    newAsignacion.licencias = createAsignacionDto.licencias;
    newAsignacion.perifericos = createAsignacionDto.perifericos;
    try {
      const result = await this.asignacionRepository.save(newAsignacion);
      await this.equipoService.cambiarDisponible(
        createAsignacionDto.equipo.id,
        false,
      );
      createAsignacionDto.licencias.forEach(
        async (licencia) =>
          await this.licenciaService.cambiarDisponible(licencia.id, false),
      );
      return result;
    } catch (error) {
      throw new HttpException('NOT CREATE', HttpStatus.NOT_ACCEPTABLE);
    }
  }

  async findAll(): Promise<ResponseModel> {
    const result = await this.asignacionRepository.find({
      relations: ['empleado', 'equipo', 'licencias', 'perifericos'],
    });
    return {
      data: result,
      total: result.length,
    } as ResponseModel;
  }

  async findOne(id: number): Promise<ResponseModel> {
    const result = await this.asignacionRepository.findOne(id);
    return {
      data: result,
    } as ResponseModel;
  }

  async update(
    id: number,

    updateAsignacionDto: UpdateAsignacionDto,
  ): Promise<ResponseModel> {
    const result = await this.asignacionRepository.update(
      id,
      updateAsignacionDto,
    );
    return {
      msg: 'UPDATE SUCCESS',
      total: result.affected,
    } as ResponseModel;
  }

  async remove(id: number) {
    const result = await this.asignacionRepository.delete(id);
    return {
      msg: 'DELETE SUCCESS',
      total: result.affected,
    } as ResponseModel;
  }
}
