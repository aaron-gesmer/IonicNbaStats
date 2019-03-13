import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { LeagueStatsPage } from '../pages/nba-stats-pages/league-stats/league-stats';
import { PlayerStatsPage } from '../pages/nba-stats-pages/player-stats/player-stats';
import { TeamStatsPage } from '../pages/nba-stats-pages/team-stats/team-stats';

import { NbaStatsService } from '../app/nba-stats/nba-stats.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LeagueStatsPage,
    PlayerStatsPage,
    TeamStatsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LeagueStatsPage,
    PlayerStatsPage,
    TeamStatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NbaStatsService
  ]
})
export class AppModule {}
