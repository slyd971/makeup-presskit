import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { About } from "@/components/About";
import { Collaborations } from "@/components/Collaborations";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { TemplateSwitcher } from "@/components/TemplateSwitcher";
import { Testimonials } from "@/components/Testimonials";
import { Videos } from "@/components/Videos";
import {
  makeupArtists,
  getMakeupArtistBySlug,
  getMakeupArtistSlugs
} from "@/data/makeupArtists";

type ArtistPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getMakeupArtistSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ArtistPageProps): Metadata {
  const artist = getMakeupArtistBySlug(params.slug);

  if (!artist) {
    return {
      title: "Press kit unavailable"
    };
  }

  return {
    title: `${artist.name} | Press Kit`,
    description: artist.intro
  };
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist = getMakeupArtistBySlug(params.slug);

  if (!artist) {
    notFound();
  }

  const themeStyle = {
    ["--canvas" as string]: artist.design.secondaryColor,
    ["--ink" as string]: artist.design.primaryColor,
    ["--accent" as string]: artist.design.primaryColor,
    ["--accent-soft" as string]: artist.design.secondaryColor
  } satisfies CSSProperties;

  return (
    <main style={themeStyle} className="min-h-screen">
      <div className="bg-editorial-grid bg-[length:auto,34px_34px,34px_34px]">
        <TemplateSwitcher artists={makeupArtists} activeSlug={artist.slug} />
        <Hero artist={artist} />
        <About artist={artist} />
        <Services artist={artist} />
        <Portfolio artist={artist} />
        <Videos artist={artist} />
        <Collaborations artist={artist} />
        <Testimonials artist={artist} />
        <Contact artist={artist} />
      </div>
    </main>
  );
}
