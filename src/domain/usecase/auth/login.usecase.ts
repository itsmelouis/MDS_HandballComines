import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AdherentService } from 'src/data/services/adherent/adherent.service';

@Injectable()
export class LoginUsecase {
  constructor(
    private jwtService: JwtService,
    private adherent: AdherentService,
    private configService: ConfigService,
  ) {}

  public async execute(email: string, password: string): Promise<any> {
    const user = await this.adherent.findByEmailAndPassword(email, password);
    const payload = {
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      roles: [user.role],
    };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: '1d',
      }),
    };
  }
}
