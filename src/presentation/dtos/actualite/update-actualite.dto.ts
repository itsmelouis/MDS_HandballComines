import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateActualiteDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  titre?: string;

  @IsOptional()
  @IsDate()
  date_publication?: Date;

  @IsOptional()
  @IsString()
  contenu?: string;

  @IsOptional()
  adherentId?: number;
}
