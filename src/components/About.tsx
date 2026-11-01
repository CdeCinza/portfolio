import { about, skills, tools } from '../content'
import { reveal } from '../reveal'
import { Container, Section, SectionTitle } from './Layout'

export function About() {
  return (
    <Section id="sobre" tone="light" labelledBy="titulo-sobre">
      <Container>
        <SectionTitle id="titulo-sobre" className="mb-12">
          Sobre
        </SectionTitle>

        <div className="flex flex-wrap items-start gap-x-16 gap-y-10">
          <div
            {...reveal(1)}
            className="min-w-0 flex-[3_1_480px] space-y-6 text-lg leading-relaxed text-pretty text-graphite sm:text-[19px] lg:text-[21px]"
          >
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside
            {...reveal(2)}
            aria-labelledby="titulo-tecnologias"
            className="min-w-0 flex-[2_1_320px] rounded-[20px] border border-rule bg-white p-6 sm:p-8"
          >
            <h3 id="titulo-tecnologias" className="text-xl font-bold">
              Tecnologias
            </h3>
            <dl className="mt-5 space-y-4 leading-relaxed">
              {skills.map((skill) => (
                <div key={skill.group}>
                  <dt className="font-bold">{skill.group}</dt>
                  <dd className="mt-0.5 text-slate">{skill.items}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-rule pt-5 text-[15px] leading-relaxed text-pretty text-slate-soft">
              {tools}
            </p>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
