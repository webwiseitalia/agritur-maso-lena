import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Check, CreditCard, Info, Sparkles } from 'lucide-react'
import masoImg from '../assets/foto/foto-6.webp'

gsap.registerPlugin(ScrollTrigger)

const inclusions = [
  'Pernottamento in camera tematica',
  'Prima colazione con prodotti genuini',
  'Pranzo a Malga Bocche (in stagione)',
  'Merenda pomeridiana',
  'Giro in carrozza (estate) o slitta (inverno) con cavalli Norici',
]

const alternatives = [
  'Visita alla fattoria didattica con tutti gli animali',
  'Ciaspolata in compagnia (inverno)',
]

export default function Prezzi() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.prezzi-hero-text', { y: 100, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
      gsap.to('.prezzi-hero-img', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.prezzi-hero', start: 'top top', end: 'bottom top', scrub: 1.5 } })
      gsap.from('.prezzi-intro-line', { scaleX: 0, duration: 1.5, ease: 'power2.inOut', scrollTrigger: { trigger: '.prezzi-intro', start: 'top 75%' } })
      gsap.from('.prezzi-intro-text', { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.prezzi-intro', start: 'top 75%' } })
      gsap.from('.incluso-item', { x: -40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.incluso-section', start: 'top 70%' } })
      gsap.from('.alt-item', { x: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.alt-section', start: 'top 75%' } })
      gsap.from('.guest-card-block', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.guest-card-block', start: 'top 80%' } })
      gsap.from('.room-card', { y: 70, opacity: 0, duration: 1, stagger: 0.25, ease: 'power3.out', scrollTrigger: { trigger: '.rooms-quote', start: 'top 70%' } })
      gsap.from('.supp-item', { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.supplements-section', start: 'top 75%' } })
      gsap.from('.cta-prezzi', { y: 50, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.cta-prezzi', start: 'top 80%' } })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>
      {/* HERO */}
      <section className="prezzi-hero relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={masoImg} alt="Maso Lena" className="prezzi-hero-img w-full h-[130%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="prezzi-hero-text text-[0.65rem] uppercase tracking-[0.3em] text-white/50 mb-6">Tariffe e servizi inclusi</p>
          </div>
          <div className="overflow-hidden">
            <h1 className="prezzi-hero-text font-serif fluid-display text-white">Prezzi</h1>
          </div>
          <div className="overflow-hidden">
            <p className="prezzi-hero-text text-white/50 max-w-md fluid-body-lg font-light mt-8">
              Molto pi&ugrave; di un pernottamento. Un&rsquo;esperienza completa nel cuore delle Dolomiti.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="prezzi-intro px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="max-w-5xl ml-auto mr-0 md:mr-[10vw]">
          <div className="prezzi-intro-text">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-8">Il vostro soggiorno</p>
            <h2 className="font-serif fluid-h1 text-wood-800 max-w-3xl">Il prezzo comprende<br className="hidden md:block" /> un mondo di esperienze</h2>
          </div>
          <div className="prezzi-intro-line sep-line mt-14 max-w-xs" style={{ transformOrigin: 'left' }} />
        </div>
      </section>

      {/* INCLUSIONS + ALTERNATIVES — broken grid */}
      <section className="relative px-5 md:px-10 lg:px-16 pb-24 md:pb-36">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: inclusions */}
          <div className="incluso-section col-span-12 md:col-span-7">
            <span className="creative-number block mb-6">01</span>
            <h3 className="font-serif fluid-h3 text-wood-800 mb-8">Sempre incluso nel soggiorno</h3>
            <div className="space-y-5">
              {inclusions.map((item, i) => (
                <div key={i} className="incluso-item flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--forest-100)' }}>
                    <Check className="w-4 h-4" style={{ color: 'var(--forest-600)' }} />
                  </div>
                  <p className="fluid-body-lg text-wood-600 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: alternatives, offset down */}
          <div className="alt-section col-span-12 md:col-span-4 md:col-start-9 md:mt-[12vh]">
            <span className="creative-number block mb-6">02</span>
            <h3 className="font-serif fluid-h3 text-wood-800 mb-8">Oppure in alternativa</h3>
            <div className="space-y-5">
              {alternatives.map((item, i) => (
                <div key={i} className="alt-item flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--wood-100)' }}>
                    <Sparkles className="w-4 h-4" style={{ color: 'var(--wood-600)' }} />
                  </div>
                  <p className="text-wood-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUEST CARD */}
      <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="guest-card-block max-w-4xl ml-0 md:ml-[8vw] p-8 md:p-12 relative" style={{ background: 'var(--forest-50)' }}>
          <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'var(--forest-600)' }} />
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Vantaggio esclusivo</p>
          <h3 className="font-serif fluid-h3 text-wood-800 mb-4">Trentino Guest Card</h3>
          <p className="fluid-body-lg text-wood-500 font-light max-w-2xl">
            Prenotando tramite i nostri canali ufficiali, riceverete la Trentino Guest Card
            per viaggiare gratuitamente con i mezzi pubblici in Trentino e accedere a musei,
            castelli e tante altre attrazioni del territorio.
          </p>
        </div>
      </section>

      {/* ROOM TYPES — asymmetric */}
      <section className="rooms-quote relative py-24 md:py-36 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-[0.03]" style={{ background: 'var(--wood-200)', filter: 'blur(100px)', transform: 'translate(20%, -30%)' }} />
        <div className="px-5 md:px-10 lg:px-16">
          <div className="mb-16 md:mb-24">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">Le nostre camere</p>
            <h2 className="font-serif fluid-h2 text-cream-100">Richiedi un<br />preventivo</h2>
            <p className="text-cream-300/60 max-w-lg mt-6 font-light leading-relaxed">
              Le tariffe variano in base alla stagione e alla tipologia di camera.
              Contattaci per un preventivo personalizzato.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* Suite Mestieri Antichi */}
            <div className="room-card md:w-[55%] border border-white/10 p-8 md:p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-3">4 Suite</p>
                  <h3 className="font-serif fluid-h3 text-cream-100">Mestieri Antichi</h3>
                </div>
                <span className="creative-number-light !text-[3rem] !opacity-30">I</span>
              </div>
              <p className="text-cream-200/60 text-sm mb-6">Carador &middot; Bacan &middot; Pastor &middot; Boscher</p>
              <div className="sep-line mb-6" style={{ background: 'var(--wood-600)', transform: 'scaleX(1)' }} />
              <p className="text-cream-300/60 leading-relaxed text-sm mb-8">
                Suite ampie e suggestive dedicate agli antichi mestieri contadini,
                con vista panoramica sulla catena del Lagorai. Arredamento in legno massiccio
                e dettagli curati nei minimi particolari.
              </p>
              <Link to="/contatti" className="btn-outline !border-white/20 !text-cream-200 hover:!bg-white/10 hover:!border-white/40 hover:!text-white">
                <span>Richiedi preventivo</span><ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Junior Suite Fiori */}
            <div className="room-card md:w-[45%] md:mt-[8vh] border border-white/10 p-8 md:p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-3">4 Junior Suite</p>
                  <h3 className="font-serif fluid-h3 text-cream-100">Fiori di Montagna</h3>
                </div>
                <span className="creative-number-light !text-[3rem] !opacity-30">II</span>
              </div>
              <p className="text-cream-200/60 text-sm mb-6">Negritella &middot; Stella Alpina &middot; Fiocco di Neve &middot; Genziana</p>
              <div className="sep-line mb-6" style={{ background: 'var(--wood-600)', transform: 'scaleX(1)' }} />
              <p className="text-cream-300/60 leading-relaxed text-sm mb-8">
                Junior suite dedicate ai fiori tipici di montagna, con decorazioni
                eleganti e atmosfera raffinata. Vista panoramica e comfort moderno
                in armonia con la tradizione alpina.
              </p>
              <Link to="/contatti" className="btn-outline !border-white/20 !text-cream-200 hover:!bg-white/10 hover:!border-white/40 hover:!text-white">
                <span>Richiedi preventivo</span><ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLEMENTS */}
      <section className="supplements-section px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <span className="creative-number block mb-4">03</span>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-6">Informazioni<br />utili</h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-[4vh]">
            <div className="space-y-8">
              <div className="supp-item">
                <div className="flex items-center gap-3 mb-3">
                  <Info className="w-5 h-5" style={{ color: 'var(--wood-500)' }} />
                  <h3 className="font-serif text-xl text-wood-800">Supplementi</h3>
                </div>
                <div className="sep-line mb-4" style={{ transform: 'scaleX(1)' }} />
                <ul className="space-y-3 text-wood-600">
                  <li className="flex justify-between items-baseline">
                    <span>Imposta di soggiorno</span>
                    <span className="text-wood-800 font-medium">&euro;1,50/notte</span>
                  </li>
                  <li className="text-wood-400 text-xs ml-0">Dai 14 anni, per un massimo di 10 notti</li>
                  <li className="flex justify-between items-baseline mt-3">
                    <span>Contributo &ldquo;Vallevviva forever&rdquo;</span>
                    <span className="text-wood-800 font-medium">&euro;1,00</span>
                  </li>
                </ul>
              </div>

              <div className="supp-item">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-5 h-5" style={{ color: 'var(--wood-500)' }} />
                  <h3 className="font-serif text-xl text-wood-800">Pagamenti</h3>
                </div>
                <div className="sep-line mb-4" style={{ transform: 'scaleX(1)' }} />
                <p className="text-wood-600 leading-relaxed">
                  Carte di credito accettate. Il soggiorno viene confermato
                  al ricevimento di un acconto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-prezzi relative py-24 md:py-36 overflow-hidden" style={{ background: 'var(--cream-200)' }}>
        <div className="px-5 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">Pronto per prenotare?</p>
            <h2 className="font-serif fluid-h1 text-wood-800 mb-8">Contattaci per un<br />preventivo personalizzato</h2>
            <p className="fluid-body-lg text-wood-500 font-light max-w-xl mb-10">
              Scrivici o chiamaci per verificare la disponibilit&agrave;
              e ricevere la tariffa migliore per il tuo soggiorno.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contatti" className="btn-creative">
                <span>Richiedi preventivo</span><ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href="tel:+393407128301" className="btn-outline">
                <span>Chiama Katia</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
