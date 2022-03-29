import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseModel } from 'src/utils/response.model';
import { Repository } from 'typeorm';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
import { Periferico } from './entities/periferico.entity';

@Injectable()
export class PerifericoService {
  constructor(
    @InjectRepository(Periferico)
    private repository: Repository<Periferico>,
  ) {}
  async create(createPerifericoDto: CreatePerifericoDto) {
    const newPeriferico = new Periferico();
    newPeriferico.descripcion = createPerifericoDto.descripcion;
    newPeriferico.marca = createPerifericoDto.marca;
    return await this.repository.save(newPeriferico);
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

    updatePerifericoDto: UpdatePerifericoDto,
  ): Promise<ResponseModel> {
    const result = await this.repository.update(id, updatePerifericoDto);
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
