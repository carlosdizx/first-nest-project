import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  ];

  public findAll = () => this.cars;

  public findOneById = (id: string) => {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  };

  public create = (carDto: CreateCarDto) => {
    const car: Car = {
      id: uuid(),
      ...carDto,
    };
    this.cars.push(car);

    return car;
  };
}
