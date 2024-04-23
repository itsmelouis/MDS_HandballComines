import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAdherentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nom: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  prenom: string;

  @IsDate()
  @IsNotEmpty()
  date_inscription: Date;

  @IsNotEmpty()
  roleId: number;
}
