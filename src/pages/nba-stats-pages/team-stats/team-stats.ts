import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NbaStatsService } from '../../../app/nba-stats/nba-stats.service';
import * as statsFixtures from '../../../app/nba-stats/stats/support/stats-fixtures';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team-stats.html',
})
export class TeamStatsPage {
  result = '';

  // Set up params:
  teamOptions = statsFixtures.teams;
  aheadBehindOptions = statsFixtures.aheadBehind;
  clutchTimeOptions = statsFixtures.clutchTime;
  pointDiffOptions = statsFixtures.pointDiff;

  // Default values:
  team = this.teamOptions[0];
  aheadBehind = this.aheadBehindOptions[0];
  clutchTime = this.clutchTimeOptions[0];
  pointDiff = this.pointDiffOptions[0].toString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private nbaStatsService: NbaStatsService) { }

  async getCommonTeamRoster() {
    const commonTeamRoster = await this.nbaStatsService.getCommonTeamRoster(this.team);
    this.print(commonTeamRoster);
  }

  async getPlayerClutch() {
    const playerClutch = await this.nbaStatsService.getPlayerClutch(this.team, this.aheadBehind, this.clutchTime, this.pointDiff);
    this.print(playerClutch);
  }

  private print(object: any) {
    this.result = JSON.stringify(object, null, 2);
    console.log(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }
}
