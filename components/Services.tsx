import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type ServicesProps = {
  artist: MakeupArtist;
};

const serviceIcons: Record<
  MakeupArtist["services"][number]["icon"],
  React.JSX.Element
> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3zM18.5 15l.9 2.6L22 18.5l-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6zM6 15l1.2 3.3L10.5 19l-3.3 1.2L6 23.5l-1.2-3.3L1.5 19l3.3-1.2L6 15z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  brush: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M15 4l5 5M13.5 5.5L6 13a3.5 3.5 0 104.95 4.95l7.55-7.45a2 2 0 000-2.83l-2.17-2.17a2 2 0 00-2.83 0zM4 20c1.2-.2 2.1-.6 2.8-1.3.7-.7 1.1-1.6 1.3-2.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M8 6l1.2-2h5.6L16 6h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2zm4 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M7 4h10l4 5-9 11L3 9l4-5zM7 4l5 16m5-16l-5 16M3 9h18"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  runway: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3v18M7 6l5 2 5-2M8 12l4 1.5L16 12M9 18l3 .8 3-.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export function Services({ artist }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-5 md:px-10 md:py-7">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Services"
            title="Curated beauty services"
            description="A clean modular structure makes each client profile easy to adapt while keeping the same premium presentation."
          />
        </FadeIn>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {artist.services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <article className="group h-full rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-ink transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${artist.design.primaryColor}10` }}
                >
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="mt-8 font-serif text-3xl text-ink">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-ink/70">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
