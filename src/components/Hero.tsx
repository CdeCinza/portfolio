import { profile } from '../content'
import { Container, TextLink } from './Layout'

export function Hero() {
  return (
    <section id="topo" aria-labelledby="titulo-principal" data-scroll="leave" data-fx="hero" className="bg-ink">
      <Container className="flex flex-wrap items-end gap-14 pt-20 pb-24 sm:pt-26 sm:pb-28">
        <div className="fx-hero-main min-w-0 flex-[3_1_560px]">
          <h1
            id="titulo-principal"
            className="text-[44px] leading-none font-bold text-balance sm:text-6xl lg:text-[76px]"
          >
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl leading-tight text-fog sm:text-[32px]">{profile.role}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-base">
            <a
              href="#projetos"
              className="rounded-lg bg-sky px-6 py-3.5 font-bold text-sky-ink transition-colors duration-150 hover:bg-sky-soft"
            >
              Ver projetos
            </a>
            <TextLink href={profile.resume} external>
              Currículo em PDF
            </TextLink>
            <TextLink href={profile.github} external>
              GitHub
            </TextLink>
            <TextLink href={profile.linkedin} external>
              LinkedIn
            </TextLink>
          </div>
        </div>

        <dl className="fx-hero-facts m-0 min-w-0 flex-[1_1_260px] text-[15px] leading-normal">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="border-t border-edge py-3.5 last:border-b">
              <dt className="text-fog">{fact.label}</dt>
              <dd className="mt-0.5">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
