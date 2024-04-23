import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nom_domicile: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nom_exterieur: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  score: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  localisation: string;

  @IsDate()
  @IsNotEmpty()
  date_match: Date;

  @IsNotEmpty()
  adherentId: number;
}
