import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateActualiteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  titre: string;

  @IsString()
  @IsNotEmpty()
  contenu: string;
}
