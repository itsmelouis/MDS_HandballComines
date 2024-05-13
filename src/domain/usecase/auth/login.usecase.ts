import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { Adherent } from 'src/domain/models/adherent';
import { AdherentService } from 'src/data/services/adherent/adherent.service';

@Injectable()
export class LoginUsecase {
  constructor(
    private jwtService: JwtService,
    private adherent: AdherentService,
  ) {}

  public execute(): any {
    // const playload = {
    //   username: 'Louis',
    //   sub: 'f06684a2-970b-4184-8b5c-4e76392dcff6',
    //   roles: ['user'],
    // };
    const payload = this.adherent.findOne('louisfloquey@gmail.com');
    return {
      access_token: this.jwtService.sign(payload, {
        secret: 'secretKey',
        expiresIn: '1d',
      }),
    };
  }
}

// import { Injectable } from '@nestjs/common';
// import { MatchService } from 'src/data/services/match.service';
// import { Match } from '../../models/match';
// @Injectable()
// export class CreateMatchUsecase {
//   constructor(private matchService: MatchService) {}
//   public execute(match: Match): any {
//     return this.matchService.createMatch(match);
//   }
// }
