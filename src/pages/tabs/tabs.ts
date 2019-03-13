import { Component } from '@angular/core';

import { LeagueStatsPage } from '../nba-stats-pages/league-stats/league-stats';
import { PlayerStatsPage } from '../nba-stats-pages/player-stats/player-stats';
import { TeamStatsPage } from '../nba-stats-pages/team-stats/team-stats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  leagueRoot = LeagueStatsPage;
  playerRoot = PlayerStatsPage;
  teamRoot = TeamStatsPage;

  constructor() {

  }
}
