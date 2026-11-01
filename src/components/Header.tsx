import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, profile } from '../content'
import { Container } from './Layout'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-edge-soft bg-ink">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a href="#topo" className="text-[17px] font-bold text-snow">
          {profile.shortName}
        </a>

        <nav aria-label="Seções" className="hidden items-center gap-3 text-[15px] md:flex lg:gap-5">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 py-2.5 text-fog transition-colors duration-150 hover:text-snow"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="rounded-lg border border-edge-strong px-4 py-2.5 text-snow transition-colors duration-150 hover:border-fog"
          >
            Currículo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="flex size-11 items-center justify-center rounded-lg border border-edge-strong text-snow md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </Container>
      <span aria-hidden="true" className="fx-progress absolute inset-x-0 -bottom-px h-0.5 bg-sky" />

      <nav
        id="menu-movel"
        aria-label="Seções"
        hidden={!open}
        className="border-t border-edge-soft bg-ink md:hidden"
      >
        <Container className="flex flex-col py-2 text-lg">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={close} className="border-b border-edge-soft py-4 text-snow">
              {item.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener" onClick={close} className="py-4 text-sky">
            Currículo em PDF
          </a>
        </Container>
      </nav>
    </header>
  )
}
