import { Navbar } from "@/components/Navbar";
import { getPlayersByRole } from "@/lib/getPlayers";
import { SearchablePlayerList } from "@/components/SearchablePlayerList";

export const metadata = {
  title: "Bowlers | IPL Player Stats",
  description: "View all IPL bowlers and their statistics",
};

export default function BowlersPage() {
  const bowlers = getPlayersByRole("Bowler");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SearchablePlayerList title="Bowlers" players={bowlers} />
      </main>
    </div>
  );
}
