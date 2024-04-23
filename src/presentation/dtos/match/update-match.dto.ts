import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateMatchDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nom_domicile?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  nom_exterieur?: string;

  @IsOptional()
  @IsString()
  @MaxLength(5)
  score?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  localisation?: string;

  @IsOptional()
  @IsDate()
  date_match?: Date;

  @IsOptional()
  adherentId?: number;
}
