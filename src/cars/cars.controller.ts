import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Nissan', 'Renault'];

  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':index')
  findCarByIndex(@Param('index') index) {
    const result = this.cars[index];
    return { result };
  }
}
