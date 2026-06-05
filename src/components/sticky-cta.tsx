"use client";

import { useEffect, useState } from "react";

import { ArrowUpRight } from "@/components/icons";
import { BOOKING_URL, discoveryCallNoteShort } from "@/lib/content";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      const contactEl = document.getElementById("contact");
      const contactTop = contactEl?.offsetTop ?? Infinity;
      const pastHero = window.scrollY > heroHeight;
      const beforeContact = window.scrollY + window.innerHeight * 0.85 < contactTop;

      setVisible(pastHero && beforeContact);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3.5">
        <p className="text-[10px] font-medium leading-snug tracking-[0.12em] text-white/50 uppercase">
          {discoveryCallNoteShort}
        </p>
        <a
          href={BOOKING_URL}
          className="group inline-flex items-center gap-2 border border-bronze px-5 py-2.5 text-[10px] tracking-[0.2em] text-bronze uppercase transition-colors hover:bg-bronze hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
        >
          Book a Call
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
