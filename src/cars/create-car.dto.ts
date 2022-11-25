import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  @IsString()
  private readonly brand: string;

  @IsString()
  @MinLength(3)
  private readonly model: string;
}
