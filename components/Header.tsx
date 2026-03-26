"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { pressKitNavigation } from "@/data/navigation";
import type { MakeupArtist } from "@/types/makeupArtist";

type HeaderProps = {
  artist: MakeupArtist;
};

export function Header({ artist }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const isMobile = window.innerWidth < 1024;

      if (Math.abs(delta) < 8) return;

      if (isMobile) {
        setMenuOpen(false);
      }

      const shouldShowHeader = isMobile ? true : currentScrollY < 20 || delta < 0;
      const shouldBeCompact = currentScrollY >= 20;

      setIsHeaderVisible(shouldShowHeader);
      setIsHeaderCompact(shouldBeCompact);

      if (!shouldShowHeader) {
        setMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerAccent = {
    backgroundColor: artist.design.primaryColor
  };

  const mobileMenu = menuOpen && (
    <div className="absolute left-0 right-0 top-full z-[100] border-t border-black/5 bg-[rgba(252,250,248,0.98)] backdrop-blur-xl lg:hidden">
      <nav className="flex flex-col items-end gap-2.5 px-5 py-4 text-right">
        {pressKitNavigation.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:text-ink/70"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[rgba(252,250,248,0.92)] backdrop-blur-xl transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 md:px-10 ${
          isHeaderCompact ? "h-[60px] md:h-[68px]" : "h-[72px] md:h-[84px]"
        }`}
      >
        <div className="flex min-w-0 items-center gap-3 md:gap-5">
          <Link href="#home" className="min-w-0">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/38">
                Press kit
              </div>
              <div
                className={`truncate font-serif text-ink transition-all duration-300 ${
                  isHeaderCompact ? "text-2xl md:text-[1.9rem]" : "text-3xl md:text-[2.25rem]"
                }`}
              >
                {artist.name}
              </div>
            </div>
          </Link>
        </div>

        <div className="flex min-w-0 items-center gap-3 md:gap-4 xl:gap-5">
          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-4 overflow-x-auto whitespace-nowrap pr-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/72 lg:flex xl:gap-5 xl:text-[11px] xl:tracking-[0.24em]">
            {pressKitNavigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={pressKitNavigation.cta.href}
            className={`hidden shrink-0 rounded-full font-semibold uppercase text-white transition-all duration-300 hover:opacity-90 lg:inline-flex ${
              isHeaderCompact
                ? "px-4 py-2 text-[10px] tracking-[0.16em]"
                : "px-5 py-2.5 text-[10px] tracking-[0.2em]"
            }`}
            style={headerAccent}
          >
            {pressKitNavigation.cta.label}
          </a>

          <a
            href={pressKitNavigation.cta.href}
            className={`inline-flex rounded-full font-semibold uppercase text-white transition-all duration-300 hover:opacity-90 lg:hidden ${
              isHeaderCompact
                ? "px-3.5 py-2 text-[10px] tracking-[0.16em]"
                : "px-4 py-2.5 text-[10px] tracking-[0.18em]"
            }`}
            style={headerAccent}
          >
            {pressKitNavigation.cta.label}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/70 text-ink transition hover:bg-white lg:hidden"
            aria-label={
              menuOpen
                ? pressKitNavigation.closeMenuLabel
                : pressKitNavigation.openMenuLabel
            }
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M4 8h16M4 12h16M4 16h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
