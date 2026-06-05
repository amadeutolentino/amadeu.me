import {
  CodeIcon,
  NetworkIcon,
  PersonIcon,
  TargetIcon,
} from "@/components/icons";
import { services } from "@/lib/content";

const iconMap = {
  target: TargetIcon,
  network: NetworkIcon,
  person: PersonIcon,
  code: CodeIcon,
} as const;

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="label-section mb-10 md:mb-16">What a Focus Delivers</p>

        <h2 id="services-heading" className="sr-only">
          What a Focus Delivers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isFirst = index === 0;
            const isLast = index === services.length - 1;

            return (
              <article
                key={service.title}
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
                  <Icon className="h-8 w-8 shrink-0 text-bronze" />
                </div>

                <h3 className="text-card-title flex items-start leading-snug">
                  {service.title}
                </h3>

                <p className="text-body text-sm md:text-[0.9375rem]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
