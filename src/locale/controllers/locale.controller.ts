import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { CreateLocaleDto } from '../dto/create-locale.dto';
import { UpdateLocaleDto } from '../dto/update-locale.dto';
import { CreateLocaleService } from '../services/create-locale/create-locale.service';
import { Request } from 'express';
import { DeleteLocaleService } from '../services/delete-locale/delete-locale.service';
import { UpdateLocaleService } from '../services/update-locale/update-locale.service';
import { GetLocalesService } from '../services/get-locales/get-locales.service';
import { GetLocaleService } from '../services/get-locale/get-locale.service';

@Controller('locale')
export class LocaleController {
  constructor(
    private readonly createLocaleService: CreateLocaleService,
    private readonly deleteLocaleService: DeleteLocaleService,
    private readonly updateLocaleService: UpdateLocaleService,
    private readonly getLocalesService: GetLocalesService,
    private readonly getLocaleService: GetLocaleService,
  ) {}

  @Post()
  async create(@Body() createLocaleDto: CreateLocaleDto, @Req() req: Request) {
    const payload = await this.createLocaleService.create(
      createLocaleDto,
      req.user,
    );
    return { payload };
  }

  @Get()
  async findAll(@Query('name') name: string) {
    const payload = await this.getLocalesService.findAll(name);
    return { payload };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getLocaleService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocaleDto: UpdateLocaleDto,
    @Req() req: Request,
  ) {
    const payload = await this.updateLocaleService.update(
      +id,
      updateLocaleDto,
      req.user,
    );
    return { payload };
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: Request) {
    const payload = await this.deleteLocaleService.remove(+id, req.user);
    return { payload };
  }
}
