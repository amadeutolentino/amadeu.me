"use client";

import { useEffect, useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { useActiveSection } from "@/hooks/use-active-section";
import { navLinks } from "@/lib/content";

const SECTION_IDS = ["focus", "work", "about", "contact"];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6L18 18M18 6L6 18" />
      ) : (
        <>
          <path d="M4 8H20" />
          <path d="M4 16H20" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.3em] text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze md:tracking-[0.35em] md:text-base"
        >
          Amadeu
        </a>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.25em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze ${
                isActive(link.href)
                  ? "text-bronze"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton>Book a Call</CtaButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col px-5 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`border-b border-white/10 py-4 text-sm font-medium tracking-[0.2em] uppercase transition-colors last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze ${
                isActive(link.href) ? "text-bronze" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-5">
            <CtaButton className="w-full justify-center" onClick={closeMenu}>
              Book a Call
            </CtaButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
