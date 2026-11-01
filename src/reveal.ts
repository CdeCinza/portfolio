import { useEffect, type CSSProperties } from 'react'

// Tipos de entrada (ver index.css):
//   fade   o bloco aparece subindo um pouco
//   title  o título sobe de dentro de uma máscara
//   line   a linha se desenha da esquerda para a direita
export type RevealKind = 'fade' | 'title' | 'line'

// Marca um elemento para aparecer ao entrar na tela. `order` escalona elementos vizinhos.
export function reveal(order = 0, kind: RevealKind = 'fade') {
  return {
    'data-reveal': kind,
    style: { '--reveal-order': order } as CSSProperties,
  }
}

// Observa os elementos marcados e toca a entrada inteira uma única vez, quando entram na tela.
// Sem JavaScript, ou com movimento reduzido, o CSS mantém tudo visível desde o início.
export function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.setAttribute('data-revealed', ''))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-revealed', '')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}
