import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type CollaborationsProps = {
  artist: MakeupArtist;
};

export function Collaborations({ artist }: CollaborationsProps) {
  return (
    <section className="px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/5 bg-white px-6 py-10 shadow-soft md:px-10">
        <FadeIn>
          <SectionIntro
            eyebrow="Collaborations"
            title="Trusted by brands and creative partners"
            description="This section stays intentionally simple so each new artist can swap in logos, names or agency partners without touching the UI layer."
          />
        </FadeIn>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {artist.collaborations.map((collaboration, index) => (
            <FadeIn key={collaboration} delay={index * 0.06}>
              <div className="rounded-[1.4rem] border border-black/5 bg-[rgba(245,237,230,0.55)] px-5 py-6 text-center text-sm uppercase tracking-[0.25em] text-ink/60">
                {collaboration}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
