import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />

      <Section
        id="entenda"
        title="Entenda o racismo"
        description="Racismo é um sistema de opressão que hierarquiza pessoas e produz desigualdades. Combater exige informação e compromisso coletivo."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Estrutural" text="Presente nas instituições, políticas e práticas cotidianas que reproduzem desigualdades raciais." />
          <Card title="Interpersonal" text="Agressões verbais, físicas e microagressões que ferem a dignidade e a vida." />
          <Card title="Internalizado" text="Efeitos psicológicos do racismo que impactam autoestima e oportunidades." />
        </div>
      </Section>

      <Section id="agir" title="Como agir" description="Passos práticos para uma postura antirracista no dia a dia.">
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-200">
          <li>Escute pessoas negras e valorize suas vozes em decisões e espaços de poder.</li>
          <li>Intervenha com segurança diante de situações racistas. Procure apoio e registre.</li>
          <li>Revise linguagem, piadas e conteúdos que reforçam estereótipos. Não reproduza.</li>
          <li>Priorize fontes, autores e referências negras em estudos e compras.</li>
          <li>Denuncie: Disque 100 (Direitos Humanos) e procure Defensorias/Ministério Público.</li>
        </ul>
      </Section>

      <Section id="recursos" title="Recursos" description="Materiais para aprender e mobilizar sua comunidade.">
        <div className="grid md:grid-cols-3 gap-6">
          <Resource href="https://www.gov.br/mdh/pt-br/assuntos/disque-100" title="Disque 100" desc="Canal de Direitos Humanos para denúncias." />
          <Resource href="https://www.onu.org.br/" title="ONU Brasil" desc="Direitos humanos e igualdade racial." />
          <Resource href="https://safernet.org.br/" title="SaferNet" desc="Orientações e denúncias online." />
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{text}</p>
    </div>
  );
}

function Resource({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{desc}</p>
    </a>
  );
}
