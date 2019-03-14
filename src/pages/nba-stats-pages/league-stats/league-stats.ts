import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NbaStatsService } from '../../../app/nba-stats/nba-stats.service';
import * as statsFixtures from '../../../app/nba-stats/stats/support/stats-fixtures';

@IonicPage()
@Component({
  selector: 'page-league',
  templateUrl: 'league-stats.html',
})
export class LeagueStatsPage {
  result = '';

  // Set up params:
  gameScopeOptions = statsFixtures.gameScope;
  playerTeamOptions = ['Player', 'Team'];
  playerScopeOptions = ['All Players', 'Rookies'];
  statTypeOptions = statsFixtures.statType;
  ptMeasureTypeOptions = statsFixtures.ptMeasureType;
  playerPositionOptions = statsFixtures.playerPosition;
  
  // Default values:
  gameScope = this.gameScopeOptions[0];
  playerOrTeam = this.playerTeamOptions[0];
  playerScope = this.playerScopeOptions[0];
  statType = this.statTypeOptions[0];
  ptMeasureType = this.ptMeasureTypeOptions[0];
  playerPosition = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private nbaStatsService: NbaStatsService) { }

  async getHomepage() {
    const homepage = await this.nbaStatsService.getHomepage(this.gameScope, this.playerOrTeam, this.playerScope, this.statType);
    this.print(homepage);
  }

  async getPlayerTracking() {
    const playerTracking = await this.nbaStatsService.getPlayerTracking(this.ptMeasureType, this.playerPosition);
    this.print(playerTracking);
  }

  private print(object: any) {
    this.result = JSON.stringify(object, null, 2);
    console.log(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaguePage');
  }
}
