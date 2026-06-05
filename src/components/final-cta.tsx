import { CtaButton } from "@/components/cta-button";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-16 pb-28 md:scroll-mt-24 md:py-32 md:pb-32"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_50%_100%,rgba(197,155,109,0.08),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q100 20 200 50 T400 50' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M0 70 Q100 40 200 70 T400 70' fill='none' stroke='rgba(255,255,255,0.02)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="label-section mb-5 md:mb-6">Next Step</p>
            <h2 id="cta-heading" className="text-display-light mb-5 md:mb-6">
              Let&apos;s build what&apos;s next.
            </h2>
            <p className="text-body max-w-lg">
              Book a discovery call and let&apos;s explore how AI can help your
              organization operate more efficiently and create capacity for
              growth.
            </p>
          </div>

          <div className="w-full shrink-0 lg:w-auto">
            <CtaButton
              size="large"
              className="w-full justify-center lg:w-auto lg:justify-start"
            >
              Book a Discovery Call
            </CtaButton>
            <p className="text-micro mt-3 text-center lg:text-left">
              30-minute call · No pitch · Practical next steps
            </p>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 md:mt-24">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[10px] tracking-[0.2em] text-white/35 uppercase md:tracking-[0.25em]">
              &copy; {new Date().getFullYear()} Amadeu Tolentino
            </p>
            <p className="text-[10px] tracking-[0.15em] text-white/35 uppercase md:tracking-[0.2em]">
              AI Consulting &amp; Operational Strategy
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
