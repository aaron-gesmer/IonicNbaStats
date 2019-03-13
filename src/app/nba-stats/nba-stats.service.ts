import { Injectable } from '@angular/core';

import * as stats from './stats/stats';

@Injectable()
export class NbaStatsService {
  async getHomepage(gameScope: string, playerOrTeam: string, allOrRookies: string, statType: string) {
    return await stats.league.homepage(gameScope, playerOrTeam, allOrRookies, statType);
  }

  async getPlayerTracking(ptMeasureType: string, playerPosition: string) {
    return await stats.league.playerTracking(ptMeasureType, playerPosition);
  }

  async getPlayerInfo(playerName: string) {
    return await stats.player.playerInfo(playerName);
  }

  async getPlayerProfile(playerName: string) {
    return await stats.player.playerProfile(playerName);
  }

  async getPlayerSplits(playerName: string) {
    return await stats.player.playerSplits(playerName);
  }

  async getCommonTeamRoster(teamName: string) {
    return await stats.team.commonTeamRoster(teamName);
  }

  async getPlayerClutch(teamName: string, aheadBehind: string, clutchType: string, pointDiff: string) {
    return await stats.team.playerClutch(teamName, aheadBehind, clutchType, pointDiff);
  }

  async getPlayerShooting(teamName: string) {
    return await stats.team.playerShooting(teamName);
  }

  async getPlayerStats(teamName: string) {
    return await stats.team.playerStats(teamName);
  }

  async getShots(teamName: string) {
    return await stats.team.shots(teamName);
  }

  async getTeamClutch(teamName: string, aheadBehind, clutchType, pointDiff) {
    return await stats.team.teamClutch(teamName, aheadBehind, clutchType, pointDiff);
  }

  async getTeamHistoricalLeaders(teamName: string) {
    return await stats.team.teamHistoricalLeaders(teamName);
  }

  async getTeamInfoCommon(teamName: string) {
    return await stats.team.teamInfoCommon(teamName);
  }

  async getTeamPlayerDashboard(teamName: string) {
    return await stats.team.teamPlayerDashboard(teamName);
  }

  async getTeamShooting(teamName: string) {
    return await stats.team.teamShooting(teamName);
  }

  async getTeamSplits(teamName: string) {
    return await stats.team.teamSplits(teamName);
  }
}
