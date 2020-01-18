import fs from 'fs';
import { BattingTeam } from './BattingTeam';
import { Batsman } from './Batsman';

export class TeamFileLoader {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  load(): BattingTeam {
    const data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n');

    // create team
    const teamName = data[0];
    const team = new BattingTeam(teamName);

    // populate team (dynamic team size limit??)
    for (let i = 1; i < data.length; i++) {
      const [name, age] = data[i].split(',');
      team.addBatsman(new Batsman(name, parseInt(age)));
    }

    return team;
  }
}
