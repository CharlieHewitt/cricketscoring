import { Batsman } from './Batsman';
import { BattingTeam } from './BattingTeam';
import { BattingInnings } from './BattingInnings';

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

  // Tim (batsman #1)
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

const inningsTests = () => {
  // create team
  const team = initialiseTeam();

  const innings = new BattingInnings(team);

  console.log(innings.currentState());

  innings.scoreRuns(2);
  innings.scoreRuns(3);
  innings.scoreRuns(6);
  innings.scoreRuns(1);

  console.log(innings.currentState());

  innings.wicketFalls();

  innings.scoreRuns(2);
  console.log(innings.currentState());

  console.log(innings.toString());
};

// Helper method for setting up a team
const initialiseTeam = () => {
  const team = new BattingTeam('Awesome Cricket Club');

  team.addBatsman(new Batsman('Tim', 15));
  team.addBatsman(new Batsman('John', 34));
  team.addBatsman(new Batsman('Ryan', 22));
  team.addBatsman(new Batsman('Andrew', 23));
  team.addBatsman(new Batsman('Miko', 35));
  team.addBatsman(new Batsman('Colin', 67));
  team.addBatsman(new Batsman('Roger', 17));
  team.addBatsman(new Batsman('Dom', 24));
  team.addBatsman(new Batsman('Matt', 27));
  team.addBatsman(new Batsman('Andy', 32));
  team.addBatsman(new Batsman('Joe', 45));

  return team;
};

const runAllTests = () => {
  singleBatsmanTests();
  teamTests();
  inningsTests();
};

//singleBatsmanTests();
//teamTests();
inningsTests();
//runAllTests();
