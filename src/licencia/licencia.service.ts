import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseModel } from 'src/utils/response.model';
import { Repository } from 'typeorm';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { UpdateLicenciaDto } from './dto/update-licencia.dto';
import { Licencia } from './entities/licencia.entity';

@Injectable()
export class LicenciaService {
  constructor(
    @InjectRepository(Licencia)
    private repository: Repository<Licencia>,
  ) {}
  async create(createLicenciaDto: CreateLicenciaDto) {
    const newLicencia = new Licencia();
    newLicencia.producto = createLicenciaDto.producto;
    newLicencia.productoSerial = createLicenciaDto.productoSerial;
    return await this.repository.save(newLicencia);
  }

  async findAll(): Promise<ResponseModel> {
    const result = await this.repository.find();
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

    updateLicenciaDto: UpdateLicenciaDto,
  ): Promise<ResponseModel> {
    const result = await this.repository.update(id, updateLicenciaDto);
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

  async cambiarDisponible(id: number, disponible: boolean): Promise<boolean> {
    try {
      await this.repository.update(id, {
        disponible: disponible,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
