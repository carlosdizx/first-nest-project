import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  private readonly brand: string;

  @IsString()
  private readonly model: string;
}
