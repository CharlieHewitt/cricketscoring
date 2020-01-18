import { Batsman } from './Batsman';

export class BattingTeam {
  private teamName: string;
  private batsmen: Batsman[] = [];

  constructor(name: string) {
    this.teamName = name;
  }

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

  // TODO: Fix formatting on different name/ score lengths!
  toString(): string {
    let str = `${this.teamName}:\n`;

    for (let i = 0; i < this.batsmen.length; i++) {
      let number = i + 1;
      str += `\n${number}. ${this.batsmen[i].toScoreString()}`;
    }

    return str;
  }
}
