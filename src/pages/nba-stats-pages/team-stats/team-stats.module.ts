import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamStatsPage } from '../team-stats/team-stats';

@NgModule({
  declarations: [
    TeamStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamStatsPage),
  ],
})
export class TeamPageModule {}
