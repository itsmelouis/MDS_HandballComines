import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

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
  @IsEmail()
  email?: string;

  // Password should only be updated through a specific process (e.g., Change Password feature)
  // Therefore, it's not included in the general update DTO

  @IsOptional()
  @IsDate()
  date_inscription?: Date;

  // Role ID might not be updatable via DTO, depending on your application's logic
  // If roles can be updated, uncomment the following line
  // @IsOptional()
  // roleId?: number;
}
