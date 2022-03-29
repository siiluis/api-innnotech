import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerifericoService } from './periferico.service';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';

@Controller('periferico')
export class PerifericoController {
  constructor(private readonly perifericoService: PerifericoService) {}

  @Post()
  create(@Body() createPerifericoDto: CreatePerifericoDto) {
    return this.perifericoService.create(createPerifericoDto);
  }

  @Get()
  findAll() {
    return this.perifericoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perifericoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerifericoDto: UpdatePerifericoDto) {
    return this.perifericoService.update(+id, updatePerifericoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perifericoService.remove(+id);
  }
}
