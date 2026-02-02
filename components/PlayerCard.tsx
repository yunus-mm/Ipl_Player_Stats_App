"use client";

import Link from "next/link";
import Image from "next/image";
import type { Player } from "@/lib/getPlayers";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link
      href={`/player/${player.playerId}`}
      className="group relative block overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        <Image
          src={player.image || "/placeholder.svg"}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/players/default.png";
          }}
        />
        {/* {player.unsold && (
          <div className="absolute right-2 top-2 rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold text-white">
            UNSOLD
          </div>
        )} */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-12">
          <h3 className="text-lg font-bold text-foreground md:text-xl">
            {player.name}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
              {player.role}
            </span>
            <span className="text-sm text-muted-foreground">{player.teamLastSeason}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
