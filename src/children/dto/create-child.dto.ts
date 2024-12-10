
import { IsBoolean, IsDateString, isNotEmpty, IsNotEmpty, isString, IsString } from "class-validator";

export class CreateChildDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsBoolean()
  @IsNotEmpty()
  wasGood: boolean;

  @IsString()
  wantsToy: string;
}


