import { Download } from 'lucide-react'
import { profile } from '../content'
import { reveal } from '../reveal'
import { Container, SectionTitle } from './Layout'

const outlined =
  'rounded-lg border border-white px-5 py-3 text-white transition-colors duration-150 hover:bg-white/10'

export function Contact() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="on-accent bg-cobalt text-white">
      <Container className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8 py-20 sm:py-22">
        <div className="min-w-0 flex-[2_1_480px]">
          <SectionTitle id="titulo-contato">Contato</SectionTitle>
          <p {...reveal(1)} className="mt-4 text-xl wrap-anywhere sm:text-[28px]">
            <a
              href={`mailto:${profile.email}`}
              className="text-white underline underline-offset-[6px]"
            >
              {profile.email}
            </a>
          </p>
        </div>

        <div {...reveal(2)} className="flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={outlined}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={outlined}>
            LinkedIn
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-white px-5 py-3 font-bold text-cobalt transition-colors duration-150 hover:bg-paper"
          >
            Ver currículo
          </a>
          <a href={profile.resume} download={profile.resumeDownloadName} className={`${outlined} inline-flex items-center gap-2`}>
            <Download size={18} aria-hidden="true" />
            Baixar PDF
          </a>
        </div>
      </Container>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink">
      <Container className="py-7 text-sm text-fog">
        {profile.name}
      </Container>
    </footer>
  )
}
