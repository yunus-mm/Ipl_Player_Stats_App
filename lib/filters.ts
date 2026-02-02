import type { Player } from "./getPlayers";

export function filterByRole(players: Player[], role: string): Player[] {
  return players.filter(
    (player) => player.role.toLowerCase() === role.toLowerCase()
  );
}



export function searchPlayers(players: Player[], query: string): Player[] {
  const lowerQuery = query.toLowerCase();
  return players.filter(
    (player) =>
      player.name.toLowerCase().includes(lowerQuery) ||
      player.teamLastSeason.toLowerCase().includes(lowerQuery) ||
      player.role.toLowerCase().includes(lowerQuery)
  );
}
