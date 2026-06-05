import { SparkIcon } from "@/components/icons";
import { engagements, exampleFocusIntro } from "@/lib/content";

export function Engagements() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="label-section mb-5 md:mb-6">Example Focus Areas</p>

        <p className="text-body mb-10 max-w-2xl md:mb-12">
          {exampleFocusIntro}
        </p>

        <h2 id="work-heading" className="sr-only">
          Example Focus Areas
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div className="order-1 lg:order-2 flex lg:justify-end">
            <div className="flex w-full flex-col gap-5 sm:gap-6 lg:max-w-md lg:flex-row lg:gap-10">
              <p
                className="label-section"
                aria-hidden="true"
              >
                The Goal
              </p>
              <p className="text-display-statement">
                <span className="block">Better systems.</span>
                <span className="block">Smarter teams.</span>
                <span className="block text-bronze">Stronger businesses.</span>
              </p>
            </div>
          </div>

          <ul className="order-2 lg:order-1 divide-y divide-white/10">
            {engagements.map((item) => (
              <li key={item.title}>
                <div className="flex items-start gap-4 py-6 md:gap-5 md:py-7">
                  <SparkIcon className="mt-1 h-5 w-5 shrink-0 text-bronze" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-card-title mb-2">{item.title}</h3>
                    <p className="text-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
