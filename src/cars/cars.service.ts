import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto, CreateCarDto } from './index';
import { Car } from './car.interface';
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

  public update = (id: string, carDto: UpdateCarDto) => {
    if (carDto.id && carDto.id !== id)
      throw new BadRequestException(
        `Car id is not valid: ${id} <!==> ${carDto.id}`,
      );
    let carFound: Car = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carFound = {
          ...carFound,
          ...carDto,
          id,
        };
        return carFound;
      }
      return car;
    });
    return carFound;
  };

  public delete = (id: string) => {
    const carFound: Car = this.findOneById(id);
    if (!carFound)
      throw new NotFoundException(`The car with id ${id} is not found`);
    this.cars = this.cars.filter((car) => car.id !== id);
    console.log(this.cars.length);
    return { message: `Car with id ${id} deleted` };
  };
}
