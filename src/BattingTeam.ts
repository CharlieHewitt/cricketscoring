import { Batsman } from './Batsman';

export class BattingTeam {
  private batsmen: Batsman[] = [];

  constructor() {}

  addBatsman(batsman: Batsman): void {
    this.batsmen.push(batsman);
  }

  // Batsman number { 1 -> 11 } => { batsmen[0] -> batsmen[10] }
  getBatsman(number: number): Batsman {
    if (number < 1 || number > 11) {
      throw new Error('Batsman out of range.');
    }

    return this.batsmen[number - 1];
  }
}
