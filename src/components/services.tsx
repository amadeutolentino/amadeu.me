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

        <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-4 lg:items-start lg:divide-x lg:divide-y-0">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.title}
                className={`flex flex-col gap-4 py-8 lg:py-0 ${
                  index === 0
                    ? "lg:pr-8"
                    : index === services.length - 1
                      ? "lg:pl-8"
                      : "lg:px-8"
                }`}
              >
                <Icon className="h-8 w-8 shrink-0 text-bronze" />

                <h3 className="text-card-title min-h-[2.75rem] leading-snug lg:min-h-[3rem]">
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
