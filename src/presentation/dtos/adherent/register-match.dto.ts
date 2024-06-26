import { IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterMatchDto {
  @IsNumber()
  @IsNotEmpty()
  matchId: number;
}
