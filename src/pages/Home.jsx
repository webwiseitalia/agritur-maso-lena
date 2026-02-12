import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import heroImg from '../assets/foto/foto-7.webp'
import masoImg from '../assets/foto/foto-6.webp'
import ristoranteImg from '../assets/foto/foto-5.webp'
import cameraImg from '../assets/foto/foto-9.webp'
import cavalloImg from '../assets/foto/foto-4.webp'
import slittaImg from '../assets/foto/foto-10.webp'
import panoramaImg from '../assets/foto/foto-8.webp'
import piatto1 from '../assets/foto/foto-13.webp'
import piatto2 from '../assets/foto/foto-16.webp'
import piatto3 from '../assets/foto/foto-17.webp'
import famigliaImg from '../assets/foto/foto-1.webp'
import salaImg from '../assets/foto/foto-11.webp'
import vistaImg from '../assets/foto/foto-15.webp'
import internoSalaImg from '../assets/foto/foto-3.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { y: 120, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'power4.out', delay: 0.3 })
      gsap.from('.hero-sub', { y: 40, opacity: 0, duration: 1, delay: 1, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, delay: 1.3, ease: 'power3.out' })
      gsap.from('.hero-scroll', { opacity: 0, duration: 1, delay: 1.8 })
      gsap.to('.hero-bg-img', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1.5 } })
      gsap.to('.marquee-inner', { xPercent: -50, ease: 'none', duration: 25, repeat: -1 })
      gsap.from('.intro-text', { y: 80, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.intro-section', start: 'top 75%' } })
      gsap.from('.intro-line', { scaleX: 0, duration: 1.5, ease: 'power2.inOut', scrollTrigger: { trigger: '.intro-section', start: 'top 70%' } })
      gsap.from('.intro-img-left', { clipPath: 'inset(100% 0 0 0)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: { trigger: '.intro-section', start: 'top 75%' } })
      gsap.from('.intro-img-right', { clipPath: 'inset(0 0 100% 0)', duration: 1.4, delay: 0.2, ease: 'power4.inOut', scrollTrigger: { trigger: '.intro-section', start: 'top 75%' } })
      gsap.from('.maso-img-main', { clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'power4.inOut', scrollTrigger: { trigger: '.maso-section', start: 'top 70%' } })
      gsap.from('.maso-img-secondary', { clipPath: 'inset(0 0 100% 0)', duration: 1.4, delay: 0.3, ease: 'power4.inOut', scrollTrigger: { trigger: '.maso-section', start: 'top 70%' } })
      gsap.from('.maso-text', { x: -60, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out', scrollTrigger: { trigger: '.maso-section', start: 'top 65%' } })
      gsap.from('.exp-item', { y: 60, opacity: 0, duration: 0.9, stagger: { each: 0.15, from: 'random' }, ease: 'power2.out', scrollTrigger: { trigger: '.experiences-section', start: 'top 75%' } })
      gsap.from('.rooms-heading', { y: 80, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.rooms-section', start: 'top 75%' } })
      gsap.from('.room-card-home', { y: 70, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.rooms-cards', start: 'top 80%' } })
      gsap.from('.rooms-img-reveal', { clipPath: 'inset(0 100% 0 0)', duration: 1.6, ease: 'power4.inOut', scrollTrigger: { trigger: '.rooms-section', start: 'top 65%' } })
      gsap.from('.rist-img', { xPercent: 20, opacity: 0, duration: 1.1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.ristorante-section', start: 'top 70%' } })
      gsap.from('.malga-number', { y: 80, opacity: 0, duration: 1.5, ease: 'power4.out', scrollTrigger: { trigger: '.malga-section', start: 'top 75%' } })
      gsap.utils.toArray('.para-img').forEach((img) => {
        gsap.to(img, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 2 } })
      })
      gsap.from('.cta-text', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.cta-section', start: 'top 75%' } })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>
      {/* HERO */}
      <section className="hero-section relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Val di Fiemme" className="hero-bg-img w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden"><p className="hero-line text-[0.65rem] uppercase tracking-[0.35em] text-white/50 mb-6">Predazzo · Val di Fiemme · 1.018 m s.l.m.</p></div>
          <div className="overflow-hidden"><h1 className="hero-line font-serif fluid-display text-white max-w-[80vw]">Agritur</h1></div>
          <div className="overflow-hidden"><h1 className="hero-line font-serif fluid-display text-white max-w-[80vw] ml-[5vw] md:ml-[12vw]">Maso Lena</h1></div>
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="hero-sub text-white/60 max-w-md fluid-body-lg font-light leading-relaxed">
              L'emozione di un mondo autentico che sa interpretare lo spirito semplice e legato alle tradizioni.
            </p>
            <div className="hero-cta flex gap-4">
              <Link to="/contatti" className="btn-creative"><span>Prenota</span><ArrowUpRight className="w-4 h-4" /></Link>
              <Link to="/le-camere" className="btn-outline !border-white/30 !text-white/70 hover:!bg-white/10 hover:!border-white/50 hover:!text-white"><span>Le camere</span></Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[0.55rem] uppercase tracking-[0.3em] text-white/30">Scorri</span>
          <ArrowDown className="w-4 h-4 text-white/30 animate-bounce" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="marquee-inner flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="font-serif text-[1rem] md:text-[1.3rem] text-white/50 mx-8 tracking-widest">
              Agriturismo · Ristorante · Fattoria Didattica · Cavalli Norici · Malga Bocche · Dolomiti · Val di Fiemme&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="intro-section px-5 md:px-10 lg:px-16 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left image */}
          <div className="hidden md:block col-span-3 intro-img-left" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[3/4]">
              <img src={salaImg} alt="La sala del ristorante" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center text */}
          <div className="col-span-12 md:col-span-6 md:px-4 lg:px-8">
            <div className="intro-text">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-8">Benvenuti al Maso</p>
              <h2 className="font-serif fluid-h1 text-wood-800 max-w-3xl leading-tight mb-8">Stile, confort<br className="hidden md:block" /> e cibi genuini</h2>
              <p className="fluid-body-lg text-wood-500 max-w-xl leading-relaxed font-light">
                Maso Lena offre l'emozione di un mondo autentico nella splendida Val di Fiemme.
                Un ambiente tranquillo e accogliente dove la famiglia Dellagiacoma vi accoglie
                con lo spirito semplice delle tradizioni di montagna.
              </p>
            </div>
            <div className="intro-line sep-line mt-16 max-w-sm" style={{ transformOrigin: 'left' }} />
          </div>

          {/* Right image */}
          <div className="hidden md:block col-span-3 intro-img-right mt-12" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[3/4]">
              <img src={vistaImg} alt="Vista sulle montagne" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MASO — broken grid */}
      <section className="maso-section relative px-5 md:px-10 lg:px-16 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
          <div className="col-span-12 md:col-span-7 maso-img-main" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[4/3] md:aspect-[16/10]">
              <img src={masoImg} alt="Maso Lena" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 maso-text md:mt-[-8vh]">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Il Maso</p>
            <h3 className="font-serif fluid-h3 text-wood-800 mb-4">Un paesaggio<br />incontaminato</h3>
            <p className="text-wood-500 leading-relaxed mb-6">
              L'anima rurale pervade ogni locale con pavimenti e arredamenti in legno massiccio
              e oggetti usati nell'arte contadina di un tempo.
            </p>
            <Link to="/il-maso" className="btn-outline"><span>Scopri il maso</span><ArrowUpRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="col-span-8 md:col-span-4 md:col-start-6 maso-img-secondary mt-[-10vw] md:mt-[-12vw] relative z-10" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[3/4] shadow-2xl">
              <img src={panoramaImg} alt="Inverno al maso" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="experiences-section relative py-24 md:py-36 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full opacity-5" style={{ background: 'var(--wood-400)', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />
        <div className="px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/70 mb-4">Incluse nel soggiorno</p>
              <h2 className="font-serif fluid-h2 text-white">Esperienze<br />autentiche</h2>
            </div>
            <p className="text-white/70 max-w-xs text-sm font-light leading-relaxed md:text-right">
              Il soggiorno include attività uniche per vivere la montagna e le tradizioni trentine.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-0">
            {[
              { num: '01', title: 'Pranzo in malga', desc: 'A Malga Bocche, 1.946 m, con vista Pale di San Martino', offset: '' },
              { num: '02', title: 'Cavalli Norici', desc: 'Carrozza in estate, slitta in inverno tra i paesaggi dolomitici', offset: 'md:mt-16' },
              { num: '03', title: 'Fattoria didattica', desc: 'Lama, cavalli, pony, mucche, asini e tanto altro', offset: 'md:mt-8' },
              { num: '04', title: 'Cucina genuina', desc: 'Merenda e cena con piatti tipici trentini fatti in casa', offset: 'md:mt-24' },
            ].map((item) => (
              <div key={item.num} className={`exp-item ${item.offset}`}>
                <span className="font-serif text-[4rem] md:text-[5rem] leading-none text-transparent block mb-4" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>{item.num}</span>
                <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="rooms-section relative py-24 md:py-40 overflow-hidden">
        <div className="px-5 md:px-10 lg:px-16">
          {/* Header row with image */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-20 md:mb-28">
            <div className="col-span-12 md:col-span-5 rooms-heading">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Le nostre camere</p>
              <h2 className="font-serif fluid-h1 text-wood-800 mb-6">Otto storie<br />da vivere</h2>
              <p className="text-wood-500 leading-relaxed font-light max-w-md">
                Ogni camera racconta un mondo diverso. Dalle suite dedicate agli antichi mestieri contadini
                alle junior suite ispirate ai fiori di montagna, con vista sulla catena del Lagorai.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 rooms-img-reveal" style={{ clipPath: 'inset(0 0 0 0)' }}>
              <div className="img-hover-zoom aspect-[16/10]">
                <img src={cameraImg} alt="Camera del maso" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Room cards */}
          <div className="rooms-cards grid grid-cols-12 gap-6 md:gap-8">
            {/* Suite Mestieri Antichi */}
            <div className="room-card-home col-span-12 md:col-span-7 relative group">
              <div className="border border-wood-200 p-8 md:p-10 transition-all duration-500 hover:border-wood-400">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-3">4 Suite</p>
                    <h3 className="font-serif fluid-h3 text-wood-800">Mestieri Antichi</h3>
                  </div>
                  <span className="creative-number !text-[3rem] !opacity-40">I</span>
                </div>
                <p className="text-wood-400 text-sm mb-4 tracking-wide">Carador &middot; Bacan &middot; Pastor &middot; Boscher</p>
                <div className="sep-line mb-5" style={{ transform: 'scaleX(1)' }} />
                <p className="text-wood-500 leading-relaxed text-sm mb-8 max-w-lg">
                  Suite ampie e suggestive dedicate agli antichi mestieri contadini,
                  con arredamento in legno massiccio e vista panoramica sul Lagorai.
                </p>
                <Link to="/le-camere" className="btn-outline">
                  <span>Scopri le suite</span><ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Junior Suite Fiori di Montagna */}
            <div className="room-card-home col-span-12 md:col-span-5 md:mt-[10vh] relative group">
              <div className="border border-wood-200 p-8 md:p-10 transition-all duration-500 hover:border-wood-400">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-3">4 Junior Suite</p>
                    <h3 className="font-serif fluid-h3 text-wood-800">Fiori di Montagna</h3>
                  </div>
                  <span className="creative-number !text-[3rem] !opacity-40">II</span>
                </div>
                <p className="text-wood-400 text-sm mb-4 tracking-wide">Negritella &middot; Stella Alpina &middot; Fiocco di Neve &middot; Genziana</p>
                <div className="sep-line mb-5" style={{ transform: 'scaleX(1)' }} />
                <p className="text-wood-500 leading-relaxed text-sm mb-8">
                  Junior suite eleganti dedicate ai fiori tipici di montagna,
                  con comfort moderno in armonia con la tradizione alpina.
                </p>
                <Link to="/le-camere" className="btn-outline">
                  <span>Scopri le junior suite</span><ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom row with images and CTA */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 mt-8">
            <div className="col-span-6 md:col-span-4 room-card-home">
              <div className="img-hover-zoom aspect-[4/5]">
                <img src={internoSalaImg} alt="Interni del maso" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 room-card-home">
              <div className="img-hover-zoom aspect-[4/5]">
                <img src={cavalloImg} alt="Cavalli del maso" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 room-card-home flex flex-col justify-center items-center text-center p-8" style={{ background: 'var(--cream-200)' }}>
              <p className="font-serif text-[4rem] md:text-[6rem] leading-none text-transparent mb-4" style={{ WebkitTextStroke: '1.5px var(--wood-300)' }}>
                8
              </p>
              <p className="text-wood-400 text-xs uppercase tracking-[0.3em] mb-6">camere con vista Lagorai</p>
              <Link to="/le-camere" className="btn-creative"><span>Tutte le camere</span><ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* RISTORANTE */}
      <section className="ristorante-section relative py-20 md:py-32 overflow-hidden" style={{ background: 'var(--cream-200)' }}>
        <div className="px-5 md:px-10 lg:px-16 mb-14 md:mb-20">
          <div className="max-w-md">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Sapori</p>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-6">La cucina tipica<br />del passato</h2>
            <p className="text-wood-500 leading-relaxed font-light">
              Piatti della cucina tipica rigorosamente realizzati in casa
              con materie prime di produzione propria e da produttori locali.
            </p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 px-5 md:px-10 lg:px-16 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
          {[
            { img: ristoranteImg, title: 'La nostra sala', sub: 'Ambiente caldo e autentico' },
            { img: piatto1, title: 'Canederli', sub: 'Tradizione trentina' },
            { img: piatto3, title: 'Carne salada', sub: 'Con fagioli e polenta' },
            { img: piatto2, title: 'Strudel', sub: 'Fatto in casa' },
          ].map((item, i) => (
            <div key={i} className={`rist-img shrink-0 ${i === 0 ? 'w-[70vw] md:w-[40vw]' : 'w-[55vw] md:w-[28vw]'}`}>
              <div className="img-hover-zoom aspect-[4/5]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg text-wood-800">{item.title}</h3>
                <p className="text-wood-400 text-xs uppercase tracking-widest mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-5 md:px-10 lg:px-16 mt-12">
          <Link to="/ristorante" className="btn-outline"><span>Il ristorante</span><ArrowUpRight className="w-3.5 h-3.5" /></Link>
        </div>
      </section>

      {/* MALGA BOCCHE */}
      <section className="malga-section relative h-[85vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={slittaImg} alt="Slitta verso Malga Bocche" className="para-img w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="malga-number">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50 mb-4">1.946 m s.l.m.</p>
              <h2 className="font-serif fluid-h1 text-white mb-4">Malga Bocche</h2>
              <p className="text-white/70 max-w-md font-light leading-relaxed">
                In una delle più spettacolari plaghe dolomitiche,
                con vista sul Parco Naturale di Paneveggio e le Pale di San Martino.
              </p>
              <p className="text-white/40 text-xs tracking-wide mt-4">Aperta 20 giugno — 20 settembre</p>
            </div>
            <Link to="/malga-bocche" className="btn-creative !bg-white !text-wood-900 hover:!text-wood-900">
              <span>Scopri la malga</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="cta-section relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={masoImg} alt="Maso Lena" className="para-img w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 cta-text">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-6">Val di Fiemme · Dolomiti</p>
          <h2 className="font-serif fluid-h1 text-white max-w-2xl mb-8">Vieni a trovarci</h2>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contatti" className="btn-creative !bg-white !text-wood-900 hover:!text-wood-900">
              <span>Richiedi un preventivo</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/come-arrivare" className="btn-outline !border-white/30 !text-white/70 hover:!bg-white/10 hover:!border-white/50 hover:!text-white">
              <span>Come arrivare</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
