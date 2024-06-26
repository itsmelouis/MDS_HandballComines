import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAdherentDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
