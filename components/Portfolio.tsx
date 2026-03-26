"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type PortfolioProps = {
  artist: MakeupArtist;
};

export function Portfolio({ artist }: PortfolioProps) {
  const categories = useMemo(
    () => ["All", ...new Set(artist.portfolio.map((item) => item.category))],
    [artist.portfolio]
  );
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const items =
    activeCategory === "All"
      ? artist.portfolio
      : artist.portfolio.filter((item) => item.category === activeCategory);

  return (
    <section className="px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Portfolio"
          title="Selected beauty work"
          description="A responsive gallery with optional filtering keeps the experience editorial while staying practical for agency scale."
        />

        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="rounded-full border px-5 py-2.5 text-sm transition-colors duration-300"
                style={{
                  borderColor: isActive ? artist.design.primaryColor : "rgba(23, 19, 18, 0.08)",
                  backgroundColor: isActive ? artist.design.primaryColor : "rgba(255,255,255,0.9)",
                  color: isActive ? "#ffffff" : "rgba(23, 19, 18, 0.8)"
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={`${item.src}-${activeCategory}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <p className="text-sm font-medium text-ink">{item.alt}</p>
                <span className="rounded-full bg-black/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/60">
                  {item.category}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
