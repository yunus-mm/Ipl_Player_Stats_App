"use client";

import Image from "next/image";
import type { Player } from "@/lib/getPlayers";

interface PlayerHeaderProps {
  player: Player;
}

export function PlayerHeader({ player }: PlayerHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
      <div className="relative h-64 w-48 overflow-hidden rounded-xl bg-card shadow-xl ring-1 ring-white/10 md:h-80 md:w-60">
        <Image
          src={player.image || "/placeholder.svg"}
          alt={player.name}
          fill
          className="object-cover"
          priority
        />
        {/* {player.unsold && (
          <div className="absolute right-2 top-2 rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold text-white">
            UNSOLD
          </div>
        )} */}
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          {player.name}
        </h1>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            {player.role}
          </span>
          <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            {player.handedness}-handed
          </span>
        </div>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="font-semibold text-primary">Age:</span>
            {player.age} years
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold text-primary">Team:</span>
            {player.teamLastSeason}
          </p>
        </div>
      </div>
    </div>
  );
}
