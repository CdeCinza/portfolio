import { About } from './components/About'
import { Contact, Footer } from './components/Contact'
import { Courses } from './components/Courses'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { useScrollReveal } from './reveal'
import { useScrollScenes } from './scroll'

export default function App() {
  useScrollReveal()
  useScrollScenes()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-sky focus:px-4 focus:py-3 focus:font-bold focus:text-sky-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
