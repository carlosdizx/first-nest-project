import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
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
    return carDto;
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return { elementDeleted: this.service.findOneById(id) };
  }
}
