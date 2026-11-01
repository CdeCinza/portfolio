import { education, experience } from '../content'
import { reveal } from '../reveal'
import { Container, Section, SectionTitle } from './Layout'

export function Experience() {
  return (
    <Section id="experiencia" tone="dark" labelledBy="titulo-experiencia">
      <Container>
        <SectionTitle id="titulo-experiencia" className="mb-12">
          Experiência
        </SectionTitle>

        <div className="flex flex-wrap gap-6">
          <article
            {...reveal(1)}
            className="min-w-0 flex-[3_1_520px] rounded-[20px] border border-edge bg-panel p-6 sm:p-10"
          >
            <p className="text-[15px] text-fog">{experience.company}</p>
            <h3 className="mt-2.5 text-3xl leading-[1.05] font-bold sm:text-[40px]">{experience.current.title}</h3>
            <p className="mt-2 text-lg text-mist">{experience.current.period}</p>
            <ul className="mt-7 list-disc pl-5 leading-8 text-mist">
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {experience.previous.map((role) => (
              <div key={role.title} className="mt-8 border-t border-edge pt-6">
                <p className="text-lg font-bold">{role.title}</p>
                <p className="mt-1 text-[15px] text-fog">{role.period}</p>
              </div>
            ))}
          </article>

          <article {...reveal(2)} className="min-w-0 flex-[2_1_320px] rounded-[20px] border border-edge p-6 sm:p-10">
            <p className="text-[15px] text-fog">{education.period}</p>
            <h3 className="mt-2.5 text-[28px] leading-tight font-bold text-balance">{education.course}</h3>
            <p className="mt-2 text-lg text-mist">{education.school}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-pretty text-fog">{education.note}</p>
          </article>
        </div>
      </Container>
    </Section>
  )
}
