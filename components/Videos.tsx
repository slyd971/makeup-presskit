import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type VideosProps = {
  artist: MakeupArtist;
};

export function Videos({ artist }: VideosProps) {
  const videos = artist.videos?.slice(0, 3) ?? [];

  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Motion"
            title="Beauty film selection"
            description="A dedicated video block for reels, backstage captures and beauty campaign motion content."
          />
        </FadeIn>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => (
            <FadeIn key={`${video.src}-${index}`} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-soft">
                <div className="relative">
                  <video
                    className="aspect-[4/5] w-full bg-black object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} />
                  </video>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-serif text-3xl text-ink">{video.title}</p>
                  {video.description ? (
                    <p className="mt-3 text-base leading-8 text-ink/70">
                      {video.description}
                    </p>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
