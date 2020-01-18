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
    // very basic input handling => needs to be improved
    if (runs < 0 || runs > 6) {
      throw new Error('Illegal amount of runs ...');
    }

    // update internal score
    this.runsScored += runs;
    this.ballsFaced++;

    // output score update
    console.log(
      `${this.name} scored ${runs} runs. => now ${this.runsScored}(${this.ballsFaced})`
    );
  }

  toString(): string {
    return `${this.name} (age: ${this.age}) has scored ${this.runsScored} off ${this.ballsFaced}`;
  }

  // Refactor toStrings!
  toScoreString(): string {
    return `${this.name}    ${this.runsScored} (${this.ballsFaced})`;
  }
}
