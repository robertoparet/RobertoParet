import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main aria-label="Contenido principal">
        <Hero />
        <Solutions />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
