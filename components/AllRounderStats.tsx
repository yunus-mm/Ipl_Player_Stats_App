import type { AllRounderStats as AllRounderStatsType } from "@/lib/getPlayers";
import { StatBlock } from "./StatBlock";

interface AllRounderStatsProps {
  stats: AllRounderStatsType;
}

export function AllRounderStats({ stats }: AllRounderStatsProps) {
  const hasStats =
    stats.matchesWithRunsAndWickets ||
    stats.averageBattingPosition ||
    stats.oversBowledPerMatch;

  if (!hasStats) return null;

  return (
    <section className="rounded-xl bg-card/50 p-6">
      <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
        All-Rounder Impact
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatBlock
          label="Matches with Runs & Wickets"
          value={stats.matchesWithRunsAndWickets}
          highlight
        />
        <StatBlock
          label="Avg Batting Position"
          value={stats.averageBattingPosition}
        />
        <StatBlock
          label="Overs/Match"
          value={stats.oversBowledPerMatch}
        />
      </div>
    </section>
  );
}
