import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Solutions />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
