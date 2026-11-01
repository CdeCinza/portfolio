import { about, skills, tools } from '../content'
import { reveal } from '../reveal'
import { Container, Section, SectionTitle } from './Layout'

export function About() {
  return (
    <Section id="sobre" tone="light" labelledBy="titulo-sobre">
      <Container className="flex flex-wrap gap-x-20 gap-y-10">
        <SectionTitle id="titulo-sobre" className="flex-[1_1_300px]">
          Sobre
        </SectionTitle>

        <div className="min-w-0 flex-[2_1_480px]">
          <div {...reveal(1)} className="space-y-5 text-lg leading-relaxed text-pretty text-graphite sm:text-[19px]">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div {...reveal(2)}>
            <h3 className="sr-only">Tecnologias</h3>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 leading-relaxed sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.group}>
                  <dt className="font-bold">{skill.group}</dt>
                  <dd className="mt-1 text-slate">{skill.items}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-[15px] leading-relaxed text-pretty text-slate-soft">{tools}</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
