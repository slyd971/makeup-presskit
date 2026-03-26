import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import type { MakeupArtist } from "@/types/makeupArtist";

type HeroProps = {
  artist: MakeupArtist;
};

export function Hero({ artist }: HeroProps) {
  const ctaPrimaryStyle = {
    backgroundColor: artist.design.primaryColor
  };
  const accentGlowStyle = {
    backgroundColor: `${artist.design.primaryColor}14`
  };
  const frameGlowStyle = {
    backgroundColor: `${artist.design.primaryColor}12`
  };

  const renderStats = () => (
    <div className="mt-7 grid gap-2 sm:grid-cols-3">
      {artist.stats.map((stat, index) => (
        <FadeIn key={stat.label} delay={0.12 + index * 0.05}>
          <article className="rounded-[1rem] border border-black/5 bg-white/82 px-3.5 py-3 shadow-soft backdrop-blur">
            <p className="font-serif text-[1.9rem] leading-none text-ink md:text-[2.2rem]">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] uppercase leading-tight tracking-[0.2em] text-ink/55">
              {stat.label}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  );

  const renderTextBlock = (compact = false) => (
    <FadeIn className={compact ? "max-w-xl" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-sm text-ink/70 shadow-soft backdrop-blur">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: artist.design.primaryColor }}
        />
        <span>{artist.availability}</span>
      </div>

      <p className="mt-8 text-sm uppercase tracking-[0.35em] text-ink/45">
        {artist.location}
      </p>
      <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-ink md:text-7xl">
        {artist.name}
      </h1>
      <p className="mt-5 text-xl text-ink/70 md:text-2xl">{artist.tagline}</p>
      <p className="mt-8 max-w-xl text-base leading-8 text-ink/72 md:text-lg">
        {artist.intro}
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={`mailto:${artist.social.email}`}
          className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          style={ctaPrimaryStyle}
        >
          Book now
        </Link>
        <Link
          href={artist.social.instagram}
          target="_blank"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-black/20 hover:bg-black/[0.02]"
        >
          View Instagram
        </Link>
      </div>

      {renderStats()}
    </FadeIn>
  );

  if (artist.hero.variant === "portrait-stack") {
    return (
      <section id="home" className="relative overflow-hidden px-6 pb-5 pt-24 md:px-10 md:pb-7 md:pt-28">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_55%)]" />
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full blur-3xl md:h-96 md:w-96" style={accentGlowStyle} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-1 grid gap-5 md:grid-cols-[0.58fr_0.42fr] lg:order-2">
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-glow">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={artist.hero.primaryImage}
                    alt={artist.hero.primaryAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              <FadeIn delay={0.16}>
                <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.35em] text-ink/45">
                    Signature
                  </p>
                  <p className="mt-4 font-serif text-3xl text-ink">
                    Modern complexion work with fashion-led restraint.
                  </p>
                </div>
              </FadeIn>
              {artist.hero.secondaryImage ? (
                <FadeIn delay={0.22}>
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-soft">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={artist.hero.secondaryImage}
                        alt={artist.hero.secondaryAlt ?? artist.hero.primaryAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 24vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              ) : null}
            </div>
          </div>

          <div className="order-2 lg:order-1">{renderTextBlock(true)}</div>
        </div>
      </section>
    );
  }

  if (artist.hero.variant === "cinematic-video") {
    return (
      <section id="home" className="relative overflow-hidden px-6 pb-5 pt-24 md:px-10 md:pb-7 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_42%)]" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full blur-3xl" style={accentGlowStyle} />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <FadeIn delay={0.12} className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/40 bg-white/50 p-3 shadow-glow backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  {artist.hero.videoPoster ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${artist.hero.videoPoster})` }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                    <span className="rounded-full bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white">
                      Beauty Film
                    </span>
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.28em] text-ink/60">
                      Hero Variation 3
                    </span>
                  </div>

                  {artist.hero.videoSrc ? (
                    <video
                      key={artist.hero.videoSrc}
                      className="relative z-[1] aspect-[16/10] w-full bg-black/5 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="auto"
                      poster={artist.hero.videoPoster}
                      src={artist.hero.videoSrc}
                    />
                  ) : (
                    <div className="relative z-[1] flex aspect-[16/10] items-end bg-black/10 p-6">
                      <p className="max-w-sm text-sm uppercase tracking-[0.24em] text-white">
                        Add `hero.videoSrc` in the JSON config to display the motion hero.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>

            <div className="order-2 lg:order-1">{renderTextBlock(true)}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-5 pt-24 md:px-10 md:pb-7 md:pt-28">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_55%)]" />
      <div className="absolute right-[-8rem] top-10 h-72 w-72 rounded-full blur-3xl md:h-96 md:w-96" style={accentGlowStyle} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn delay={0.12} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] blur-3xl" style={frameGlowStyle} />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-glow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={artist.hero.primaryImage}
                  alt={artist.hero.primaryAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="order-2 lg:order-1">{renderTextBlock()}</div>
      </div>
    </section>
  );
}
