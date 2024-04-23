import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateAdherentDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nom?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  prenom?: string;

  @IsOptional()
  @IsDate()
  date_inscription?: Date;

  @IsOptional()
  roleId?: number;
}
