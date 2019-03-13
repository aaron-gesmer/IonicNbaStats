import * as nba from 'nba';

export const homepage = async(gameScope: string, playerOrTeam: string, allOrRookies: string, statType: string) => {
  return await nba.stats.homepageV2({
    GameScope: gameScope,
    PlayerOrTeam: playerOrTeam,
    PlayerScope: allOrRookies,
    StatType: statType
  });
};

export const playerTracking = async(ptMeasureType: string, playerPosition: string) => {
  return await nba.stats.playerTracking({
    PtMeasureType: ptMeasureType,
    PlayerPosition: playerPosition,
  });
};
