import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type WorkKitProps = {
  artist: MakeupArtist;
};

export function WorkKit({ artist }: WorkKitProps) {
  if (!artist.workKit || artist.workKit.brands.length === 0) {
    return null;
  }

  return (
    <section id="work-kit" className="scroll-mt-24 px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl rounded-[1.9rem] border border-black/5 bg-white px-6 py-6 shadow-soft md:px-8">
        <FadeIn>
          <SectionIntro
            eyebrow="Kit de Travail"
            title="Rassurance pro"
            description={artist.workKit.note}
          />
        </FadeIn>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {artist.workKit.brands.map((brand, index) => (
            <FadeIn key={brand} delay={index * 0.05}>
              <div className="rounded-[1.2rem] border border-black/6 bg-[rgba(245,237,230,0.42)] px-4 py-5 text-center">
                <span className="font-serif text-2xl text-ink md:text-[1.9rem]">{brand}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
