import { FadeIn } from "@/components/FadeIn";
import type { MakeupArtist } from "@/types/makeupArtist";

type AboutProps = {
  artist: MakeupArtist;
};

export function About({ artist }: AboutProps) {
  const featuredCollaborations = artist.collaborations.slice(0, 6);
  const bioParagraphs = artist.bio
    .split(". ")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index, array) =>
      index === array.length - 1 || paragraph.endsWith(".")
        ? paragraph
        : `${paragraph}.`
    );

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-6 py-6 md:px-10 md:py-9">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.45), transparent 24%), radial-gradient(circle at 80% 100%, rgba(23,19,18,0.04), transparent 22%)"
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ink/45 md:mb-5">
          Profile
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-8">
          <FadeIn>
            <div className="relative">
              <div
                className="absolute left-0 top-1 h-full w-px"
                style={{
                  background: `linear-gradient(to bottom, ${artist.design.primaryColor}, rgba(23,19,18,0.16), transparent)`
                }}
              />

              <div className="pl-4 md:pl-5">
                <h2 className="max-w-lg font-serif text-4xl leading-[0.96] text-ink md:text-6xl">
                  {artist.tagline}
                </h2>

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ink/38">
                    Signature
                  </div>
                  <p className="mt-3 max-w-xl font-serif text-2xl leading-[1.22] text-ink md:text-3xl">
                    “{artist.intro}”
                  </p>
                  <div
                    className="mt-4 h-px w-16"
                    style={{ backgroundColor: artist.design.primaryColor }}
                  />
                </div>

                <div className="mt-6 text-sm leading-7 text-ink/70">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-ink/38">
                      Location
                    </div>
                    <p className="mt-2">{artist.location}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredCollaborations.map((collaboration) => (
                    <div
                      key={collaboration}
                      className="rounded-full border border-black/8 bg-white/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ink/58"
                    >
                      {collaboration}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-black/5 bg-white/85 p-5 shadow-soft backdrop-blur-sm md:rounded-[1.8rem] md:p-7">
              <div className="space-y-4 text-sm leading-7 text-ink/72 md:text-base md:leading-8">
                {bioParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
