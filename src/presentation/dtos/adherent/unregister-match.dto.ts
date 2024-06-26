import { IsNotEmpty, IsNumber } from 'class-validator';

export class UnregisterMatchDto {
  @IsNumber()
  @IsNotEmpty()
  matchId: number;
}
