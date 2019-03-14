import * as nba from 'nba';
import * as statsHelpers from '../support/stats-helpers';

export const playerInfo = async(playerName: string) => {
  const playerId = statsHelpers.getPlayerIdFromName(playerName);

  return await nba.stats.playerInfo({
    PlayerID: playerId
  });
};

export const playerProfile = async(playerName: string) => {
  const playerId = statsHelpers.getPlayerIdFromName(playerName);

  return await nba.stats.playerProfile({
    PlayerID: playerId
  });
};

export const playerSplits = async(playerName: string,
  outcome: string,
  location: string,
  oppConference: string,
  oppDivision: string,
  oppTeamName?: string) => {
  const playerId = statsHelpers.getPlayerIdFromName(playerName);
  let oppTeamId = '0';

  if (oppTeamName) {
    oppTeamId = statsHelpers.getTeamIdFromName(oppTeamName);
  }

  return await nba.stats.playerSplits({
    PlayerID: playerId,
    Outcome: outcome,
    Location: location,
    VsConference: oppConference,
    VsDivision: oppDivision,
    OpponentTeamID: oppTeamId
  });
};
