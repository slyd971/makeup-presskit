import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type AboutProps = {
  artist: MakeupArtist;
};

export function About({ artist }: AboutProps) {
  return (
    <section className="px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <SectionIntro
            eyebrow="Profile"
            title={artist.tagline}
            description={artist.bio}
          />
        </FadeIn>

        <div className="grid gap-2 sm:grid-cols-3">
          {artist.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <article className="inline-flex h-auto w-fit min-w-[110px] flex-col rounded-[0.95rem] border border-black/5 bg-white px-3 py-3 shadow-soft">
                <p className="font-serif text-[2rem] leading-none text-ink md:text-[2.35rem]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase leading-tight tracking-[0.2em] text-ink/55">
                  {stat.label}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
