import { Batsman } from './Batsman';

// TODO: Move tests from index.ts to /src/tests
const tommy = new Batsman('Tommy', 34);

tommy.addRuns(3);
tommy.addRuns(4);
tommy.addRuns(1);
tommy.addRuns(0);

console.log(tommy);
