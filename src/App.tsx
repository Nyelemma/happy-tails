import { About } from './components/About'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Seo } from './components/Seo'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Trust } from './components/Trust'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { WhyChoose } from './components/WhyChoose'

function App() {
  return (
    <>
      <Seo />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Trust />
        <About />
        <Services />
        <WhyChoose />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
