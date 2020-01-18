export class Batsman {
  private name: string;
  private age: number;
  private runsScored: number;
  private ballsFaced: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.runsScored = 0;
    this.ballsFaced = 0;
  }

  // TODO: currently no extras/ no balls etc
  addRuns(runs: number) {
    if (runs < 0 || runs > 6) {
      throw new Error('Illegal amount of runs ...');
    }

    this.runsScored += runs;
    this.ballsFaced++;

    console.log(
      `${this.name} scored ${runs} runs, now ${this.runsScored}(${this.ballsFaced})`
    );
  }
}
