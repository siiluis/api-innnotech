import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseModel } from 'src/utils/response.model';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private repository: Repository<Area>,
  ) {}
  async create(createAreaDto: CreateAreaDto) {
    const newArea = new Area();
    newArea.nombre = createAreaDto.nombre;
    newArea.code = createAreaDto.code;
    return await this.repository.save(newArea);
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
    updateAreaDto: UpdateAreaDto,
  ): Promise<ResponseModel> {
    const result = await this.repository.update(id, updateAreaDto);
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
