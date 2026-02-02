import type { BattingStats as BattingStatsType } from "@/lib/getPlayers";
import { StatBlock } from "./StatBlock";

interface BattingStatsProps {
  stats: BattingStatsType;
}

export function BattingStats({ stats }: BattingStatsProps) {
  const hasStats =
    stats.matches ||
    stats.runs ||
    stats.average ||
    stats.strikeRate;

  if (!hasStats) return null;

  return (
    <section className="rounded-xl bg-card/50 p-6">
      <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
        Batting Statistics
      </h2>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <StatBlock label="Matches" value={stats.matches} highlight />
        <StatBlock label="Innings" value={stats.innings} />
        <StatBlock label="Runs" value={stats.runs} highlight />
        <StatBlock label="Average" value={stats.average} highlight />
        <StatBlock label="Strike Rate" value={stats.strikeRate} highlight />
        <StatBlock label="50s" value={stats.fifties} />
        <StatBlock label="100s" value={stats.hundreds} />
        <StatBlock label="Balls/Dismissal" value={stats.ballsPerDismissal} />
      </div>

      {/* Boundaries */}
      {(stats.boundaries.fours || stats.boundaries.sixes) && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
            Boundaries
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <StatBlock label="Fours" value={stats.boundaries.fours} />
            <StatBlock label="Sixes" value={stats.boundaries.sixes} />
            <StatBlock
              label="Boundary %"
              value={stats.boundaries.boundaryPercentage ? `${stats.boundaries.boundaryPercentage}` : ""}
            />
          </div>
        </div>
      )}

      {/* Phase-wise Strike Rate */}
      {(stats.phaseWiseStrikeRate.powerplay ||
        stats.phaseWiseStrikeRate.middleOvers ||
        stats.phaseWiseStrikeRate.deathOvers) && (
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
              Phase-wise Strike Rate
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <StatBlock
                label="Powerplay"
                value={stats.phaseWiseStrikeRate.powerplay}
              />
              <StatBlock
                label="Middle Overs"
                value={stats.phaseWiseStrikeRate.middleOvers}
              />
              <StatBlock
                label="Death Overs"
                value={stats.phaseWiseStrikeRate.deathOvers}
              />
            </div>
          </div>
        )}

      {/* Recent Form */}
      {(stats.recentForm.lastSeasonRuns || stats.recentForm.recentAverage) && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
            Recent Form (Last Season)
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <StatBlock label="Runs" value={stats.recentForm.lastSeasonRuns} />
            <StatBlock
              label="Matches"
              value={stats.recentForm.lastSeasonMatches}
            />
            <StatBlock label="Average" value={stats.recentForm.recentAverage} />
          </div>
        </div>
      )}

      {/* Consistency */}
      {stats.consistency.thirtyPlusPercentage && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
            Consistency
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <StatBlock
              label="30+ Score %"
              value={`${stats.consistency.thirtyPlusPercentage}`}
              highlight
            />
          </div>
        </div>
      )}
    </section>
  );
}
