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
  private overs: { completed: number; balls: number };

  constructor(team: BattingTeam) {
    this.team = team;
    this.currentBatsmen = { batsman1: 1, batsman2: 2 };
    this.strike = true;
    this.totalRuns = 0;
    this.wickets = 0;
    this.overs = { completed: 0, balls: 0 };
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

    // move this to 'scoring loop'
    this.updateOvers();
  }

  // TODO: extend to specific cases ie non-striker is run out ...
  wicketFalls(): void {
    // replace striker with next batsman

    this.wickets++;

    if (this.wickets === 10) {
      console.log(`Team all out -> innings total : ${this.totalRuns} `);
      return;
    }

    // TODO: do out logic on curr batsman! / handle all out -> only one batsman 'in'

    console.log('OUT!! what an absolute howler. The batsman is furious.');

    // next man in
    if (this.strike) {
      this.currentBatsmen.batsman1 = this.wickets + 2;
    } else {
      this.currentBatsmen.batsman2 = this.wickets + 2;
    }

    // move this to 'scoring loop' (++ not currently called on game end!)
    this.updateOvers();
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
    return `${this.totalRuns}/${this.wickets} (${this.overs.completed}.${
      this.overs.balls
    })\n**${this.getOnStrikeBatsman().toString()}\n  ${this.getNonStriker().toString()}`;
  }

  // Important: Overs must always be called AFTER any scoring logic (swaps strike, runs could be attributed to wrong batsman!!)
  updateOvers() {
    if (this.overs.balls === 5) {
      this.swapStrike();
      this.overs.completed++;
    }

    this.overs.balls = (this.overs.balls + 1) % 6;
  }
}
