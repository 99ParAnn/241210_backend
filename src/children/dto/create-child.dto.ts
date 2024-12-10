
import { IsBoolean, IsDateString, isNotEmpty, IsNotEmpty, IsOptional, isString, IsString } from "class-validator";

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
  @IsOptional()
  wantsToy?: string;
}

 
