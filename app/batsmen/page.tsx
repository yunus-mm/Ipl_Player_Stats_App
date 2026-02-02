import { Navbar } from "@/components/Navbar";
import { getPlayersByRole } from "@/lib/getPlayers";
import { SearchablePlayerList } from "@/components/SearchablePlayerList";

export const metadata = {
  title: "Batsmen | IPL Player Stats",
  description: "View all IPL batsmen and their statistics",
};

export default function BatsmenPage() {
  const batsmen = getPlayersByRole("Batsman");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SearchablePlayerList title="Batsmen" players={batsmen} />
      </main>
    </div>
  );
}
