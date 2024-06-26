import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUsecase } from 'src/domain/usecase/auth/login.usecase';
import { RegisterUsecase } from 'src/domain/usecase/auth/register.usecase';
import { LoginAdherentDto } from 'src/presentation/dtos/auth/auth-login.dto';
import { RegisterAdherentDto } from '../dtos/auth/auth-register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private loginUsecase: LoginUsecase,
    private registerUsecase: RegisterUsecase,
  ) {}

  @Post('login')
  async login(@Body() dto: LoginAdherentDto) {
    const { email, password } = dto;
    return this.loginUsecase.execute(email, password);
  }

  @Post('register')
  async register(@Body() dto: RegisterAdherentDto) {
    const { nom, prenom, email, password } = dto;
    return this.registerUsecase.execute(nom, prenom, email, password);
  }
}
