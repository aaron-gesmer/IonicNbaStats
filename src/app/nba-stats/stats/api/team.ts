import * as nba from 'nba';
import * as statsHelpers from '../support/stats-helpers';

export const commonTeamRoster = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.commonTeamRoster({
    TeamID: teamId
  });
};

export const playerClutch = async(teamName: string, aheadBehind: string, clutchTime: string, pointDiff: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.playerClutch({
    AheadBehind: aheadBehind,
    ClutchTime: clutchTime,
    PointDiff: pointDiff,
    TeamID: teamId
  });
};

export const playerShooting = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.playerShooting({
    TeamID: teamId
  });
};

export const playerStats = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.playerStats({
    TeamID: teamId
  });
};

export const shots = async(teamName: string, playerName?: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);
  let playerId = '0';

  if (playerName) {
    playerId = statsHelpers.getPlayerIdFromName(playerName);
  }

  return await nba.stats.shots({
    TeamID: teamId,
    PlayerID: playerId
  });
};

export const teamClutch = async(teamName: string, aheadBehind: string, clutchTime: string, pointDiff: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.teamClutch({
    AheadBehind: aheadBehind,
    ClutchTime: clutchTime,
    LeagueID: '00',
    PointDiff: pointDiff,
    Season: '2018-19',
    TeamID: teamId
  });
};

export const teamHistoricalLeaders = async(teamName: string, endYear?: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);
  let year = '2019';

  if (endYear) {
    year = endYear;
  }

  return await nba.stats.teamHistoricalLeaders({
    TeamID: teamId,
    SeasonID: `2${year}`
  });
};

export const teamInfoCommon = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.teamInfoCommon({
    TeamID: teamId
  });
};

export const teamPlayerDashboard = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.teamPlayerDashboard({
    SeasonType: 'Regular Season',
    TeamID: teamId
  });
};

export const teamShooting = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.teamShooting({
    TeamID: teamId
  });
};

export const teamSplits = async(teamName: string) => {
  const teamId = statsHelpers.getTeamIdFromName(teamName);

  return await nba.stats.teamSplits({
    TeamID: teamId
  });
};
