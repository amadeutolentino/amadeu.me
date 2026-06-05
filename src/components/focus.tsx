import { focusSteps, whoThisIsFor } from "@/lib/content";

export function Focus() {
  return (
    <section
      id="focus"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="focus-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="label-section mb-5 md:mb-6">How Focus Works</p>
        <p className="text-body mb-10 max-w-2xl md:mb-16">
          A Focus is a monthly partnership on one high-impact area — where AI
          and automation improve how your business operates. One priority at a
          time. No overwhelm.
        </p>

        <h2 id="focus-heading" className="sr-only">
          How Focus Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {focusSteps.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === focusSteps.length - 1;

            return (
              <article
                key={item.step}
                className={[
                  "grid grid-rows-[2rem_2.75rem_auto] gap-y-4 border-white/10 py-8",
                  "border-t lg:border-t-0",
                  !isFirst && "lg:border-l",
                  isFirst && "border-t-0 pt-0",
                  isLast && "pb-0",
                  isFirst ? "lg:pr-8" : "lg:px-8",
                  isLast && "lg:pr-0",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex h-8 items-center">
                  <span className="text-sm font-medium tracking-[0.2em] text-bronze">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-card-title flex items-start leading-snug">
                  {item.title}
                </h3>

                <p className="text-body text-sm md:text-[0.9375rem]">
                  {item.description}
                </p>
              </article>
            );
          })}
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
