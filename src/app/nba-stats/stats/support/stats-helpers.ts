import * as nba from 'nba';

export const getPlayer = (playerName: string): string => {
  return nba.playerIdFromName(playerName);
};

export const getPlayerIdFromName = (playerName: string): string => {
  return nba.playerIdFromName(playerName);
};

export const getTeamIdFromName = (teamName: string): string => {
  return nba.teamIdFromName(teamName);
};

export const updatePlayers = (): void => {
  nba.updatePlayers();
};

export const updateTeams = (): void => {
  nba.updateTeams();
};
