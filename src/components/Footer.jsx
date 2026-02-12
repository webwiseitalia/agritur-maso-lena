import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Instagram } from 'lucide-react'
import logo from '../assets/logo.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 50, opacity: 0,
        duration: 1, stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        }
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} style={{ background: 'var(--wood-900)' }} className="text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <p className="font-serif text-[12vw] leading-none text-white/[0.03] whitespace-nowrap translate-y-[30%]">
          Maso Lena · Val di Fiemme · Dolomiti
        </p>
      </div>

      <div className="relative z-10 px-5 md:px-10 lg:px-16 pt-24 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <div className="footer-col">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 mb-4">Vieni a trovarci</p>
            <h2 className="font-serif fluid-h2 text-white max-w-lg leading-tight">
              Un mondo autentico<br />ti aspetta
            </h2>
          </div>
          <div className="footer-col flex flex-col items-start md:items-end gap-4 md:pt-8">
            <Link to="/contatti" className="btn-creative">
              <span>Prenota il soggiorno</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-6 mb-16">
          <div className="footer-col col-span-2 md:col-span-3">
            <img src={logo} alt="Maso Lena" className="h-16 w-auto mb-4 rounded-full bg-white/10 p-1" />
            <p className="text-white/70 text-sm leading-relaxed max-w-[220px]">
              Località Löze, Via Salita<br />alla Cascata 3<br />
              38037 Predazzo (TN)
            </p>
          </div>

          <div className="footer-col col-span-1 md:col-span-2">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 mb-5">Esplora</p>
            <ul className="space-y-2.5">
              {[
                { name: 'Il Maso', path: '/il-maso' },
                { name: 'Camere', path: '/le-camere' },
                { name: 'Ristorante', path: '/ristorante' },
                { name: 'Galleria', path: '/galleria' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 text-sm hover:text-white transition-colors duration-300">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col col-span-1 md:col-span-2">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 mb-5">Info</p>
            <ul className="space-y-2.5">
              {[
                { name: 'Prezzi', path: '/prezzi' },
                { name: 'Malga Bocche', path: '/malga-bocche' },
                { name: 'Come arrivare', path: '/come-arrivare' },
                { name: 'Contatti', path: '/contatti' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 text-sm hover:text-white transition-colors duration-300">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col col-span-2 md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 mb-5">Contatti</p>
            <div className="space-y-2 text-sm text-white/70">
              <a href="tel:+393407128301" className="block hover:text-white transition-colors">+39 340 712 8301 — Katia</a>
              <a href="mailto:info@masolena.it" className="block hover:text-white transition-colors">info@masolena.it</a>
              <p className="pt-3 text-white/50 text-xs">Malga Bocche: +39 335 594 6308</p>
              <p className="text-white/50 text-xs">Aperta 20 giu — 20 set</p>
            </div>
            <div className="mt-5">
              <a href="https://www.instagram.com/maso_lena/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-widest">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

          <div className="footer-col col-span-2 md:col-span-2">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 mb-5">Legale</p>
            <div className="space-y-2 text-xs text-white/50">
              <p>P.IVA 00812150225</p>
              <p>CIN: IT022147B5RUTK7NS2</p>
              <Link to="/privacy" className="block hover:text-white transition-colors mt-3">Privacy</Link>
              <Link to="/cookie" className="block hover:text-white transition-colors">Cookie</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.6rem] text-white/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Maso Lena di Dellagiacoma Fabio e Figli — Società Semplice Agricola
          </p>
          <p className="text-[0.6rem] text-white/35 uppercase tracking-[0.2em]">
            Predazzo · Val di Fiemme · Dolomiti
          </p>
        </div>
      </div>
    </footer>
  )
}
