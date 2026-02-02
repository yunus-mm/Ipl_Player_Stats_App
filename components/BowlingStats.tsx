import type { BowlingStats as BowlingStatsType } from "@/lib/getPlayers";
import { StatBlock } from "./StatBlock";

interface BowlingStatsProps {
  stats: BowlingStatsType;
}

export function BowlingStats({ stats }: BowlingStatsProps) {
  const hasStats =
    stats.inningsBowled || stats.wickets || stats.average || stats.economy;

  if (!hasStats) return null;

  return (
    <section className="rounded-xl bg-card/50 p-6">
      <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
        Bowling Statistics
      </h2>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        <StatBlock label="Innings" value={stats.inningsBowled} />
        <StatBlock label="Wickets" value={stats.wickets} highlight />
        <StatBlock label="Average" value={stats.average} highlight />
        <StatBlock label="Economy" value={stats.economy} highlight />
        <StatBlock label="Strike Rate" value={stats.strikeRate} />
      </div>

      {/* Phase-wise Economy */}
      {(stats.phaseWiseEconomy.powerplay || stats.phaseWiseEconomy.deathOvers) && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
            Phase-wise Economy
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <StatBlock
              label="Powerplay"
              value={stats.phaseWiseEconomy.powerplay}
            />
            <StatBlock
              label="Death Overs"
              value={stats.phaseWiseEconomy.deathOvers}
            />
          </div>
        </div>
      )}

      {/* Control */}
      {(stats.control.dotBallPercentage || stats.control.oversUnderSixRPO) && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-muted-foreground">Control</h3>
          <div className="grid grid-cols-2 gap-3">
            <StatBlock
              label="Dot Ball %"
              value={stats.control.dotBallPercentage ? `${stats.control.dotBallPercentage}` : ""}
              highlight
            />
            <StatBlock
              label="Overs Under 6 RPO"
              value={stats.control.oversUnderSixRPO}
            />
          </div>
        </div>
      )}

      {/* Recent Form */}
      {(stats.recentForm.lastSeasonWickets ||
        stats.recentForm.lastSeasonEconomy) && (
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
              Recent Form (Last Season)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <StatBlock
                label="Wickets"
                value={stats.recentForm.lastSeasonWickets}
              />
              <StatBlock
                label="Economy"
                value={stats.recentForm.lastSeasonEconomy}
              />
            </div>
          </div>
        )}
    </section>
  );
}
