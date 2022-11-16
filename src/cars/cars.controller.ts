import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @Get()
  getAllCars() {
    return this.service.findAll();
  }
  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOneById(+id);
  }
}
