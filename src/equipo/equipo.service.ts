import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenciaService } from 'src/licencia/licencia.service';
import { ResponseModel } from 'src/utils/response.model';
import { Repository } from 'typeorm';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private repository: Repository<Equipo>,
    private licenciaService: LicenciaService,
  ) {}
  async create(createEquipoDto: CreateEquipoDto) {
    const newEquipo = new Equipo();
    newEquipo.tipoEquipo = createEquipoDto.tipoEquipo;
    newEquipo.serial = createEquipoDto.serial;
    newEquipo.ram = createEquipoDto.ram;
    newEquipo.discoDuro = createEquipoDto.discoDuro;
    newEquipo.procesador = createEquipoDto.procesador;
    newEquipo.licencias = createEquipoDto.licencias;
    createEquipoDto.licencias.forEach(
      async (licencia) =>
        await this.licenciaService.cambiarDisponible(licencia.id, false),
    );
    return await this.repository.save(newEquipo);
  }

  async findAll(): Promise<ResponseModel> {
    const result = await this.repository.find({ relations: ['licencias'] });
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

    updateEquipoDto: UpdateEquipoDto,
  ): Promise<ResponseModel> {
    const result = await this.repository.update(id, updateEquipoDto);
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

  async cambiarDisponible(
    id: number | Equipo,
    valor: string,
  ): Promise<boolean> {
    try {
      await this.repository.update(id, {
        disponible: valor,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
