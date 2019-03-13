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

export const playerSplits = async(playerName: string) => {
  const playerId = statsHelpers.getPlayerIdFromName(playerName);

  return await nba.stats.playerSplits({
    PlayerID: playerId
  });
};
