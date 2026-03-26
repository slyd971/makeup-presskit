import makeupArtistsJson from "@/data/makeupArtists.json";
import type { MakeupArtist } from "@/types/makeupArtist";

export const makeupArtists = makeupArtistsJson as MakeupArtist[];

export function getMakeupArtistBySlug(slug: string): MakeupArtist | undefined {
  return makeupArtists.find((artist) => artist.slug === slug);
}

export function getMakeupArtistSlugs(): string[] {
  return makeupArtists.map((artist) => artist.slug);
}

export function getDefaultMakeupArtist(): MakeupArtist | undefined {
  return makeupArtists[0];
}
