import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAdherentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nom: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  prenom: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  roleId: number;
}
