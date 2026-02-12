import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import IlMaso from './pages/IlMaso'
import LeCamere from './pages/LeCamere'
import Ristorante from './pages/Ristorante'
import Prezzi from './pages/Prezzi'
import MalgaBocche from './pages/MalgaBocche'
import ComeArrivare from './pages/ComeArrivare'
import Galleria from './pages/Galleria'
import Contatti from './pages/Contatti'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [pathname])
  return null
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/il-maso" element={<IlMaso />} />
          <Route path="/le-camere" element={<LeCamere />} />
          <Route path="/ristorante" element={<Ristorante />} />
          <Route path="/prezzi" element={<Prezzi />} />
          <Route path="/malga-bocche" element={<MalgaBocche />} />
          <Route path="/come-arrivare" element={<ComeArrivare />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
