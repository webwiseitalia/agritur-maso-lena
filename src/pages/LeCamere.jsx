import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Wifi, Car, Accessibility, PawPrint } from 'lucide-react'
import cameraImg from '../assets/foto/foto-9.webp'
import vistaImg from '../assets/foto/foto-15.webp'
import masoImg from '../assets/foto/foto-8.webp'

gsap.registerPlugin(ScrollTrigger)

const suiteMestieri = [
  {
    num: '01',
    name: 'CARADOR',
    subtitle: 'Il Carrettiere',
    desc: 'Dedicata al mestiere del carrettiere, con tipici richiami agli attrezzi utilizzati per il trasporto montano. Ampia e suggestiva, con vista panoramica sulla catena del Lagorai.',
  },
  {
    num: '02',
    name: 'BACAN',
    subtitle: 'Il Contadino',
    desc: 'Omaggio al contadino di montagna, arredata con dettagli che ricordano la vita rurale di un tempo. Vista spettacolare sulla valle e arredi in legno massiccio.',
  },
  {
    num: '03',
    name: 'PASTOR',
    subtitle: 'Il Pastore',
    desc: 'Ispirata al mestiere del pastore, con decorazioni curate nei minimi dettagli. Un\'atmosfera calda e avvolgente con vista panoramica mozzafiato.',
  },
  {
    num: '04',
    name: 'BOSCHER',
    subtitle: 'Il Boscaiolo',
    desc: 'Dedicata al boscaiolo, con elementi che richiamano il lavoro nei boschi delle Dolomiti. Legno massiccio e comfort moderno si fondono armoniosamente.',
  },
]

const suiteFlowers = [
  {
    num: '05',
    name: 'NEGRITELLA',
    subtitle: 'Il fiore delle Dolomiti',
    desc: 'Ispirata alla delicata Negritella, orchidea selvatica delle Dolomiti dal profumo di vaniglia. Atmosfera raffinata con vista sulla valle.',
  },
  {
    num: '06',
    name: 'STELLA ALPINA',
    subtitle: 'Il fiore di montagna',
    desc: 'Dedicata al simbolo delle Alpi, la Stella Alpina. Decorazioni eleganti che richiamano la bellezza pura della montagna.',
  },
  {
    num: '07',
    name: 'FIOCCO DI NEVE',
    subtitle: 'La magia dell\'inverno',
    desc: 'Un omaggio all\'inverno dolomitico e ai suoi cristalli di neve. Atmosfera magica e accogliente con dettagli incantevoli.',
  },
  {
    num: '08',
    name: 'GENZIANA',
    subtitle: 'Il fiore alpino',
    desc: 'Ispirata al blu intenso della Genziana che colora i prati alpini. Un rifugio di tranquillità con vista panoramica.',
  },
]

const services = [
  { icon: Wifi, label: 'WiFi gratuito', detail: 'In tutte le camere' },
  { icon: Car, label: 'Parcheggio', detail: 'Privato e gratuito' },
  { icon: Accessibility, label: 'Accessibile', detail: 'Struttura attrezzata' },
  { icon: PawPrint, label: 'Animali ammessi', detail: 'I vostri amici a 4 zampe' },
]

