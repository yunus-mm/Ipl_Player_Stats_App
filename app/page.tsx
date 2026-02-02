import { RoleCard } from "@/components/RoleCard";
import { getPlayersByRole } from "@/lib/getPlayers";

export default function HomePage() {
  const batsmenCount = getPlayersByRole("Batsman").length;
  const bowlersCount = getPlayersByRole("Bowler").length;
  const allroundersCount = getPlayersByRole("AllRounder").length;
  const wicketkeepersCount = getPlayersByRole("WicketKeeper").length;

  const roles = [
    {
      title: "Batsmen",
      href: "/batsmen",
      imageUrl: "/roles/batsman.jpg",
      playerCount: batsmenCount,
    },
    {
      title: "Bowlers",
      href: "/bowlers",
      imageUrl: "/roles/bowler.jpg",
      playerCount: bowlersCount,
    },
    {
      title: "All-Rounders",
      href: "/allrounders",
      imageUrl: "/roles/allrounder.jpg",
      playerCount: allroundersCount,
    },
    {
      title: "Wicketkeepers",
      href: "/wicketkeepers",
      imageUrl: "/roles/wicketkeeper.jpg",
      playerCount: wicketkeepersCount,
    },
  ];

  return (
    <main className="h-screen w-screen">
      <div className="grid h-full w-full grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
        {roles.map((role) => (
          <RoleCard
            key={role.href}
            title={role.title}
            href={role.href}
            imageUrl={role.imageUrl}
            playerCount={role.playerCount}
          />
        ))}
      </div>
    </main>
  );
}
