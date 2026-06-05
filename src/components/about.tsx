import Image from "next/image";

import { siteConfig, stats } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-12 lg:p-16">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-16">
            <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full border border-white/10 md:h-32 md:w-32 lg:mx-0">
              <Image
                src="/images/amadeu-headshot.png"
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 112px, 128px"
                aria-hidden="true"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="label-section mb-5 md:mb-6">About Amadeu</p>
              <h2 id="about-heading" className="sr-only">
                About Amadeu
              </h2>
              <div className="text-body mx-auto max-w-xl space-y-4 lg:mx-0">
                <p>
                  I&apos;m a product leader, designer, and AI practitioner with
                  a track record of helping organizations modernize operations
                  and adopt technology that drives real results.
                </p>
                <p>
                  My work sits at the intersection of business operations,
                  technology, workflow design, and implementation.
                </p>
                <p>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm tracking-[0.12em] text-bronze uppercase transition-colors hover:text-bronze-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
                  >
                    Connect on LinkedIn
                    <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center lg:text-left ${index > 0 ? "border-l border-white/10 pl-4 sm:pl-6" : ""}`}
                >
                  <p className="text-stat-value mb-1.5 md:mb-2">
                    {stat.value}
                  </p>
                  <p className="text-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
