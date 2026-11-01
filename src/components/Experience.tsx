import { education, experience } from '../content'
import { reveal } from '../reveal'
import { Container, Section, SectionTitle, TextLink } from './Layout'

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
                {role.items && (
                  <ul className="mt-4 list-disc pl-5 leading-8 text-mist">
                    {role.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          <article {...reveal(2)} className="min-w-0 flex-[2_1_320px] rounded-[20px] border border-edge p-6 sm:p-10">
            <p className="text-[15px] text-fog">{education.period}</p>
            <h3 className="mt-2.5 text-[28px] leading-tight font-bold text-balance">{education.course}</h3>
            <p className="mt-2 text-lg text-mist">{education.school}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-pretty text-fog">{education.detail}</p>

            <div className="mt-8 border-t border-edge pt-6">
              <p className="text-[15px] text-fog">{education.thesis.label}</p>
              <p className="mt-1 text-lg font-bold">{education.thesis.name}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-pretty text-mist">{education.thesis.summary}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
                {education.thesis.facts.map((fact) => (
                  <div key={fact.label} className="min-w-0">
                    <dt className="text-fog">{fact.label}</dt>
                    <dd className="mt-0.5 font-bold text-snow">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[15px]">
                <TextLink href={education.thesis.link.href}>{education.thesis.link.label}</TextLink>
              </p>
            </div>
          </article>
        </div>

        <div className="mt-16">
          <div {...reveal(0)}>
            <h3 className="text-2xl font-bold sm:text-[28px]">{experience.sites.title}</h3>
            <p className="mt-2 max-w-[640px] leading-relaxed text-pretty text-fog">{experience.sites.intro}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {experience.sites.items.map((site, index) => (
              <article
                key={site.id}
                {...reveal(index + 1)}
                aria-labelledby={`site-${site.id}`}
                className="min-w-0 overflow-hidden rounded-[20px] border border-edge bg-panel"
              >
                <a href={site.link.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                  <img
                    src={site.image.src}
                    alt=""
                    width={1440}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="block aspect-[16/10] w-full border-b border-edge object-cover object-top"
                  />
                </a>
                <div className="p-6 sm:p-8">
                  <h4 id={`site-${site.id}`} className="text-xl font-bold">
                    {site.name}
                  </h4>
                  <p className="mt-1 text-[15px]">
                    <TextLink href={site.link.href} external>
                      {site.link.label}
                    </TextLink>
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-pretty text-mist">{site.summary}</p>
                  <p className="mt-4 text-sm text-fog">{site.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
