"use client";

import Link from "next/link";

interface RoleCardProps {
  title: string;
  href: string;
  imageUrl: string;
  playerCount: number;
}

export function RoleCard({ title, href, imageUrl, playerCount }: RoleCardProps) {
  return (
    <Link href={href} className="group relative block h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative flex h-full flex-col items-center justify-end p-6 pb-10 md:pb-12">
        <h2 className="text-3xl font-bold text-foreground drop-shadow-lg md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">{playerCount} Players</p>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-transparent border border-white px-4 py-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white/10">
          View Players
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
