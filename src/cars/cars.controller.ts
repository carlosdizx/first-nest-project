import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @Get()
  getAllCars() {
    return this.service.findAll();
  }
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: string) {
    return { elementDeleted: this.service.findOneById(id) };
  }
}
