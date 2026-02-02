# Walkthrough - Static Application

The application is now a purely static viewer for the IPL Auction stats.

## Cleanup

- Removed `SessionProvider.tsx` and its integration in `layout.tsx`. The "session" requirement was dropped in favor of a fully static approach.
- Removed unused helper functions (`filterUnsold`, `filterSold`) from `lib/filters.ts`.

## Current State

- **Player Data**: Loaded statically from `data/players.json`.
- **Interactivity**: Browse players by role, view detailed stats.
- **State**: No client-side modification is supported. The application reflects exactly what is in the JSON file.

## Verification

1. The application builds and runs without errors.
2. Browsing pages works as expected.
3. No 'Sold' toggle or session persistence is present.
