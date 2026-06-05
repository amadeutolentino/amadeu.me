import { focusIntro, focusSteps, whoThisIsFor } from "@/lib/content";

export function Focus() {
  return (
    <section
      id="focus"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="focus-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="label-section mb-5 md:mb-6">Focus</p>

        <h2
          id="focus-heading"
          className="text-display-light mb-6 max-w-2xl md:mb-8"
        >
          {focusIntro.headline}
        </h2>

        <div className="text-body mb-12 max-w-2xl space-y-4 md:mb-16">
          {focusIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="label-section mb-10 md:mb-16">How It Works</p>

        <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-4 lg:items-start lg:divide-x lg:divide-y-0">
          {focusSteps.map((item, index) => (
            <article
              key={item.step}
              className={`flex flex-col gap-4 py-8 lg:py-0 ${
                index === 0
                  ? "lg:pr-8"
                  : index === focusSteps.length - 1
                    ? "lg:pl-8"
                    : "lg:px-8"
              }`}
            >
              <span className="text-sm font-medium text-bronze">
                {item.step}
              </span>

              <h3 className="text-card-title min-h-[2.75rem] leading-snug lg:min-h-[3rem]">
                {item.title}
              </h3>

              <p className="text-body text-sm md:text-[0.9375rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 md:mt-16 md:pt-12">
          <p className="label-section mb-6 md:mb-8">Who This Is For</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whoThisIsFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/60"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
