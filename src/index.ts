import { Batsman } from './Batsman';
import { BattingTeam } from './BattingTeam';

// TODO: Move tests from index.ts to /src/tests

const singleBatsmanTests = () => {
  // create batsman
  const tommy = new Batsman('Tommy', 34);

  // score runs
  tommy.addRuns(3);
  tommy.addRuns(4);
  tommy.addRuns(1);
  tommy.addRuns(0);

  console.log(tommy);
};

const teamTests = () => {
  // create team
  const team = new BattingTeam('Awesome Cricket Club');

  // Tim (bats #1)
  const name = 'Tim';
  const age = 15;

  // add new Player
  const tim = new Batsman('Tim', 15);
  team.addBatsman(tim);

  // try get #1 (currently only index based)
  team.getBatsman(1);
  //   console.log(
  //     `*** getting {${name}, ${age}} : \n  ${team.getBatsman(1).toString()}`
  //   );

  // add second player
  team.addBatsman(new Batsman('John', 26));

  // print team
  console.log(team.toString());
};

const runAllTests = () => {
  singleBatsmanTests();
  teamTests();
};

//singleBatsmanTests();
teamTests();
//runAllTests();
