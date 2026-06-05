import Image from "next/image";

import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 pt-20 scroll-mt-20 md:min-h-screen md:pt-24 md:scroll-mt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(197,155,109,0.07),transparent_55%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute top-1/2 left-[-2%] -translate-y-1/2 select-none text-[40vw] leading-none font-bold tracking-tighter text-white/[0.04] md:left-[2%] md:text-[20vw]"
        aria-hidden="true"
      >
        AI
      </div>

      <div className="pointer-events-none absolute top-24 right-0 hidden h-[calc(100%-6rem)] w-[48%] md:block">
        <Image
          src="/images/amadeu-headshot.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="48vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 md:grid md:grid-cols-2 md:items-center md:gap-8 md:px-10 md:pb-32 md:pt-16">
        <div className="relative z-10 md:max-w-xl">
          <p className="label-section mb-5 md:mb-6">Amadeu Tolentino</p>

          <h1 className="headline-metallic mb-6 max-w-xl text-[1.75rem] leading-[1.05] font-black tracking-tight uppercase sm:text-4xl md:mb-8 md:text-5xl lg:text-[3.25rem]">
            <span className="block text-gradient-headline">
              AI is changing how
            </span>
            <span className="block text-gradient-headline">
              businesses operate.
            </span>
          </h1>

          <div className="text-body mb-8 max-w-lg space-y-4 md:mb-10">
            <p>
              Most companies know they should be using AI. They just don&apos;t
              know where to start.
            </p>
            <p>
              I partner with organizations to identify opportunities, implement
              practical solutions, and help teams successfully adopt AI across
              their operations.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <CtaButton size="large" className="w-full justify-center sm:w-auto sm:justify-start">
              Book a Discovery Call
            </CtaButton>
            <p className="text-micro text-center sm:text-left">
              30-minute call · No pitch · Practical next steps
            </p>

            <div className="mt-1 flex items-center justify-center gap-3 sm:justify-start md:mt-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                Available for new partnerships
              </span>
            </div>
          </div>
        </div>

        <div className="relative -mx-5 mt-10 md:hidden">
          <div className="relative aspect-[4/5] max-h-[min(70vh,520px)] w-full">
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] from-10% via-transparent to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30"
              aria-hidden="true"
            />
            <Image
              src="/images/amadeu-headshot.png"
              alt="Amadeu Tolentino — AI consultant and product leader"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
