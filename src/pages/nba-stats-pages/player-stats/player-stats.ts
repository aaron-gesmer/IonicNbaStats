import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NbaStatsService } from '../../../app/nba-stats/nba-stats.service';
import * as statsFixtures from '../../../app/nba-stats/stats/support/stats-fixtures';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player-stats.html',
})
export class PlayerStatsPage {
  result = '';

  // Set up params:
  locationOptions = statsFixtures.location;
  conferenceOptions = statsFixtures.conferences;
  divisionOptions = statsFixtures.divisions;
  oppTeamOptions = statsFixtures.teams;

  // Default values:
  outcome = '';
  location = '';
  oppConference = '';
  oppDivision = '';
  oppTeam = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private nbaStatsService: NbaStatsService) { }

  async getPlayerInfo(playerName: string) {
    const playerInfo = await this.nbaStatsService.getPlayerInfo(playerName);
    this.print(playerInfo);
  }

  async getPlayerProfile(playerName: string) {
    const playerProfile = await this.nbaStatsService.getPlayerProfile(playerName);
    this.print(playerProfile);
  }

  async getPlayerSplits(playerName: string) {
    const playerSplits = await this.nbaStatsService.getPlayerSplits(playerName, this.outcome, this.location, this.oppConference, this.oppDivision, this.oppTeam);
    this.print(playerSplits);
  }

  private print(object: any) {
    this.result = JSON.stringify(object, null, 2);
    console.log(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }
}
