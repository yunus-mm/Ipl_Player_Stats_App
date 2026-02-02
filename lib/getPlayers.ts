import playersData from "@/data/players.json";

export interface BoundaryStats {
  fours: string;
  sixes: string;
  boundaryPercentage: string;
}

export interface PhaseWiseStrikeRate {
  powerplay: string;
  middleOvers: string;
  deathOvers: string;
}

export interface ConsistencyStats {
  thirtyPlusPercentage: string;
}

export interface BattingRecentForm {
  lastSeasonRuns: string;
  lastSeasonMatches: string;
  recentAverage: string;
}

export interface BattingStats {
  matches: string;
  innings: string;
  runs: string;
  average: string;
  strikeRate: string;
  fifties: string;
  hundreds: string;
  ballsPerDismissal: string;
  boundaries: BoundaryStats;
  phaseWiseStrikeRate: PhaseWiseStrikeRate;
  consistency: ConsistencyStats;
  recentForm: BattingRecentForm;
}

export interface PhaseWiseEconomy {
  powerplay: string;
  deathOvers: string;
}

export interface BowlingControl {
  dotBallPercentage: string;
  oversUnderSixRPO: string;
}

export interface BowlingRecentForm {
  lastSeasonWickets: string;
  lastSeasonEconomy: string;
}

export interface BowlingStats {
  inningsBowled: string;
  wickets: string;
  average: string;
  economy: string;
  strikeRate: string;
  phaseWiseEconomy: PhaseWiseEconomy;
  control: BowlingControl;
  recentForm: BowlingRecentForm;
}

export interface AllRounderStats {
  matchesWithRunsAndWickets: string;
  averageBattingPosition: string;
  oversBowledPerMatch: string;
}

export interface Player {
  playerId: string;
  name: string;
  age: string;
  role: string;
  handedness: string;
  teamLastSeason: string;
  image: string;
  unsold: boolean;
  battingStats: BattingStats;
  bowlingStats: BowlingStats;
  allRounderStats: AllRounderStats;
}

export function getPlayers(): Player[] {
  return playersData as Player[];
}

export function getPlayerById(playerId: string): Player | undefined {
  return (playersData as Player[]).find(
    (player) => player.playerId === playerId
  );
}

export function getPlayersByRole(role: string): Player[] {
  return (playersData as Player[]).filter(
    (player) => player.role.toLowerCase() === role.toLowerCase()
  );
}
