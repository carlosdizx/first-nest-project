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
    return "This action adds a new brand";
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

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
