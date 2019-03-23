import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeagueStatsPage } from '../league-stats/league-stats';

@NgModule({
  declarations: [
    LeagueStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(LeagueStatsPage),
  ],
})
export class LeaguePageModule {}
