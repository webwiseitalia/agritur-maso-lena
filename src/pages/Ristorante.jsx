import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Phone } from 'lucide-react'
import ristoranteImg from '../assets/foto/foto-5.webp'
import ristoranteDettaglio from '../assets/foto/foto-11.webp'
import salaImg from '../assets/foto/foto-3.webp'
import gulash from '../assets/foto/foto-12.webp'
import canederli from '../assets/foto/foto-13.webp'
import speck from '../assets/foto/foto-14.webp'
import strudel from '../assets/foto/foto-16.webp'
import carneSalada from '../assets/foto/foto-17.webp'
import strudelMele from '../assets/foto/foto-18.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Ristorante() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      /* ---- Hero ---- */
      gsap.from('.rist-hero-line', {
        y: 120, opacity: 0, duration: 1.4, stagger: 0.15,
        ease: 'power4.out', delay: 0.3,
      })
      gsap.from('.rist-hero-sub', {
        y: 40, opacity: 0, duration: 1, delay: 1, ease: 'power3.out',
      })
      gsap.to('.rist-hero-bg', {
        yPercent: 25, ease: 'none',
        scrollTrigger: { trigger: '.rist-hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
      })

      /* ---- Intro text ---- */
      gsap.from('.rist-intro-text', {
        y: 80, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.rist-intro', start: 'top 75%' },
      })
      gsap.from('.rist-intro-line', {
        scaleX: 0, duration: 1.5, ease: 'power2.inOut',
        scrollTrigger: { trigger: '.rist-intro', start: 'top 70%' },
      })

      /* ---- Broken grid philosophy ---- */
      gsap.from('.philo-img-main', {
        clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.philo-section', start: 'top 70%' },
      })
      gsap.from('.philo-img-float', {
        clipPath: 'inset(0 0 100% 0)', duration: 1.4, delay: 0.3, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.philo-section', start: 'top 70%' },
      })
      gsap.from('.philo-text', {
        x: 80, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out',
        scrollTrigger: { trigger: '.philo-section', start: 'top 65%' },
      })

      /* ---- Menu stagger ---- */
      gsap.from('.menu-heading', {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.menu-section', start: 'top 75%' },
      })
      gsap.from('.menu-item', {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.menu-section', start: 'top 65%' },
      })
      gsap.from('.menu-sep', {
        scaleX: 0, duration: 1.2, stagger: 0.08, ease: 'power2.inOut',
        scrollTrigger: { trigger: '.menu-section', start: 'top 65%' },
      })

      /* ---- Dishes asymmetric ---- */
      gsap.from('.dish-left', {
        x: -100, opacity: 0, duration: 1.3, ease: 'power3.out',
        scrollTrigger: { trigger: '.dishes-section', start: 'top 70%' },
      })
      gsap.from('.dish-right', {
        x: 100, opacity: 0, duration: 1.3, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.dishes-section', start: 'top 70%' },
      })
      gsap.from('.dish-center', {
        y: 80, opacity: 0, duration: 1.1, delay: 0.4, ease: 'power3.out',
        scrollTrigger: { trigger: '.dishes-section', start: 'top 60%' },
      })

      /* ---- Wine numbers ---- */
      gsap.from('.wine-number', {
        y: 80, opacity: 0, duration: 1.5, ease: 'power4.out',
        scrollTrigger: { trigger: '.wine-section', start: 'top 75%' },
      })
      gsap.from('.wine-text', {
        x: -60, opacity: 0, duration: 1.2, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: '.wine-section', start: 'top 70%' },
      })
      gsap.from('.wine-img', {
        clipPath: 'inset(0 100% 0 0)', duration: 1.4, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.wine-section', start: 'top 65%' },
      })

      /* ---- Sala reveal ---- */
      gsap.from('.sala-img', {
        scale: 1.2, opacity: 0, duration: 1.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.sala-section', start: 'top 70%' },
      })
      gsap.from('.sala-detail', {
        y: 50, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.sala-section', start: 'top 60%' },
      })

      /* ---- CTA ---- */
      gsap.from('.cta-rist-text', {
        y: 60, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-rist', start: 'top 75%' },
      })

      /* ---- Parallax images ---- */
      gsap.utils.toArray('.para-img-rist').forEach((img) => {
        gsap.to(img, {
          yPercent: -15, ease: 'none',
          scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 2 },
        })
      })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>

      {/* ========== HERO — full-bleed, bottom-aligned text ========== */}
      <section className="rist-hero relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ristoranteImg}
            alt="Sala ristorante Maso Lena"
            className="rist-hero-bg w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="rist-hero-line text-[0.65rem] uppercase tracking-[0.35em] text-white/50 mb-6">
              Sapori autentici · Cucina trentina
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="rist-hero-line font-serif fluid-display text-white max-w-[80vw]">
              Il Ristorante
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="rist-hero-line font-serif fluid-display text-white max-w-[80vw] ml-[5vw] md:ml-[12vw]">
              del Maso
            </h1>
          </div>
          <div className="mt-10 md:mt-14">
            <p className="rist-hero-sub text-white/60 max-w-md fluid-body-lg font-light leading-relaxed">
              Piatti della cucina tipica trentina, rigorosamente fatti in casa con materie prime
              di produzione propria e da produttori locali.
            </p>
          </div>
        </div>
      </section>

      {/* ========== INTRO — asymmetric text block ========== */}
      <section className="rist-intro px-5 md:px-10 lg:px-16 py-24 md:py-40">
        <div className="max-w-6xl ml-auto mr-0 md:mr-[8vw]">
          <div className="rist-intro-text">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-8">
              La nostra cucina
            </p>
            <h2 className="font-serif fluid-h1 text-wood-800 max-w-4xl leading-tight mb-8">
              La cucina tipica<br className="hidden md:block" /> del passato
            </h2>
            <p className="fluid-body-lg text-wood-500 max-w-xl leading-relaxed font-light">
              Un discorso a parte merita la ristorazione, curata personalmente dai proprietari,
              che propone piatti della cucina tipica rigorosamente realizzati in casa con materie
              prime di produzione propria e in parte provenienti da produttori locali.
            </p>
          </div>
          <div
            className="rist-intro-line sep-line mt-16 max-w-sm"
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </section>

      {/* ========== PHILOSOPHY — broken 12-col grid ========== */}
      <section className="philo-section relative px-5 md:px-10 lg:px-16 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
          {/* Large image */}
          <div
            className="col-span-12 md:col-span-7 philo-img-main"
            style={{ clipPath: 'inset(0 0 0 0)' }}
          >
            <div className="img-hover-zoom aspect-[4/3] md:aspect-[16/10]">
              <img
                src={ristoranteDettaglio}
                alt="Dettaglio ristorante"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text block — offset right */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 philo-text md:mt-[-8vh]">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">
              Filosofia
            </p>
            <h3 className="font-serif fluid-h3 text-wood-800 mb-4">
              Genuino e<br />fatto in casa
            </h3>
            <p className="text-wood-500 leading-relaxed mb-4">
              Ogni piatto e preparato con cura e dedizione, seguendo le ricette tradizionali
              trentine tramandate di generazione in generazione nella famiglia Dellagiacoma.
            </p>
            <p className="text-wood-500 leading-relaxed">
              Le materie prime sono rigorosamente di produzione propria o selezionate da
              produttori locali di fiducia. Nulla e industriale, tutto e autentico.
            </p>
          </div>

          {/* Floating overlapping image */}
          <div
            className="col-span-8 md:col-span-4 md:col-start-5 philo-img-float mt-[-10vw] md:mt-[-12vw] relative z-10"
            style={{ clipPath: 'inset(0 0 0 0)' }}
          >
            <div className="img-hover-zoom aspect-[3/4] shadow-2xl">
              <img
                src={salaImg}
                alt="Tavolo ristorante dettaglio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== MENU — dark bg, asymmetric two-column list ========== */}
      <section
        className="menu-section relative py-24 md:py-40 overflow-hidden"
        style={{ background: 'var(--wood-800)' }}
      >
        <div className="absolute top-0 left-0 w-[35vw] h-[35vw] rounded-full opacity-5"
          style={{ background: 'var(--wood-400)', filter: 'blur(100px)', transform: 'translate(-20%, -20%)' }}
        />
        <div className="px-5 md:px-10 lg:px-16">
          {/* Heading row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24 menu-heading">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">
                Specialita
              </p>
              <h2 className="font-serif fluid-h2 text-cream-100">
                Il nostro<br />menu
              </h2>
            </div>
            <p className="text-cream-300/60 max-w-xs text-sm font-light leading-relaxed md:text-right">
              Il menu varia con le stagioni per offrire sempre il meglio
              che la montagna e la tradizione possono regalare.
            </p>
          </div>

          {/* Two uneven columns */}
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-0">
            {/* Left column — Antipasti + Primi */}
            <div className="col-span-12 md:col-span-5">
              <div className="menu-item mb-2">
                <span className="creative-number-light block">01</span>
                <h3 className="font-serif text-xl text-cream-100 mt-2 mb-3">Antipasti</h3>
              </div>
              {[
                'Tagliere misto di salumi e formaggi locali',
                'Speck con mostarda fatta in casa',
                'Carne salada con fagioli e polenta',
                'Antipasti misti della tradizione',
              ].map((item, i) => (
                <div key={i}>
                  <div className="menu-item flex items-baseline justify-between py-3">
                    <span className="text-cream-200/80 text-sm font-light">{item}</span>
                  </div>
                  <div className="menu-sep sep-line" style={{ transformOrigin: 'left', background: 'var(--wood-600)' }} />
                </div>
              ))}

              <div className="menu-item mt-14 mb-2">
                <span className="creative-number-light block">02</span>
                <h3 className="font-serif text-xl text-cream-100 mt-2 mb-3">Primi piatti</h3>
              </div>
              {[
                'Canederli in brodo o al burro e salvia',
                'Tagliatelle ai finferli',
                'Zuppa d\'orzo alla trentina',
                'Strangolapreti con burro fuso',
              ].map((item, i) => (
                <div key={i}>
                  <div className="menu-item flex items-baseline justify-between py-3">
                    <span className="text-cream-200/80 text-sm font-light">{item}</span>
                  </div>
                  <div className="menu-sep sep-line" style={{ transformOrigin: 'left', background: 'var(--wood-600)' }} />
                </div>
              ))}
            </div>

            {/* Right column — Secondi + Dolci, pushed down */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:mt-24">
              <div className="menu-item mb-2 mt-14 md:mt-0">
                <span className="creative-number-light block">03</span>
                <h3 className="font-serif text-xl text-cream-100 mt-2 mb-3">Secondi piatti</h3>
              </div>
              {[
                'Costata alla griglia',
                'Gulasch con polenta di mais',
                'Selvaggina di stagione',
                'Piatti della tradizione contadina',
              ].map((item, i) => (
                <div key={i}>
                  <div className="menu-item flex items-baseline justify-between py-3">
                    <span className="text-cream-200/80 text-sm font-light">{item}</span>
                  </div>
                  <div className="menu-sep sep-line" style={{ transformOrigin: 'left', background: 'var(--wood-600)' }} />
                </div>
              ))}

              <div className="menu-item mt-14 mb-2">
                <span className="creative-number-light block">04</span>
                <h3 className="font-serif text-xl text-cream-100 mt-2 mb-3">Dolci</h3>
              </div>
              {[
                'Strudel di mele fatto in casa',
                'Tiramisu artigianale',
                'Gelato di produzione propria',
                'Crostata con marmellate del maso',
              ].map((item, i) => (
                <div key={i}>
                  <div className="menu-item flex items-baseline justify-between py-3">
                    <span className="text-cream-200/80 text-sm font-light">{item}</span>
                  </div>
                  <div className="menu-sep sep-line" style={{ transformOrigin: 'left', background: 'var(--wood-600)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DISHES — asymmetric image mosaic, NO card grid ========== */}
      <section className="dishes-section px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 items-stretch">
          {/* Left tall image */}
          <div className="dish-left md:w-[50%]">
            <div className="img-hover-zoom aspect-[3/4] md:aspect-[3/4] relative">
              <img
                src={canederli}
                alt="Canederli trentini"
                className="para-img-rist w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mb-2">
                  Primo piatto
                </p>
                <h3 className="font-serif fluid-h3 text-white mb-2">Canederli</h3>
                <p className="text-white/50 text-sm max-w-sm">
                  I tradizionali canederli trentini in brodo o al burro fuso con salvia
                </p>
              </div>
            </div>
          </div>

          {/* Right column: two stacked images, offset */}
          <div className="dish-right md:w-[50%] md:mt-[12vh] flex flex-col gap-6">
            <div className="img-hover-zoom aspect-[16/10] relative">
              <img
                src={gulash}
                alt="Gulasch con polenta"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <h3 className="font-serif text-lg text-white">Gulasch con polenta</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                  Piatto di montagna
                </p>
              </div>
            </div>
            <div className="img-hover-zoom aspect-[16/10] relative">
              <img
                src={speck}
                alt="Speck alla griglia con insalata"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <h3 className="font-serif text-lg text-white">Speck alla griglia</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                  Con insalata fresca
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center wide image breaking the rhythm */}
        <div className="dish-center mt-8 md:mt-[-6vw] mx-auto md:w-[70%] relative z-10">
          <div className="img-hover-zoom aspect-[21/9] shadow-2xl">
            <img
              src={carneSalada}
              alt="Carne salada con fagioli"
              className="para-img-rist w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl text-wood-800">Carne salada</h3>
              <p className="text-wood-400 text-xs uppercase tracking-widest mt-1">
                Con fagioli e polenta · Tradizione trentina
              </p>
            </div>
            <Link to="/contatti" className="btn-outline">
              <span>Prenota un tavolo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WINE + PRICE — split section with giant number ========== */}
      <section
        className="wine-section relative px-5 md:px-10 lg:px-16 py-24 md:py-40"
        style={{ background: 'var(--cream-200)' }}
      >
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left: number + text */}
          <div className="col-span-12 md:col-span-5">
            <div className="wine-number">
              <span
                className="font-serif text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none text-transparent"
                style={{ WebkitTextStroke: '1.5px var(--wood-200)' }}
              >
                ~45
              </span>
              <p className="text-wood-400 text-xs uppercase tracking-[0.25em] mt-2">
                euro a persona con vino
              </p>
            </div>
            <div className="wine-text mt-8">
              <h2 className="font-serif fluid-h3 text-wood-800 mb-4">
                Vini del Trentino
              </h2>
              <p className="text-wood-500 leading-relaxed font-light mb-4 max-w-sm">
                La nostra cantina propone una selezione curata di vini trentini,
                vino della casa e grappa locale per accompagnare ogni portata
                con il sapore autentico della nostra terra.
              </p>
              <p className="text-wood-500 leading-relaxed font-light mb-6 max-w-sm">
                Il ristorante e aperto anche ai clienti esterni.
                Prenotazione richiesta.
              </p>
              <a href="tel:+393407128301" className="btn-creative">
                <span>Chiama per prenotare</span>
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: tall image, clipped reveal */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div
              className="wine-img img-hover-zoom aspect-[3/4]"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            >
              <img
                src={strudel}
                alt="Strudel con panna"
                className="para-img-rist w-full h-full object-cover"
              />
            </div>
            <p className="text-wood-400 text-xs uppercase tracking-widest mt-4">
              Strudel con panna montata · Fatto in casa
            </p>
          </div>
        </div>
      </section>

      {/* ========== SALA — full-width image + floating detail cards ========== */}
      <section className="sala-section relative px-5 md:px-10 lg:px-16 py-24 md:py-36 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">
              L'ambiente
            </p>
            <h2 className="font-serif fluid-h2 text-wood-800">
              La nostra<br />sala
            </h2>
          </div>
          <p className="text-wood-500 max-w-sm text-sm font-light leading-relaxed md:text-right">
            La sala ristorante accoglie gli ospiti in un ambiente caldo e autentico,
            con arredamenti in legno massiccio e dettagli curati che richiamano
            la tradizione contadina trentina.
          </p>
        </div>

        {/* Wide image */}
        <div className="sala-img img-hover-zoom aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <img
            src={ristoranteImg}
            alt="Sala ristorante panoramica"
            className="para-img-rist w-full h-full object-cover"
          />
        </div>

        {/* Floating detail row — not a grid, just flex with asymmetric spacing */}
        <div className="mt-12 md:mt-[-4vw] relative z-10 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-around">
          <div className="sala-detail md:w-56 md:ml-[5vw]">
            <span className="creative-number block text-[3rem] md:text-[4rem]">01</span>
            <h4 className="font-serif text-lg text-wood-800 mt-1">Ospiti esterni</h4>
            <p className="text-wood-500 text-sm leading-relaxed mt-2">
              Il ristorante e aperto anche ai clienti non alloggiati. Prenotazione richiesta.
            </p>
          </div>
          <div className="sala-detail md:w-56 md:mt-[6vh]">
            <span className="creative-number block text-[3rem] md:text-[4rem]">02</span>
            <h4 className="font-serif text-lg text-wood-800 mt-1">Produzione propria</h4>
            <p className="text-wood-500 text-sm leading-relaxed mt-2">
              Materie prime di produzione propria e selezionate da produttori locali di fiducia.
            </p>
          </div>
          <div className="sala-detail md:w-56 md:mt-[2vh]">
            <span className="creative-number block text-[3rem] md:text-[4rem]">03</span>
            <h4 className="font-serif text-lg text-wood-800 mt-1">Vini trentini</h4>
            <p className="text-wood-500 text-sm leading-relaxed mt-2">
              Selezione di vini del Trentino, vino della casa e grappa locale.
            </p>
          </div>
        </div>
      </section>

      {/* ========== DESSERTS — horizontal scroll strip ========== */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ background: 'var(--cream-200)' }}
      >
        <div className="px-5 md:px-10 lg:px-16 mb-12">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">
            Per concludere
          </p>
          <h2 className="font-serif fluid-h2 text-wood-800">I dolci</h2>
        </div>
        <div
          className="flex gap-4 md:gap-6 px-5 md:px-10 lg:px-16 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {[
            { img: strudel, title: 'Strudel', sub: 'Con panna montata' },
            { img: strudelMele, title: 'Strudel di mele', sub: 'Ricetta della tradizione' },
            { img: salaImg, title: 'Tiramisu', sub: 'Artigianale del maso' },
          ].map((item, i) => (
            <div key={i} className={`shrink-0 ${i === 0 ? 'w-[70vw] md:w-[40vw]' : 'w-[55vw] md:w-[28vw]'}`}>
              <div className="img-hover-zoom aspect-[4/5]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg text-wood-800">{item.title}</h3>
                <p className="text-wood-400 text-xs uppercase tracking-widest mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA — dark, full-bleed with parallax ========== */}
      <section className="cta-rist relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ristoranteDettaglio}
            alt="Ristorante Maso Lena"
            className="para-img-rist w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 cta-rist-text">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-6">
            Prenotazione richiesta
          </p>
          <h2 className="font-serif fluid-h1 text-white max-w-2xl mb-4">
            Prenota il<br />tuo tavolo
          </h2>
          <p className="text-white/50 max-w-md fluid-body-lg font-light leading-relaxed mb-10">
            Vieni a gustare i sapori autentici della cucina trentina.
            Il ristorante e aperto anche ai clienti esterni.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:+393407128301" className="btn-creative !bg-white !text-wood-900 hover:!text-wood-900">
              <span>+39 340 7128301</span>
              <Phone className="w-4 h-4" />
            </a>
            <a href="mailto:info@masolena.it" className="btn-outline !border-white/30 !text-white/70 hover:!bg-white/10 hover:!border-white/50 hover:!text-white">
              <span>info@masolena.it</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
