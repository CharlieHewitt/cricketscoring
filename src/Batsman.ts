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
}
