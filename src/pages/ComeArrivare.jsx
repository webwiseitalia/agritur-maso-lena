import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Car, Bus, MapPin, Navigation, ParkingCircle } from 'lucide-react'
import masoImg from '../assets/foto/foto-8.webp'

gsap.registerPlugin(ScrollTrigger)

const distances = [
  { place: 'Moena', dist: '~10 km' },
  { place: 'Cavalese', dist: '~15 km' },
  { place: 'Bolzano', dist: '~50 km' },
  { place: 'Trento', dist: '~60 km' },
]

const nearby = [
  { name: 'Cascata di Predazzo', desc: '30 minuti a piedi dal maso, un facile sentiero nel bosco' },
  { name: 'Ski Center Latemar', desc: 'Comprensorio sciistico tra Predazzo e Obereggen' },
  { name: 'Passo Rolle', desc: 'Panorama mozzafiato sulle Pale di San Martino' },
  { name: 'Parco Naturale di Paneveggio', desc: 'La foresta dei violini, patrimonio naturale' },
  { name: 'Alpe Lusia', desc: 'Escursioni estive e piste invernali' },
  { name: 'Malga Bocche', desc: 'La nostra malga a 1.946 m con ristorante e fattoria' },
]

export default function ComeArrivare() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.arrive-hero-line', { y: 100, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
      gsap.to('.arrive-hero-img', { yPercent: 22, ease: 'none', scrollTrigger: { trigger: '.arrive-hero', start: 'top top', end: 'bottom top', scrub: 1.5 } })

      gsap.from('.address-block', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.address-section', start: 'top 75%' } })
      gsap.from('.address-line', { scaleX: 0, duration: 1.5, ease: 'power2.inOut', scrollTrigger: { trigger: '.address-section', start: 'top 70%' } })

      gsap.from('.car-block', { x: -60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.directions-section', start: 'top 70%' } })
      gsap.from('.bus-block', { x: 60, opacity: 0, duration: 1.1, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.directions-section', start: 'top 70%' } })

      gsap.from('.dist-item', { y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: '.distances-section', start: 'top 75%' } })

      gsap.from('.nearby-item', { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.nearby-section', start: 'top 75%' } })

      gsap.from('.map-reveal', { clipPath: 'inset(0 100% 0 0)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: '.map-section', start: 'top 75%' } })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>
      {/* HERO */}
      <section className="arrive-hero relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={masoImg} alt="Maso Lena inverno" title="Maso Lena inverno" loading="eager" width={800} height={500} className="arrive-hero-img w-full h-[130%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="arrive-hero-line text-[0.65rem] uppercase tracking-[0.3em] text-white/50 mb-6">Predazzo &middot; Val di Fiemme &middot; Trentino</p>
          </div>
          <div className="overflow-hidden">
            <h1 className="arrive-hero-line font-serif fluid-display text-white">Come</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="arrive-hero-line font-serif fluid-display text-white ml-[5vw] md:ml-[12vw]">Arrivare</h1>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="address-section px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-5 address-block">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5" style={{ color: 'var(--wood-500)' }} />
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400">Indirizzo</p>
            </div>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-6">Agritur<br />Maso Lena</h2>
            <div className="space-y-1 mb-8">
              <p className="fluid-body-lg text-wood-600 font-light">Localit&agrave; L&ouml;ze</p>
              <p className="fluid-body-lg text-wood-600 font-light">Via Salita alla Cascata 3</p>
              <p className="fluid-body-lg text-wood-600 font-light">38037 Predazzo (TN)</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/Agritur+Maso+Lena+Predazzo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-creative"
              >
                <Navigation className="w-4 h-4" /><span>Apri in Maps</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-[6vh]">
            <div className="flex items-center gap-4 mb-8">
              <ParkingCircle className="w-5 h-5" style={{ color: 'var(--forest-600)' }} />
              <span className="text-wood-600">Parcheggio gratuito presso la struttura</span>
            </div>
            <div className="address-line sep-line max-w-full" style={{ transformOrigin: 'left' }} />
          </div>
        </div>
      </section>

      {/* DIRECTIONS — asymmetric split */}
      <section className="directions-section relative px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* By car — wider */}
          <div className="car-block col-span-12 md:col-span-7 p-8 md:p-10 relative" style={{ background: 'var(--cream-200)' }}>
            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'var(--wood-600)' }} />
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-6 h-6" style={{ color: 'var(--wood-600)' }} />
              <h3 className="font-serif fluid-h3 text-wood-800">In auto</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">Da Trento</p>
                <p className="text-wood-600 leading-relaxed font-light">
                  Percorrere la SS 612 oppure la SS 47 in direzione Val di Fiemme.
                  A Predazzo seguire le indicazioni per Localit&agrave; L&ouml;ze / Cascata.
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">Da Bolzano</p>
                <p className="text-wood-600 leading-relaxed font-light">
                  Autostrada A22 del Brennero, uscita Egna-Ora. Proseguire sulla SS 48
                  in direzione Cavalese e poi Predazzo.
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">Da Belluno</p>
                <p className="text-wood-600 leading-relaxed font-light">
                  Percorrere la strada attraverso il Passo Rolle in direzione Predazzo.
                </p>
              </div>
            </div>
          </div>

          {/* By public transport — narrower, offset */}
          <div className="bus-block col-span-12 md:col-span-4 md:col-start-9 md:mt-[8vh] p-8 md:p-10 relative" style={{ background: 'var(--forest-50)' }}>
            <div className="absolute top-0 right-0 w-1 h-full" style={{ background: 'var(--forest-600)' }} />
            <div className="flex items-center gap-3 mb-6">
              <Bus className="w-6 h-6" style={{ color: 'var(--forest-700)' }} />
              <h3 className="font-serif fluid-h3 text-wood-800">Mezzi pubblici</h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">Fermata pi&ugrave; vicina</p>
                <p className="text-wood-600 leading-relaxed font-light">
                  Autostazione Predazzo &mdash; a circa 210 metri dall'agriturismo
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">Linee bus</p>
                <p className="text-wood-600 font-light">Linea B101 e B122</p>
              </div>
              <div className="mt-4 p-4" style={{ background: 'var(--forest-100)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--forest-700)' }}>
                  <strong>Trentino Guest Card</strong> &mdash; Prenotando tramite i nostri canali,
                  ricevi la card per viaggiare gratis sui mezzi pubblici in Trentino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISTANCES — horizontal scrolling numbers */}
      <section className="distances-section relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">Distanze</p>
              <h2 className="font-serif fluid-h2 text-cream-100">Da qui puoi<br />raggiungere</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {distances.map((item, i) => (
              <div key={i} className={`dist-item ${i % 2 === 1 ? 'md:mt-8' : ''}`}>
                <span className="font-serif text-[3rem] md:text-[4rem] leading-none text-transparent block" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)' }}>
                  {item.dist.replace('~', '')}
                </span>
                <h3 className="font-serif text-lg text-cream-100 mt-3">{item.place}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY ATTRACTIONS */}
      <section className="nearby-section px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="creative-number block mb-4">01</span>
            <h2 className="font-serif fluid-h2 text-wood-800">Nelle<br />vicinanze</h2>
            <p className="text-wood-500 font-light leading-relaxed mt-6 max-w-xs">
              Predazzo e la Val di Fiemme offrono infinite possibilit&agrave;
              per ogni stagione dell'anno.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 md:mt-[4vh]">
            <div className="space-y-0">
              {nearby.map((item, i) => (
                <div key={i} className="nearby-item py-7 border-b" style={{ borderColor: 'var(--wood-200)' }}>
                  <div className="flex items-start gap-6">
                    <span className="text-wood-300 font-serif text-lg shrink-0 mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-xl text-wood-800 mb-1">{item.name}</h3>
                      <p className="text-wood-500 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section relative">
        <div className="px-5 md:px-10 lg:px-16 pb-0">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">Dove siamo</p>
        </div>
        <div className="map-reveal w-full h-[450px] md:h-[550px]" style={{ clipPath: 'inset(0 0 0 0)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.5!2d11.6!3d46.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAgritur+Maso+Lena!5e0!3m2!1sit!2sit!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Agritur Maso Lena"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--cream-200)' }}>
        <div className="px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Ti aspettiamo</p>
              <h2 className="font-serif fluid-h2 text-wood-800">Hai bisogno di<br />indicazioni?</h2>
              <p className="text-wood-500 font-light mt-4 max-w-md">
                Non esitare a contattarci per qualsiasi informazione
                su come raggiungerci.
              </p>
            </div>
            <Link to="/contatti" className="btn-creative">
              <span>Contattaci</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
