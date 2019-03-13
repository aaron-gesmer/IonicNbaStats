import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerStatsPage } from '../player-stats/player-stats';

@NgModule({
  declarations: [
    PlayerStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerStatsPage),
  ],
})
export class PlayerPageModule {}
