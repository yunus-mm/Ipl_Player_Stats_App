import { Navbar } from "@/components/Navbar";
import { getPlayersByRole } from "@/lib/getPlayers";
import { SearchablePlayerList } from "@/components/SearchablePlayerList";

export const metadata = {
  title: "All-Rounders | IPL Player Stats",
  description: "View all IPL all-rounders and their statistics",
};

export default function AllRoundersPage() {
  const allrounders = getPlayersByRole("AllRounder");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SearchablePlayerList title="All-Rounders" players={allrounders} />
      </main>
    </div>
  );
}
