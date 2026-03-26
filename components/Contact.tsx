import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type ContactProps = {
  artist: MakeupArtist;
};

export function Contact({ artist }: ContactProps) {
  const contacts = [
    {
      label: "Email",
      value: artist.social.email,
      href: `mailto:${artist.social.email}`
    },
    {
      label: "Instagram",
      value: artist.social.instagram.replace("https://", ""),
      href: artist.social.instagram
    },
    artist.social.phone
      ? {
          label: "Phone",
          value: artist.social.phone,
          href: `tel:${artist.social.phone.replace(/\s+/g, "")}`
        }
      : null,
    artist.social.tiktok
      ? {
          label: "TikTok",
          value: artist.social.tiktok.replace("https://", ""),
          href: artist.social.tiktok
        }
      : null
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <section className="px-6 pb-7 pt-5 md:px-10 md:pb-9 md:pt-7">
      <FadeIn className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-black/5 bg-white shadow-glow">
        <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionIntro
            eyebrow="Contact"
            title={`Book ${artist.name}`}
            description="Final CTA block designed to convert quickly for agencies, brides, private clients and brand teams."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => (
              <Link
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                className="rounded-[1.5rem] border border-black/5 bg-[rgba(245,237,230,0.45)] p-5 transition-colors duration-300 hover:bg-[rgba(245,237,230,0.7)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-ink/45">
                  {contact.label}
                </p>
                <p className="mt-3 break-all text-base text-ink">{contact.value}</p>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="px-6 py-6 text-center text-sm text-white md:px-10"
          style={{ backgroundColor: artist.design.primaryColor }}
        >
          <Link href={`mailto:${artist.social.email}`} className="font-medium">
            Book now for weddings, editorials, campaigns and elevated beauty events
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
