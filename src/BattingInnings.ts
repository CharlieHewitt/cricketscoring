import { BattingTeam } from './BattingTeam';
import { Batsman } from './Batsman';

export class BattingInnings {
  // players
  private team: BattingTeam;
  private currentBatsmen: { batsman1: number; batsman2: number };
  private strike: boolean;

  // game state
  private totalRuns: number;
  private wickets: number;

  constructor(team: BattingTeam) {
    this.team = team;
    this.currentBatsmen = { batsman1: 1, batsman2: 2 };
    this.strike = true;
    this.totalRuns = 0;
    this.wickets = 0;
  }

  scoreRuns(runs: number): void {
    if (runs < 0 || runs > 6) {
      throw new Error('Illegal amount of runs ...');
    }
    const striker = this.getOnStrikeBatsman();
    striker.addRuns(runs);
    this.totalRuns += runs;

    // swap strike if 1 or 3 runs scored (TODO: maybe add 5/uneven + input handling)
    if (runs === 1 || runs === 3) {
      this.swapStrike();
    }
  }

  getOnStrikeBatsman(): Batsman {
    const { batsman1, batsman2 } = this.currentBatsmen;

    return this.strike
      ? this.team.getBatsman(batsman1)
      : this.team.getBatsman(batsman2);
  }

  getNonStriker(): Batsman {
    const { batsman1, batsman2 } = this.currentBatsmen;

    return !this.strike
      ? this.team.getBatsman(batsman1)
      : this.team.getBatsman(batsman2);
  }

  swapStrike(): void {
    this.strike = !this.strike;
  }

  toString(): string {
    return `${this.team.toString()}\n\nTotal Score: ${this.totalRuns}/${
      this.wickets
    }`;
  }

  currentState(): string {
    return `**${this.getOnStrikeBatsman().toString()}\n  ${this.getNonStriker().toString()}`;
  }
}
