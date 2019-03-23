import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

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

  // Tables:
  scoringLeaders: any;
  reboundLeaders: any;
  assistLeaders: any;
  stealsLeaders: any;
  fgPctLeaders: any;
  ftPctLeaders: any;
  fg3PctLeaders: any;
  blocksLeaders: any;

  constructor(public loadingController: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private nbaStatsService: NbaStatsService) { }

  async getHomepage() {
    const loadingAlert = this.loadingController.create({ content: 'Getting homepage stats...' });
    loadingAlert.present();
    const homepage = await this.nbaStatsService.getHomepage(this.gameScope, this.playerOrTeam, this.playerScope, this.statType);
    
    this.scoringLeaders = homepage.homePageStat1;
    this.reboundLeaders = homepage.homePageStat2;
    this.assistLeaders = homepage.homePageStat3;
    this.stealsLeaders = homepage.homePageStat4;
    this.fgPctLeaders = homepage.homePageStat5;
    this.ftPctLeaders = homepage.homePageStat6;
    this.fg3PctLeaders = homepage.homePageStat7;
    this.blocksLeaders = homepage.homePageStat8;

    loadingAlert.dismiss();
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
    this.getHomepage();
  }
}