export default function LeCamere() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.camere-hero-label', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      })
      gsap.from('.camere-hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.4,
        delay: 0.5,
        ease: 'power4.out',
      })
      gsap.from('.camere-hero-title-2', {
        y: 100,
        opacity: 0,
        duration: 1.4,
        delay: 0.7,
        ease: 'power4.out',
      })
      gsap.from('.camere-hero-count', {
        scale: 0.5,
        opacity: 0,
        duration: 1.6,
        delay: 0.9,
        ease: 'power4.out',
      })
      gsap.to('.camere-hero-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.camere-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Intro section
      gsap.from('.camere-intro-text', {
        y: 70,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.camere-intro', start: 'top 75%' },
      })
      gsap.from('.camere-intro-line', {
        scaleX: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.camere-intro', start: 'top 70%' },
      })
      gsap.from('.camere-intro-img', {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.6,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: '.camere-intro', start: 'top 65%' },
      })

      // Mestieri heading
      gsap.from('.mestieri-label', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.mestieri-section', start: 'top 80%' },
      })
      gsap.from('.mestieri-title', {
        y: 80,
        opacity: 0,
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.mestieri-section', start: 'top 75%' },
      })
      gsap.from('.mestieri-desc', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.mestieri-section', start: 'top 70%' },
      })

      // Mestieri rooms - staggered from alternating sides
      gsap.utils.toArray('.mestieri-room').forEach((room, i) => {
        const direction = i % 2 === 0 ? -80 : 80
        gsap.from(room, {
          x: direction,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: room,
            start: 'top 80%',
          },
        })
      })

      // Vista parallax section
      gsap.to('.vista-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.vista-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })
      gsap.from('.vista-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.vista-section', start: 'top 60%' },
      })

      // Fiori heading
      gsap.from('.fiori-title', {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.fiori-section', start: 'top 80%' },
      })

      // Fiori rooms - each revealed differently
      gsap.utils.toArray('.fiori-room').forEach((room, i) => {
        const anim = [
          { y: 80, rotation: 2 },
          { y: 100, rotation: -1 },
          { y: 60, rotation: 1.5 },
          { y: 90, rotation: -2 },
        ][i] || { y: 80, rotation: 0 }

        gsap.from(room, {
          ...anim,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: room,
            start: 'top 85%',
          },
        })
      })

      // Services section
      gsap.from('.services-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-section', start: 'top 75%' },
      })
      gsap.from('.service-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: { each: 0.12, from: 'start' },
        ease: 'power2.out',
        scrollTrigger: { trigger: '.services-section', start: 'top 70%' },
      })
      gsap.from('.services-line', {
        scaleX: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.services-section', start: 'top 65%' },
      })

      // CTA section
      gsap.from('.cta-camere-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-camere', start: 'top 70%' },
      })
      gsap.to('.cta-camere-bg', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.cta-camere',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Separator lines
      gsap.utils.toArray('.sep-line').forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: line, start: 'top 85%' },
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>

      {/* ============================================
          HERO - Full screen, asymmetric text placement
          ============================================ */}
      <section className="camere-hero relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cameraImg}
            alt="Suite Maso Lena"
            className="camere-hero-bg w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        {/* Decorative large number */}
        <div className="camere-hero-count absolute top-[15vh] right-[5vw] md:right-[10vw] z-10 pointer-events-none">
          <span
            className="font-serif text-[12rem] md:text-[20rem] lg:text-[28rem] leading-none text-transparent select-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}
          >
            8
          </span>
        </div>

        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="camere-hero-label text-[0.65rem] uppercase tracking-[0.35em] text-white/40 mb-6">
              Le Camere · Maso Lena
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="camere-hero-title font-serif fluid-display text-white">
              Otto stanze,
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="camere-hero-title-2 font-serif fluid-display text-white ml-[8vw] md:ml-[15vw]">
              otto storie
            </h1>
          </div>
          <div className="mt-10 md:mt-14 max-w-md ml-[3vw] md:ml-[8vw]">
            <p className="camere-hero-label text-white/50 fluid-body-lg font-light">
              Ogni camera racconta un mestiere antico o un fiore di montagna,
              con vista spettacolare sulla catena del Lagorai.
            </p>
          </div>
        </div>
      </section>


      {/* ============================================
          INTRO - Broken grid with overlapping image
          ============================================ */}
      <section className="camere-intro px-5 md:px-10 lg:px-16 py-24 md:py-40 relative">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Text block - pushed right */}
          <div className="col-span-12 md:col-span-5 md:col-start-2 camere-intro-text">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">
              Le nostre camere
            </p>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-6">
              Dove il legno<br />racconta il tempo
            </h2>
            <p className="fluid-body-lg text-wood-500 font-light leading-relaxed mb-8">
              Le otto suite ampie e suggestive hanno ogni comodita che puoi desiderare
              e offrono una vista spettacolare verso la catena montuosa Lagorai e sulla valle.
              Le camere si distinguono per le decorazioni curate nei minimi dettagli,
              pavimenti e arredamenti in legno massiccio.
            </p>
            <div className="camere-intro-line sep-line max-w-xs" style={{ transformOrigin: 'left' }} />
          </div>

          {/* Overlapping image - offset position */}
          <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-8 camere-intro-img mt-8 md:mt-[-4vw]" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[3/4] shadow-2xl">
              <img
                src={vistaImg}
                alt="Vista panoramica dalla camera"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-wood-400 text-xs tracking-widest uppercase mt-4 text-right">
              Vista dalla camera · Catena del Lagorai
            </p>
          </div>
        </div>
      </section>


      {/* ============================================
          MESTIERI ANTICHI - Dark section, staggered rooms
          ============================================ */}
      <section className="mestieri-section relative py-28 md:py-44 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        {/* Background decorative blob */}
        <div
          className="absolute top-[-10%] left-[-15%] w-[50vw] h-[50vw] rounded-full opacity-[0.03]"
          style={{ background: 'var(--wood-300)', filter: 'blur(100px)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-[0.04]"
          style={{ background: 'var(--wood-400)', filter: 'blur(80px)' }}
        />

        <div className="px-5 md:px-10 lg:px-16 relative z-10">
          {/* Section heading - asymmetric */}
          <div className="mb-20 md:mb-32">
            <p className="mestieri-label text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">
              4 Suite
            </p>
            <div className="overflow-hidden">
              <h2 className="mestieri-title font-serif fluid-h1 text-cream-100">
                I Mestieri<br />
                <span className="ml-[10vw] md:ml-[18vw]">Antichi</span>
              </h2>
            </div>
            <p className="mestieri-desc text-cream-200/70 max-w-md mt-8 fluid-body-lg font-light leading-relaxed">
              Quattro suite rendono omaggio agli antichi mestieri contadini,
              con tipici richiami agli attrezzi utilizzati in questo tipo di lavori.
            </p>
          </div>

          {/* Room 1 - CARADOR: full width, left aligned */}
          <div className="mestieri-room mb-20 md:mb-28">
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-3 md:col-span-2">
                <span className="creative-number-light block">{suiteMestieri[0].num}</span>
              </div>
              <div className="col-span-9 md:col-span-5">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-2">
                  Suite del
                </p>
                <h3 className="font-serif fluid-h2 text-cream-100 mb-3">
                  {suiteMestieri[0].name}
                </h3>
                <p className="text-cream-200/50 text-sm italic mb-4">
                  {suiteMestieri[0].subtitle}
                </p>
                <p className="text-cream-200/70 leading-relaxed font-light max-w-sm">
                  {suiteMestieri[0].desc}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-9 mt-6 md:mt-0">
                <div className="sep-line mb-6" />
                <p className="text-cream-200/40 text-xs uppercase tracking-widest">
                  Legno massiccio · Vista Lagorai · Arredi tipici
                </p>
              </div>
            </div>
          </div>

          {/* Room 2 - BACAN: indented right */}
          <div className="mestieri-room mb-20 md:mb-28 md:ml-[20vw]">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="creative-number-light shrink-0">{suiteMestieri[1].num}</span>
              <div className="max-w-lg">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-2">
                  Suite del
                </p>
                <h3 className="font-serif fluid-h2 text-cream-100 mb-3">
                  {suiteMestieri[1].name}
                </h3>
                <p className="text-cream-200/50 text-sm italic mb-4">
                  {suiteMestieri[1].subtitle}
                </p>
                <p className="text-cream-200/70 leading-relaxed font-light">
                  {suiteMestieri[1].desc}
                </p>
              </div>
            </div>
            <div className="sep-line mt-8 max-w-xs md:ml-auto" />
          </div>

          {/* Room 3 - PASTOR: left with creative number overlapping */}
          <div className="mestieri-room mb-20 md:mb-28 relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 relative">
                {/* Giant number behind */}
                <span
                  className="absolute top-[-2rem] left-[-1rem] font-serif text-[8rem] md:text-[12rem] leading-none text-transparent pointer-events-none select-none"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
                >
                  03
                </span>
                <div className="relative z-10 pt-8 md:pt-16">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-2">
                    Suite del
                  </p>
                  <h3 className="font-serif fluid-h2 text-cream-100 mb-3">
                    {suiteMestieri[2].name}
                  </h3>
                  <p className="text-cream-200/50 text-sm italic mb-4">
                    {suiteMestieri[2].subtitle}
                  </p>
                  <p className="text-cream-200/70 leading-relaxed font-light max-w-sm">
                    {suiteMestieri[2].desc}
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
                <div className="w-full">
                  <div className="sep-line mb-4" />
                  <p className="text-cream-200/40 text-xs uppercase tracking-widest text-right">
                    Atmosfera calda · Decorazioni curate
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Room 4 - BOSCHER: centered with wide sep line */}
          <div className="mestieri-room md:mx-[8vw]">
            <div className="flex flex-col items-center text-center">
              <span className="creative-number-light mb-4">{suiteMestieri[3].num}</span>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-2">
                Suite del
              </p>
              <h3 className="font-serif fluid-h2 text-cream-100 mb-3">
                {suiteMestieri[3].name}
              </h3>
              <p className="text-cream-200/50 text-sm italic mb-4">
                {suiteMestieri[3].subtitle}
              </p>
              <p className="text-cream-200/70 leading-relaxed font-light max-w-lg">
                {suiteMestieri[3].desc}
              </p>
              <div className="sep-line mt-10 w-full max-w-2xl" />
            </div>
          </div>
        </div>
      </section>


      {/* ============================================
          VISTA PANORAMICA - Parallax image break
          ============================================ */}
      <section className="vista-section relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={vistaImg}
            alt="Vista panoramica Lagorai"
            className="vista-bg w-full h-[140%] object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 vista-text">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-4">
            Da ogni finestra
          </p>
          <h2 className="font-serif fluid-h2 text-white max-w-lg mb-4">
            La catena del Lagorai<br />ai vostri piedi
          </h2>
          <p className="text-white/50 max-w-sm font-light leading-relaxed">
            Ogni mattina vi sveglierete con una vista che toglie il fiato
            sulle montagne e sulla valle sottostante.
          </p>
        </div>
      </section>


      {/* ============================================
          FIORI DI MONTAGNA - Light section, zigzag layout
          ============================================ */}
      <section className="fiori-section relative py-28 md:py-44 overflow-hidden" style={{ background: 'var(--cream-100)' }}>
        <div className="px-5 md:px-10 lg:px-16">

          {/* Section heading - right aligned */}
          <div className="mb-20 md:mb-32 md:ml-auto md:mr-0 md:max-w-xl md:text-right">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">
              4 Junior Suite
            </p>
            <div className="overflow-hidden">
              <h2 className="fiori-title font-serif fluid-h1 text-wood-800">
                Fiori di<br />Montagna
              </h2>
            </div>
            <p className="text-wood-500 max-w-md mt-8 fluid-body-lg font-light leading-relaxed md:ml-auto">
              Quattro junior suite dedicate ai fiori tipici di montagna
              che incantano grandi e piccoli con le loro decorazioni delicate.
            </p>
          </div>

          {/* Flower room 1 - NEGRITELLA: far left */}
          <div className="fiori-room mb-16 md:mb-24 max-w-lg">
            <div className="flex items-start gap-5">
              <span className="creative-number shrink-0">{suiteFlowers[0].num}</span>
              <div className="pt-4">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">
                  Junior Suite
                </p>
                <h3 className="font-serif fluid-h3 text-wood-800 mb-2">
                  {suiteFlowers[0].name}
                </h3>
                <p className="text-forest-600 text-sm italic mb-3">
                  {suiteFlowers[0].subtitle}
                </p>
                <p className="text-wood-500 leading-relaxed font-light">
                  {suiteFlowers[0].desc}
                </p>
              </div>
            </div>
            <div className="sep-line mt-8 max-w-sm" />
          </div>

          {/* Flower room 2 - STELLA ALPINA: pushed right */}
          <div className="fiori-room mb-16 md:mb-24 md:ml-[30vw] max-w-lg">
            <div className="flex items-start gap-5">
              <div className="pt-4 order-2 md:order-1">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">
                  Junior Suite
                </p>
                <h3 className="font-serif fluid-h3 text-wood-800 mb-2">
                  {suiteFlowers[1].name}
                </h3>
                <p className="text-forest-600 text-sm italic mb-3">
                  {suiteFlowers[1].subtitle}
                </p>
                <p className="text-wood-500 leading-relaxed font-light">
                  {suiteFlowers[1].desc}
                </p>
              </div>
              <span className="creative-number shrink-0 order-1 md:order-2">{suiteFlowers[1].num}</span>
            </div>
            <div className="sep-line mt-8 max-w-sm ml-auto" />
          </div>

          {/* Flower room 3 - FIOCCO DI NEVE: slightly left with overlapping number */}
          <div className="fiori-room mb-16 md:mb-24 md:ml-[10vw] max-w-xl relative">
            <span
              className="absolute top-[-3rem] right-[-2rem] md:right-[-4rem] font-serif text-[8rem] md:text-[12rem] leading-none text-transparent pointer-events-none select-none"
              style={{ WebkitTextStroke: '1px var(--wood-200)' }}
            >
              07
            </span>
            <div className="relative z-10">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">
                Junior Suite
              </p>
              <h3 className="font-serif fluid-h3 text-wood-800 mb-2">
                {suiteFlowers[2].name}
              </h3>
              <p className="text-forest-600 text-sm italic mb-3">
                {suiteFlowers[2].subtitle}
              </p>
              <p className="text-wood-500 leading-relaxed font-light max-w-md">
                {suiteFlowers[2].desc}
              </p>
            </div>
            <div className="sep-line mt-8 max-w-xs" />
          </div>

          {/* Flower room 4 - GENZIANA: far right */}
          <div className="fiori-room md:ml-auto md:mr-[5vw] max-w-lg">
            <div className="flex items-start gap-5 flex-row-reverse md:flex-row">
              <div className="pt-4 md:text-right">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-2">
                  Junior Suite
                </p>
                <h3 className="font-serif fluid-h3 text-wood-800 mb-2">
                  {suiteFlowers[3].name}
                </h3>
                <p className="text-forest-600 text-sm italic mb-3">
                  {suiteFlowers[3].subtitle}
                </p>
                <p className="text-wood-500 leading-relaxed font-light">
                  {suiteFlowers[3].desc}
                </p>
              </div>
              <span className="creative-number shrink-0">{suiteFlowers[3].num}</span>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================
          SERVICES - Asymmetric, with offset items
          ============================================ */}
      <section className="services-section relative px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6">
          {/* Title - left side */}
          <div className="col-span-12 md:col-span-4 services-title">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">
              In tutte le camere
            </p>
            <h2 className="font-serif fluid-h3 text-wood-800 mb-6">
              Servizi e<br />comodita
            </h2>
            <p className="text-wood-500 font-light leading-relaxed mb-8 max-w-xs">
              Ogni camera offre il massimo comfort con servizi pensati
              per rendere il vostro soggiorno indimenticabile.
            </p>
            <div className="services-line sep-line max-w-[200px]" style={{ transformOrigin: 'left' }} />
          </div>

          {/* Services - right side, staggered vertically */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {services.map((svc, i) => {
                const offsets = ['md:mt-0', 'md:mt-16', 'md:mt-4', 'md:mt-20']
                const IconComponent = svc.icon
                return (
                  <div
                    key={i}
                    className={`service-item ${offsets[i]} py-6`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 flex items-center justify-center"
                        style={{ background: 'var(--wood-100)' }}
                      >
                        <IconComponent className="w-5 h-5 text-wood-600" />
                      </div>
                      <h3 className="font-serif text-lg text-wood-800">{svc.label}</h3>
                    </div>
                    <p className="text-wood-400 text-sm font-light ml-[52px]">{svc.detail}</p>
                    <div className="sep-line mt-6" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ============================================
          CTA - Full bleed parallax with broken text
          ============================================ */}
      <section className="cta-camere relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={masoImg}
            alt="Maso Lena inverno"
            className="cta-camere-bg w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 w-full cta-camere-text">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-6">
                Prenota il tuo soggiorno
              </p>
              <h2 className="font-serif fluid-h1 text-white mb-6">
                Scegli la tua<br />
                <span className="ml-[5vw] md:ml-[8vw]">suite preferita</span>
              </h2>
              <p className="text-white/50 max-w-md font-light leading-relaxed mb-10">
                Vivi un'esperienza indimenticabile nelle Dolomiti.
                Ogni camera racconta una storia diversa, tutte con vista
                mozzafiato sulla catena del Lagorai.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contatti" className="btn-creative">
                  <span>Richiedi disponibilita</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/prezzi"
                  className="btn-outline !border-white/30 !text-white/70 hover:!bg-white/10 hover:!border-white/50 hover:!text-white"
                >
                  <span>Vedi i prezzi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block col-span-4 col-start-9 text-right">
              <span
                className="font-serif text-[8rem] lg:text-[12rem] leading-none text-transparent"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
              >
                8
              </span>
              <p className="text-white/30 text-xs uppercase tracking-widest mt-2">
                Camere uniche
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
