"use client";

import { useState } from "react";
import Link from "next/link";

import type { MakeupArtist } from "@/types/makeupArtist";

type TemplateSwitcherProps = {
  artists: MakeupArtist[];
  activeSlug: string;
};

const variantLabels: Record<MakeupArtist["hero"]["variant"], string> = {
  "editorial-split": "Template 01",
  "portrait-stack": "Template 02",
  "cinematic-video": "Template 03"
};

export function TemplateSwitcher({
  artists,
  activeSlug
}: TemplateSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6">
      <div className="rounded-full border border-black/5 bg-white/72 px-2 py-2 shadow-soft backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse template switcher" : "Expand template switcher"}
            className="inline-flex h-8 items-center justify-center rounded-full border border-black/5 bg-white/70 px-3 text-[10px] uppercase tracking-[0.22em] text-ink/55 transition-colors duration-300 hover:bg-white"
          >
            {isOpen ? "Close" : "Switch"}
          </button>

          {isOpen ? (
            <div className="flex items-center gap-1.5">
              {artists.map((item) => {
                const isActive = item.slug === activeSlug;

                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    aria-label={`${variantLabels[item.hero.variant]} ${item.name}`}
                    title={`${variantLabels[item.hero.variant]} · ${item.name}`}
                    className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-2.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: isActive
                        ? item.design.primaryColor
                        : "rgba(23, 19, 18, 0.07)",
                      backgroundColor: isActive
                        ? item.design.primaryColor
                        : "rgba(255,255,255,0.72)",
                      color: isActive ? "#ffffff" : "rgba(23, 19, 18, 0.52)"
                    }}
                  >
                    {item.slug.slice(0, 2)}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
