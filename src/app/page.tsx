import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Education } from "@/components/sections/education";
import { Evidence } from "@/components/sections/evidence";
import { Research } from "@/components/sections/research";
import { Technology } from "@/components/sections/technology";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Principles } from "@/components/sections/principles";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Principles />
        <Problem />
        <Solution />
        <HowItWorks />
        <Education />
        <Evidence />
        <Research />
        <Technology />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
