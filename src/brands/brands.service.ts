import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { Brand } from "./entities/brand.entity";
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: "Toyoya",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand: Brand = this.brands.find(brand => brand.id === id);
    if (brand)
      return brand;
    throw new NotFoundException("The brand not found");
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandFound: Brand = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandFound.updatedAt = new Date();
        brandFound = { ...brandFound, ...updateBrandDto };
        return brandFound;
      }
      return brand;
    });
    return brandFound;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
