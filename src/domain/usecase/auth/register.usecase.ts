import { Injectable } from '@nestjs/common';
import { AdherentService } from 'src/data/services/adherent/adherent.service';
import { Adherent } from 'src/domain/models/adherent';

@Injectable()
export class RegisterUsecase {
  constructor(private readonly adherentService: AdherentService) {}

  public async execute(
    nom: string,
    prenom: string,
    email: string,
    password: string,
  ): Promise<Adherent> {
    const newAdmin = new Adherent(
      nom,
      prenom,
      email,
      password,
      Date.now(),
      'admin',
    );

    return this.adherentService.createAdherent(newAdmin);
  }
}
