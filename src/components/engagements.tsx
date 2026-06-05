import { SparkIcon } from "@/components/icons";
import { engagements } from "@/lib/content";

export function Engagements() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="label-section mb-10 md:mb-16">Recent Engagements</p>

        <h2 id="work-heading" className="sr-only">
          Recent Engagements
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <ul className="divide-y divide-white/10">
            {engagements.map((item) => (
              <li key={item.title}>
                <div className="flex items-start gap-4 py-6 md:gap-5 md:py-7">
                  <SparkIcon className="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-card-title mb-1.5">{item.title}</h3>
                    <p className="text-body text-sm">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-start lg:items-center lg:justify-end">
            <div className="flex w-full flex-col gap-5 sm:gap-6 lg:flex-row lg:gap-10">
              <p
                className="label-section lg:hidden"
                aria-hidden="true"
              >
                The Goal
              </p>
              <p
                className="label-section hidden shrink-0 [writing-mode:vertical-lr] lg:block"
                aria-hidden="true"
              >
                The Goal
              </p>
              <p className="text-display-statement max-w-md">
                <span className="block">Better systems.</span>
                <span className="block">Smarter teams.</span>
                <span className="block text-bronze">Stronger businesses.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
