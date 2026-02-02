"use client";

import { useState } from "react";
import { PlayerCard } from "./PlayerCard";
import type { Player } from "@/lib/getPlayers";
import { Search } from "lucide-react";

interface SearchablePlayerListProps {
    title: string;
    players: Player[];
}

export function SearchablePlayerList({ title, players }: SearchablePlayerListProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPlayers = players
        .filter((player) =>
            player.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                        {title}
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        {filteredPlayers.length} {filteredPlayers.length === 1 ? "player" : "players"} found
                    </p>
                </div>
                <div className="relative w-full sm:w-72">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search players..."
                        className="block w-full rounded-xl border-2 border-border bg-background py-2 pl-10 pr-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-0 sm:text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </header>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
                {filteredPlayers.map((player) => (
                    <PlayerCard key={player.playerId} player={player} />
                ))}
            </div>
            {filteredPlayers.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20">
                    <p className="text-lg text-muted-foreground">No {title.toLowerCase()} found</p>
                </div>
            )}
        </>
    );
}
