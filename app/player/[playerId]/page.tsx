import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PlayerHeader } from "@/components/PlayerHeader";
import { BattingStats } from "@/components/BattingStats";
import { BowlingStats } from "@/components/BowlingStats";
import { AllRounderStats } from "@/components/AllRounderStats";
import { getPlayerById, getPlayers } from "@/lib/getPlayers";

interface PlayerPageProps {
  params: Promise<{
    playerId: string;
  }>;
}

export async function generateStaticParams() {
  const players = getPlayers();
  return players.map((player) => ({
    playerId: player.playerId,
  }));
}

export async function generateMetadata({ params }: PlayerPageProps) {
  const { playerId } = await params;
  const player = getPlayerById(playerId);
  if (!player) {
    return {
      title: "Player Not Found | IPL Player Stats",
    };
  }
  return {
    title: `${player.name} | IPL Player Stats`,
    description: `View detailed statistics for ${player.name} - ${player.role} from ${player.teamLastSeason}`,
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { playerId } = await params;
  const player = getPlayerById(playerId);

  if (!player) {
    notFound();
  }

  const roleHref =
    player.role === "Batsman"
      ? "/batsmen"
      : player.role === "Bowler"
        ? "/bowlers"
        : player.role === "AllRounder"
          ? "/allrounders"
          : "/wicketkeepers";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href={roleHref} className="hover:text-primary">
            {player.role === "AllRounder" ? "All-Rounders" : `${player.role}s`}
          </Link>
          <span>/</span>
          <span className="text-primary">{player.name}</span>
        </nav>

        {/* Player Header */}
        <PlayerHeader player={player} />

        {/* Stats Sections */}
        <div className="mt-8 space-y-6">
          <BattingStats stats={player.battingStats} />
          <BowlingStats stats={player.bowlingStats} />
          <AllRounderStats stats={player.allRounderStats} />
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href={roleHref}
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to {player.role === "AllRounder" ? "All-Rounders" : `${player.role}s`}
          </Link>
        </div>
      </main>
    </div>
  );
}
