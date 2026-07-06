import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative isolate overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-400/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-violet-soft/18 blur-3xl dark:bg-violet-soft/12"
      />

      <Header theme={theme} onToggle={toggleTheme} />

      <main className="pb-10">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>

      <Footer theme={theme} />
    </div>
  )
}

export default App
