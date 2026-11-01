import { useEffect } from 'react'

// Efeitos presos à rolagem: a barra de progresso da página e o hero saindo da tela.
// Elementos com `data-scroll="leave"` recebem `--p`, de 0 (topo no alto da tela) a 1 (saiu por cima);
// o CSS em index.css transforma isso em movimento. Com movimento reduzido nada disso roda.

const clamp = (value: number) => Math.min(1, Math.max(0, value))

export function useScrollScenes() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll="leave"]'))
    let frame = 0

    const update = () => {
      frame = 0
      const scrollable = root.scrollHeight - window.innerHeight
      root.style.setProperty('--page-progress', scrollable > 0 ? (window.scrollY / scrollable).toFixed(4) : '0')
      for (const element of elements) {
        const rect = element.getBoundingClientRect()
        // Fora da tela não há o que animar.
        if (rect.bottom < -50) continue
        element.style.setProperty('--p', clamp(-rect.top / rect.height).toFixed(4))
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    root.classList.add('scroll-fx')
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      root.classList.remove('scroll-fx')
    }
  }, [])
}
