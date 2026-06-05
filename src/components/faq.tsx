import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-b border-white/10 py-16 md:scroll-mt-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="label-section mb-10 md:mb-12">Common Questions</p>

        <h2 id="faq-heading" className="sr-only">
          Common Questions
        </h2>

        <dl className="max-w-2xl divide-y divide-white/10">
          {faqs.map((item) => (
            <div key={item.question} className="py-6 first:pt-0 last:pb-0">
              <dt className="text-card-title mb-2">{item.question}</dt>
              <dd className="text-body text-sm leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
