import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type ContactProps = {
  artist: MakeupArtist;
};

const contactIcons = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 7.5l8 6 8-6M5.5 6h13A1.5 1.5 0 0120 7.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 16.5v-9A1.5 1.5 0 015.5 6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 20a7.8 7.8 0 01-3.8-1L4 20l1.1-4A8 8 0 1112 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 9.1c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.3l.7 1.6c.1.2 0 .4-.1.5l-.5.6c.6 1.1 1.5 1.9 2.6 2.5l.6-.4c.2-.1.4-.2.6-.1l1.5.7c.2.1.3.3.3.5v.5c0 .2 0 .5-.3.6-.4.2-.9.4-1.5.3-2.4-.4-5.3-3.2-5.7-5.6-.1-.6 0-1.1.2-1.5z"
        fill="currentColor"
      />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M14 4c.4 1.7 1.5 3 3.1 3.8.7.4 1.5.6 2.4.6v2.7c-1.4 0-2.8-.4-4-1.1v5.6a4.6 4.6 0 11-4.6-4.6c.3 0 .7 0 1 .1v2.8a2 2 0 10.9 1.7V4h1.2z"
        fill="currentColor"
      />
    </svg>
  )
} as const;

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
          label: "WhatsApp",
          value: artist.social.phone,
          href: `https://wa.me/${artist.social.phone.replace(/\D+/g, "")}`
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
    <section id="contact" className="scroll-mt-24 px-6 pb-7 pt-5 md:px-10 md:pb-9 md:pt-7">
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
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink/78">
                    {contactIcons[contact.label as keyof typeof contactIcons]}
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/45">
                    {contact.label}
                  </p>
                </div>
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
