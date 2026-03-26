import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type TestimonialsProps = {
  artist: MakeupArtist;
};

export function Testimonials({ artist }: TestimonialsProps) {
  return (
    <section className="px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Testimonials"
            title="Words from clients and creative teams"
            align="center"
          />
        </FadeIn>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {artist.testimonials.map((testimonial, index) => (
            <FadeIn key={`${testimonial.name}-${index}`} delay={index * 0.08}>
              <article className="h-full rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft">
                <p className="text-lg leading-8 text-ink/72">“{testimonial.text}”</p>
                <div className="mt-8 border-t border-black/5 pt-5">
                  <p className="font-serif text-2xl text-ink">{testimonial.name}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-ink/50">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
