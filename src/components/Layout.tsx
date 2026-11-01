import type { ReactNode } from 'react'
import { reveal } from '../reveal'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-10 ${className}`}>{children}</div>
}

type SectionProps = {
  id?: string
  tone: 'dark' | 'light'
  labelledBy?: string
  children: ReactNode
}

export function Section({ id, tone, labelledBy, children }: SectionProps) {
  const toneClass = tone === 'light' ? 'on-light bg-paper text-ink' : 'bg-ink text-snow'
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneClass} py-20 sm:py-26`}>
      {children}
    </section>
  )
}

// O título sobe de dentro de uma máscara quando a seção entra na tela (ver index.css).
export function SectionTitle({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <h2
      id={id}
      {...reveal(0, 'title')}
      className={`text-4xl leading-[1.05] font-bold text-balance sm:text-[56px] ${className}`}
    >
      <span className="block overflow-clip pb-[0.1em]">
        <span className="fx-title-line block">{children}</span>
      </span>
    </h2>
  )
}

type TextLinkProps = {
  href: string
  children: ReactNode
  tone?: 'dark' | 'light'
  external?: boolean
}

export function TextLink({ href, children, tone = 'dark', external }: TextLinkProps) {
  const color =
    tone === 'light' ? 'text-cobalt hover:text-cobalt-deep' : 'text-sky hover:text-sky-soft'
  return (
    <a
      href={href}
      className={`${color} underline underline-offset-4 transition-colors duration-150`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
