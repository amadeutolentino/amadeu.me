import Image from "next/image";

import { aboutBio, siteConfig, stats } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-12 lg:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-12">
            <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full border border-white/10 sm:mx-0 md:h-36 md:w-36">
              <Image
                src="/images/amadeu-headshot.png"
                alt="Amadeu Tolentino"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 128px, 144px"
              />
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="label-section mb-5 md:mb-6">About Amadeu</p>
              <h2 id="about-heading" className="sr-only">
                About Amadeu
              </h2>
              <div className="text-body mx-auto max-w-xl space-y-4 sm:mx-0">
                {aboutBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="pt-1">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-bronze/90 transition-colors hover:text-bronze focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
                  >
                    Connect on LinkedIn ↗
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8 md:mt-12 md:pt-10">
            {stats.map((stat) => {
              const isWordStat = !/^\d+\+?$/.test(stat.value);

              return (
              <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0 sm:px-6">
                <p
                  className={`mb-1.5 md:mb-2 ${
                    isWordStat
                      ? "text-xl font-light tracking-tight text-white md:text-2xl"
                      : "text-stat-value"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-stat-label mx-auto max-w-[9rem]">
                  {stat.label}
                </p>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
