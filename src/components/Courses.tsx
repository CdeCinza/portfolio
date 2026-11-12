import { courses } from '../content'
import { reveal } from '../reveal'
import { Container, Section, SectionTitle, TextLink } from './Layout'

export function Courses() {
  return (
    <Section id="cursos" tone="dark" labelledBy="titulo-cursos">
      <Container>
        <SectionTitle id="titulo-cursos" className="mb-8">
          Cursos complementares
        </SectionTitle>

        <div className="grid gap-5 lg:grid-cols-2">
          {courses.map((course, index) => (
            <article
              key={course.title}
              {...reveal(index + 1)}
              className="grid min-w-0 grid-cols-[88px_minmax(0,1fr)] items-start gap-4 rounded-[20px] border border-edge bg-panel p-4 sm:grid-cols-[132px_minmax(0,1fr)] sm:gap-6 sm:p-6"
            >
              <img
                src={course.image}
                alt=""
                width={132}
                height={100}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-lg object-cover object-[center_35%]"
              />
              <div>
                <h3 className="text-lg leading-tight font-bold sm:text-xl">{course.title}</h3>
                <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-fog">
                  <TextLink href={course.provider.href} external>
                    {course.provider.label}
                  </TextLink>
                  <span>{course.duration}</span>
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">{course.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
