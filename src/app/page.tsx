import { About } from "@/components/about";
import { Engagements } from "@/components/engagements";
import { FinalCta } from "@/components/final-cta";
import { Focus } from "@/components/focus";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionReveal } from "@/components/section-reveal";
import { Services } from "@/components/services";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionReveal>
          <Focus />
        </SectionReveal>
        <SectionReveal>
          <Services />
        </SectionReveal>
        <SectionReveal>
          <Engagements />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <FinalCta />
        </SectionReveal>
      </main>
      <StickyCta />
    </>
  );
}
