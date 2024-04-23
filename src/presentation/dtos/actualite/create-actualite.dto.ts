import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateActualiteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  titre: string;

  @IsDate()
  @IsNotEmpty()
  date_publication: Date;

  @IsString()
  @IsNotEmpty()
  contenu: string;

  @IsNotEmpty()
  adherentId: number;
}
