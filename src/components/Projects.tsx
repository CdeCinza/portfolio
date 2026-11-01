import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { featuredProject, otherProjects, projectsIntro, type Image, type Project } from '../content'
import { reveal } from '../reveal'
import { Container, Section, SectionTitle, TextLink } from './Layout'

export function Projects() {
  return (
    <Section id="projetos" tone="light" labelledBy="titulo-projetos">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <SectionTitle id="titulo-projetos">Projetos</SectionTitle>
          <p {...reveal(1)} className="max-w-[440px] text-[17px] leading-relaxed text-pretty text-slate-soft">
            {projectsIntro}
          </p>
        </div>

        <FeaturedProject project={featuredProject} />

        <div className="mt-6">
          {otherProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} defaultOpen={index === 0} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const cover = project.images?.[0]
  return (
    <article
      {...reveal(0)}
      aria-labelledby={`projeto-${project.id}`}
      className="flex flex-wrap items-center gap-10 rounded-[20px] bg-ink p-6 text-snow sm:p-10"
    >
      <div className="min-w-0 flex-[2_1_320px]">
        {project.status && <p className="text-[15px] text-sky">{project.status}</p>}
        <h3 id={`projeto-${project.id}`} className="mt-2.5 text-5xl leading-none font-bold sm:text-[56px]">
          {project.name}
        </h3>
        <p className="mt-4.5 text-[17px] leading-relaxed text-pretty text-mist">{project.summary}</p>
        <ul className="mt-4.5 list-disc pl-5 text-[15px] leading-7 text-mist">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.challenge && (
          <p className="mt-4.5 text-[15px] leading-relaxed text-pretty text-mist">{project.challenge}</p>
        )}
        <p className="mt-5 text-[15px] text-fog">{project.stackSummary}</p>
        {project.repo && (
          <p className="mt-5">
            <TextLink href={project.repo.href} external>
              {project.repo.label}
            </TextLink>
          </p>
        )}
      </div>
      {cover && (
        <Screenshot image={cover} border="border-edge" className="flex-[3_1_480px]" />
      )}
    </article>
  )
}

function ProjectRow({ project, defaultOpen }: { project: Project; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const detailsId = `detalhes-${project.id}`
  const Icon = open ? Minus : Plus
  const images = project.images ?? []

  return (
    <article {...reveal(0)} aria-labelledby={`projeto-${project.id}`} className="relative py-8">
      <span {...reveal(0, 'line')} aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-slate-soft/45" />
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        <h3
          id={`projeto-${project.id}`}
          className="flex-[1_1_220px] text-4xl leading-[1.05] font-bold sm:text-[44px]"
        >
          {project.name}
        </h3>
        <p className="min-w-0 flex-[2_1_320px] leading-relaxed text-pretty text-slate">{project.summary}</p>
        <p className="flex-[1_1_180px] text-sm text-slate-soft">{project.stackSummary}</p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={detailsId}
          aria-label={`${open ? 'Ocultar' : 'Mostrar'} detalhes do ${project.name}`}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-[10px] bg-ink text-snow transition-colors duration-150 hover:bg-panel"
        >
          <Icon size={20} aria-hidden="true" />
        </button>
      </div>

      <div id={detailsId} hidden={!open} className="mt-7">
        <div className="flex flex-wrap gap-8">
          {images.length > 0 && (
            <figure className="m-0 min-w-0 flex-[3_1_480px]">
              {project.imageFormat === 'phone' ? <PhoneGallery images={images} /> : <DesktopGallery images={images} />}
              {project.imagesCaption && (
                <figcaption className="mt-3 text-sm text-slate-soft">{project.imagesCaption}</figcaption>
              )}
            </figure>
          )}
          <div className={`min-w-0 ${images.length > 0 ? 'flex-[2_1_300px]' : 'flex-1 sm:columns-2 sm:gap-12'}`}>
            <ul className="list-disc pl-5 leading-8 text-slate">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="break-inside-avoid">
              {project.challenge && (
                <p className="mt-5 text-[15px] leading-relaxed text-pretty text-slate">{project.challenge}</p>
              )}
              {project.note && (
                <p className="mt-5 text-[15px] leading-relaxed text-pretty text-slate">{project.note}</p>
              )}
              <p className="mt-4 text-sm text-slate-soft">{project.stack.join(', ')}</p>
              {project.repo && (
                <p className="mt-4">
                  <TextLink href={project.repo.href} tone="light" external>
                    {project.repo.label}
                  </TextLink>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function DesktopGallery({ images }: { images: Image[] }) {
  const [cover, ...extras] = images
  return (
    <>
      <Screenshot image={cover} border="border-rule" />
      {extras.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-3">
          {extras.map((image) => (
            <Screenshot key={image.src} image={image} border="border-rule" />
          ))}
        </div>
      )}
    </>
  )
}

function PhoneGallery({ images }: { images: Image[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {images.map((image) => (
        <Screenshot key={image.src} image={image} border="border-rule" format="phone" />
      ))}
    </div>
  )
}

type ScreenshotProps = { image: Image; border: string; className?: string; format?: 'desktop' | 'phone' }

// Abre a imagem em tamanho real numa nova aba, para quem quiser ver os detalhes da tela.
function Screenshot({ image, border, className = '', format = 'desktop' }: ScreenshotProps) {
  const size = format === 'phone' ? { width: 780, height: 1688, ratio: 'aspect-[390/844] rounded-2xl' } : { width: 1440, height: 900, ratio: 'aspect-[16/10] rounded-xl' }
  return (
    <a href={image.src} target="_blank" rel="noopener" className={`block min-w-0 ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={size.width}
        height={size.height}
        loading="lazy"
        decoding="async"
        className={`block w-full border object-cover object-top ${size.ratio} ${border}`}
      />
    </a>
  )
}
