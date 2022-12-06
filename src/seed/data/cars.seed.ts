import { v4 as uuid } from "uuid";
import { Car } from "../../cars/car.interface";


export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: "Toyota",
    model: "Corlla"
  },
  {
      id: uuid(),
      brand: "Honda",
      model: "Civic"
  },
  {
      id: uuid(),
      brand: "Jepp",
      model: "Cherokee"
  }
];