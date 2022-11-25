import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './create-car.dto';
import { UpdateCarDto } from "./update-car.dto";

@Controller('cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @Get()
  getAllCars() {
    return this.service.findAll();
  }
  @Get(':id')
  findOneById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.service.findOneById(id);
  }

  @Post()
  createCar(@Body() carDto: CreateCarDto) {
    return this.service.create(carDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateCarDto,
  ) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return { elementDeleted: this.service.findOneById(id) };
  }
}
