import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Phone, Clock, Mountain, TreePine, Footprints } from 'lucide-react'
import panoramaImg from '../assets/foto/foto-7.webp'
import cavalloImg from '../assets/foto/foto-4.webp'
import famigliaImg from '../assets/foto/foto-2.webp'
import goulashImg from '../assets/foto/foto-12.webp'

gsap.registerPlugin(ScrollTrigger)

export default function MalgaBocche() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.malga-hero-line', { y: 110, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.25 })
      gsap.to('.malga-hero-img', { yPercent: 22, ease: 'none', scrollTrigger: { trigger: '.malga-hero', start: 'top top', end: 'bottom top', scrub: 1.5 } })

      gsap.from('.malga-altitude', { y: 80, opacity: 0, duration: 1.5, ease: 'power4.out', scrollTrigger: { trigger: '.malga-intro', start: 'top 75%' } })
      gsap.from('.malga-intro-text', { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.malga-intro', start: 'top 70%' } })

      gsap.from('.cuisine-img', { clipPath: 'inset(100% 0 0 0)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: '.cuisine-section', start: 'top 70%' } })
      gsap.from('.cuisine-text', { x: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.cuisine-section', start: 'top 65%' } })

      gsap.from('.farm-img', { clipPath: 'inset(0 0 100% 0)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: { trigger: '.farm-section', start: 'top 70%' } })
      gsap.from('.farm-text', { x: -60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.farm-section', start: 'top 65%' } })

      gsap.from('.reach-item', { y: 50, opacity: 0, duration: 0.9, stagger: { each: 0.15, from: 'start' }, ease: 'power2.out', scrollTrigger: { trigger: '.reach-section', start: 'top 70%' } })

      gsap.from('.exc-item', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '.excursions-section', start: 'top 75%' } })

      gsap.from('.connection-block', { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.connection-block', start: 'top 80%' } })

      gsap.utils.toArray('.malga-para-img').forEach((img) => {
        gsap.to(img, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 2 } })
      })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>
      {/* HERO */}
      <section className="malga-hero relative h-[80vh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={panoramaImg} alt="Malga Bocche panorama" className="malga-hero-img w-full h-[130%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="malga-hero-line text-[0.65rem] uppercase tracking-[0.3em] text-white/50 mb-6">Altitudine 1.946 m &middot; Parco Naturale Paneveggio</p>
          </div>
          <div className="overflow-hidden">
            <h1 className="malga-hero-line font-serif fluid-display text-white">Malga</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="malga-hero-line font-serif fluid-display text-white ml-[5vw] md:ml-[10vw]">Bocche</h1>
          </div>
          <div className="overflow-hidden mt-8">
            <div className="malga-hero-line flex flex-wrap gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 20 giugno &mdash; 20 settembre</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +39 335 594 6308</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — altitude number */}
      <section className="malga-intro px-5 md:px-10 lg:px-16 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-5 malga-altitude">
            <span className="font-serif text-[6rem] md:text-[10rem] lg:text-[13rem] leading-none text-transparent" style={{ WebkitTextStroke: '1.5px var(--wood-200)' }}>1946</span>
            <p className="text-wood-400 text-xs uppercase tracking-[0.25em] mt-2">metri s.l.m.</p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-[8vh] malga-intro-text">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">Un rifugio in quota</p>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-6">Tra le Pale di<br />San Martino</h2>
            <p className="fluid-body-lg text-wood-500 font-light leading-relaxed max-w-lg">
              La famiglia Dellagiacoma vi accoglie presso l'Agritur di Malga Bocche,
              situato in una delle pi&ugrave; spettacolari plaghe dolomitiche, con vista panoramica
              sul Parco Naturale di Paneveggio e le Pale di San Martino.
            </p>
            <p className="text-wood-400 text-sm mt-6">Gestito da Dellagiacoma Fabio</p>
          </div>
        </div>
      </section>

      {/* CUISINE — broken grid, image left, text right */}
      <section className="cuisine-section relative px-5 md:px-10 lg:px-16 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
          <div className="col-span-12 md:col-span-7" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="cuisine-img img-hover-zoom aspect-[4/3] md:aspect-[16/10]">
              <img src={goulashImg} alt="Cucina di Malga Bocche" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 cuisine-text md:mt-[-6vh]">
            <span className="creative-number block mb-4">01</span>
            <h3 className="font-serif fluid-h3 text-wood-800 mb-4">La cucina<br />della malga</h3>
            <p className="text-wood-500 leading-relaxed font-light mb-6">
              Piatti genuini della cucina trentina preparati con prodotti freschi
              di produzione propria e ingredienti del territorio.
            </p>
            <div className="space-y-3">
              {['Polenta con funghi', 'Polenta con tosela', 'Taglieri misti', 'Strudel di mele', 'Crostata fatta in casa'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--wood-400)' }} />
                  <span className="text-wood-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FARM — reversed broken grid */}
      <section className="farm-section relative px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
          <div className="col-span-12 md:col-span-5 farm-text order-2 md:order-1">
            <span className="creative-number block mb-4">02</span>
            <h3 className="font-serif fluid-h3 text-wood-800 mb-4">Fattoria<br />didattica</h3>
            <p className="text-wood-500 leading-relaxed font-light mb-6">
              Anche a Malga Bocche potrete vivere l'esperienza della fattoria didattica.
              Osservate le mansioni dei malgari e interagite con gli animali in un ambiente
              naturale unico.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Lama', 'Tacchini', 'Cavalli', 'Pony', 'Mucche', 'Asini'].map((animal) => (
                <span key={animal} className="px-3 py-1.5 text-xs uppercase tracking-wider" style={{ background: 'var(--forest-50)', color: 'var(--forest-700)' }}>
                  {animal}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="farm-img img-hover-zoom aspect-[4/3]">
              <img src={famigliaImg} alt="Fattoria didattica a Malga Bocche" className="malga-para-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REACH — asymmetric 3-column */}
      <section className="reach-section relative py-24 md:py-36 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="absolute top-0 left-0 w-[35vw] h-[35vw] rounded-full opacity-[0.04]" style={{ background: 'var(--wood-300)', filter: 'blur(80px)', transform: 'translate(-20%, -20%)' }} />
        <div className="px-5 md:px-10 lg:px-16">
          <div className="mb-16 md:mb-24">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">Come raggiungere la malga</p>
            <h2 className="font-serif fluid-h2 text-cream-100 max-w-xl">Tre modi per<br />arrivare in quota</h2>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {/* On foot */}
            <div className="reach-item col-span-12 md:col-span-4 border border-white/10 p-8">
              <Footprints className="w-6 h-6 text-cream-300/60 mb-6" />
              <h3 className="font-serif text-xl text-cream-100 mb-4">A piedi</h3>
              <ul className="space-y-3 text-cream-300/60 text-sm">
                <li>Diversi sentieri escursionistici</li>
                <li>Strada forestale da La Morea (anche con passeggino)</li>
                <li>Sentieri 632, 626, 623</li>
              </ul>
              <p className="text-cream-200/60 text-xs mt-6 uppercase tracking-wider">Tempo: ~1h &mdash; 1h30</p>
            </div>

            {/* By horse carriage */}
            <div className="reach-item col-span-12 md:col-span-4 md:mt-[6vh] border border-white/20 p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'var(--cream-300)' }} />
              <Mountain className="w-6 h-6 text-cream-300/60 mb-6" />
              <h3 className="font-serif text-xl text-cream-100 mb-4">In carrozza</h3>
              <ul className="space-y-3 text-cream-300/60 text-sm">
                <li>Da La Morea a Malga Bocche</li>
                <li>Durata: circa 30 minuti</li>
              </ul>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-cream-200/60">Adulti</span>
                  <span className="text-cream-100 font-medium">&euro;14</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cream-200/60">Bambini (4-14)</span>
                  <span className="text-cream-100 font-medium">&euro;6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cream-200/60">Sotto 3 anni</span>
                  <span className="text-cream-100 font-medium">Gratuito</span>
                </div>
              </div>
            </div>

            {/* By cable car */}
            <div className="reach-item col-span-12 md:col-span-4 md:mt-[12vh] border border-white/10 p-8">
              <TreePine className="w-6 h-6 text-cream-300/60 mb-6" />
              <h3 className="font-serif text-xl text-cream-100 mb-4">Cabinovia</h3>
              <ul className="space-y-3 text-cream-300/60 text-sm">
                <li>Cabinovia Bellamonte 3.0</li>
                <li>Fino a La Morea (1.970 m)</li>
                <li>Poi sentiero pianeggiante ~5 km</li>
              </ul>
              <p className="text-cream-200/60 text-xs mt-6 uppercase tracking-wider">Comodo e panoramico</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARRIAGE IMAGE — full width with parallax */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="parallax-img-wrap absolute inset-0">
          <img src={cavalloImg} alt="Cavallo Norico" className="malga-para-img w-full h-[130%] object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* EXCURSIONS */}
      <section className="excursions-section px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="creative-number block mb-4">03</span>
            <h2 className="font-serif fluid-h2 text-wood-800">Escursioni<br />da scoprire</h2>
            <p className="text-wood-500 font-light leading-relaxed mt-6 max-w-xs">
              Malga Bocche &egrave; il punto di partenza ideale per esplorare
              il cuore delle Dolomiti.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 md:mt-[4vh]">
            <div className="space-y-0">
              {[
                { title: 'Pale di San Martino', desc: 'Sentieri panoramici verso una delle catene dolomitiche pi\u00F9 spettacolari, patrimonio UNESCO' },
                { title: 'Boschi di larici', desc: 'Passeggiate immerse nei boschi di larici e pini cembri del Parco di Paneveggio' },
                { title: 'Lago Bocche', desc: 'Escursione al suggestivo lago alpino circondato da montagne e silenzio' },
                { title: 'Tracce della Grande Guerra', desc: 'Testimonianze e fortini risalenti alla Prima Guerra Mondiale' },
              ].map((item, i) => (
                <div key={i} className="exc-item py-8 border-b" style={{ borderColor: 'var(--wood-200)' }}>
                  <div className="flex items-start gap-6">
                    <span className="text-wood-300 font-serif text-lg shrink-0 mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-xl text-wood-800 mb-2">{item.title}</h3>
                      <p className="text-wood-500 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTION TO MASO LENA */}
      <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
        <div className="connection-block max-w-3xl ml-auto mr-0 md:mr-[6vw] p-8 md:p-12 relative" style={{ background: 'var(--cream-200)' }}>
          <div className="absolute top-0 right-0 w-1 h-full" style={{ background: 'var(--wood-600)' }} />
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Per chi soggiorna al maso</p>
          <h3 className="font-serif fluid-h3 text-wood-800 mb-4">Pranzo in malga incluso</h3>
          <p className="fluid-body-lg text-wood-500 font-light max-w-xl mb-8">
            Per chi soggiorna a Maso Lena, il pranzo a Malga Bocche &egrave; incluso nel prezzo
            del soggiorno durante la stagione di apertura. Un'esperienza gastronomica
            a quasi 2.000 metri di altitudine.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/prezzi" className="btn-creative">
              <span>Vedi cosa &egrave; incluso</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/contatti" className="btn-outline">
              <span>Prenota il soggiorno</span><ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA CONTATTI MALGA */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">Contatta la malga</p>
              <h2 className="font-serif fluid-h2 text-cream-100 mb-2">Malga Bocche</h2>
              <p className="text-cream-300/60 font-light">Agritur di Dellagiacoma Fabio</p>
              <p className="text-cream-200/60 text-sm mt-2">Aperta dal 20 giugno al 20 settembre</p>
            </div>
            <a href="tel:+393355946308" className="btn-creative !bg-white !text-wood-900 hover:!text-wood-900">
              <Phone className="w-4 h-4" /><span>+39 335 594 6308</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
