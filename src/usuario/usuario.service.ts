import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseModel } from 'src/utils/response.model';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const newUsuario = new Usuario();
    newUsuario.nombres = createUsuarioDto.nombres;
    newUsuario.apellidos = createUsuarioDto.apellidos;
    newUsuario.email = createUsuarioDto.email;
    newUsuario.password = createUsuarioDto.password;
    return await this.repository.save(newUsuario);
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

    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<ResponseModel> {
    const result = await this.repository.update(id, updateUsuarioDto);
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

  async findUserByEmail(email: string): Promise<Usuario> {
    console.log(await this.repository.findOne({ email: email }));

    return await this.repository.findOne({ email: email });
  }
}
