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
        <p className="label-section mb-10 md:mb-16">How I Help</p>

        <h2 id="services-heading" className="sr-only">
          How I Help
        </h2>

        <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className={`flex flex-col py-8 lg:px-6 ${index === 0 ? "pt-0 lg:pt-0" : ""} ${index === services.length - 1 ? "pb-0 lg:pb-0" : ""} first:lg:pl-0 last:lg:pr-0`}
              >
                <Icon className="mb-5 h-7 w-7 shrink-0 text-bronze md:mb-6 md:h-8 md:w-8" />
                <h3 className="text-card-title mb-3 min-h-[2.75rem] md:mb-4 lg:min-h-[2.25rem] lg:whitespace-nowrap">
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
