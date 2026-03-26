import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type BeforeAfterProps = {
  artist: MakeupArtist;
};

export function BeforeAfter({ artist }: BeforeAfterProps) {
  const transformations = artist.beforeAfter ?? [];

  if (transformations.length === 0) {
    return null;
  }

  return (
    <section id="before-after" className="scroll-mt-24 px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Avant / Apres"
            title="La transformation"
            description="Un bloc rassurant pour montrer l’impact du travail peau, des textures et de la finition makeup."
          />
        </FadeIn>

        <div className="mt-6 grid gap-5">
          {transformations.map((item, index) => (
            <FadeIn key={`${item.title}-${index}`} delay={index * 0.08}>
              <article className="grid gap-5 overflow-hidden rounded-[1.9rem] border border-black/5 bg-white p-4 shadow-soft lg:grid-cols-[0.74fr_1.26fr] lg:p-5">
                <div className="px-2 py-2 lg:px-4 lg:py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-ink/42">
                    Transformation
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-ink/72">{item.context}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[1.4rem] border border-black/5">
                    <div className="px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-ink/45">
                      Avant
                    </div>
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.beforeSrc}
                        alt={item.beforeAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 28vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.4rem] border border-black/5">
                    <div className="px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-ink/45">
                      Apres
                    </div>
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.afterSrc}
                        alt={item.afterAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 28vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
