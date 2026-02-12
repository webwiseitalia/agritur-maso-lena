import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import masoEstate from '../assets/foto/foto-6.webp'
import masoInverno from '../assets/foto/foto-8.webp'
import panorama from '../assets/foto/foto-7.webp'
import cavallo from '../assets/foto/foto-4.webp'
import slitta from '../assets/foto/foto-10.webp'
import famiglia from '../assets/foto/foto-1.webp'
import famigliaVitelli from '../assets/foto/foto-2.webp'
import montagna from '../assets/foto/foto-15.webp'

gsap.registerPlugin(ScrollTrigger)

export default function IlMaso() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {

      /* Hero */
      gsap.from('.maso-hero-label', { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' })
      gsap.from('.maso-hero-title', { y: 120, opacity: 0, duration: 1.5, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
      gsap.from('.maso-hero-sub', { y: 40, opacity: 0, duration: 1, delay: 1.1, ease: 'power3.out' })
      gsap.to('.maso-hero-bg', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.maso-hero', start: 'top top', end: 'bottom top', scrub: 1.5 } })

      /* Story */
      gsap.from('.story-img-left', { clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'power4.inOut', scrollTrigger: { trigger: '.story-section', start: 'top 70%' } })
      gsap.from('.story-img-right', { clipPath: 'inset(0 0 100% 0)', duration: 1.4, delay: 0.3, ease: 'power4.inOut', scrollTrigger: { trigger: '.story-section', start: 'top 70%' } })
      gsap.from('.story-text', { x: -60, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out', scrollTrigger: { trigger: '.story-section', start: 'top 65%' } })
      gsap.from('.story-line', { scaleX: 0, duration: 1.5, ease: 'power2.inOut', scrollTrigger: { trigger: '.story-section', start: 'top 55%' } })

      /* Panorama */
      gsap.from('.pano-number', { y: 80, opacity: 0, duration: 1.5, ease: 'power4.out', scrollTrigger: { trigger: '.pano-section', start: 'top 75%' } })
      gsap.from('.pano-text', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.pano-section', start: 'top 70%' } })
      gsap.from('.pano-img', { clipPath: 'inset(0 100% 0 0)', duration: 1.6, ease: 'power4.inOut', scrollTrigger: { trigger: '.pano-section', start: 'top 65%' } })
      gsap.from('.pano-img-small', { scale: 0.85, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out', scrollTrigger: { trigger: '.pano-section', start: 'top 55%' } })

      /* Experiences */
      gsap.from('.exp-heading', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.experiences-section', start: 'top 75%' } })
      gsap.from('.exp-card', { y: 70, opacity: 0, duration: 0.9, stagger: { each: 0.15, from: 'random' }, ease: 'power2.out', scrollTrigger: { trigger: '.experiences-section', start: 'top 65%' } })
      gsap.from('.exp-line', { scaleX: 0, duration: 1.5, ease: 'power2.inOut', scrollTrigger: { trigger: '.experiences-section', start: 'top 50%' } })

      /* Norici */
      gsap.from('.norici-img-main', { clipPath: 'inset(0 0 0 100%)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: '.norici-section', start: 'top 70%' } })
      gsap.from('.norici-img-secondary', { clipPath: 'inset(100% 0 0 0)', duration: 1.3, delay: 0.25, ease: 'power4.inOut', scrollTrigger: { trigger: '.norici-section', start: 'top 70%' } })
      gsap.from('.norici-text', { y: 60, opacity: 0, duration: 1.2, delay: 0.3, ease: 'power3.out', scrollTrigger: { trigger: '.norici-section', start: 'top 65%' } })

      /* Seasons */
      gsap.from('.season-summer', { x: -100, opacity: 0, duration: 1.3, ease: 'power3.out', scrollTrigger: { trigger: '.seasons-section', start: 'top 70%' } })
      gsap.from('.season-winter', { x: 100, opacity: 0, duration: 1.3, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.seasons-section', start: 'top 70%' } })
      gsap.from('.season-label', { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.seasons-section', start: 'top 60%' } })

      /* CTA */
      gsap.from('.cta-content', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.cta-section', start: 'top 75%' } })

      /* Parallax images */
      gsap.utils.toArray('.para-img').forEach((img) => {
        gsap.to(img, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 2 } })
      })

    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef}>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="maso-hero relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={masoEstate} alt="Maso Lena in estate" title="Maso Lena in estate" loading="eager" width={800} height={500} className="maso-hero-bg w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="maso-hero-label text-[0.65rem] uppercase tracking-[0.35em] text-white/50 mb-6">
              Predazzo · Val di Fiemme · 1.018 m s.l.m.
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="maso-hero-title font-serif fluid-display text-white">Il Maso</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="maso-hero-title font-serif fluid-display text-white ml-[5vw] md:ml-[15vw]">Lena</h1>
          </div>
          <div className="mt-10 md:mt-14 max-w-md md:ml-[15vw]">
            <p className="maso-hero-sub text-white/60 fluid-body-lg font-light leading-relaxed">
              L'emozione di un mondo autentico che sa interpretare lo spirito semplice
              e legato alle tradizioni della famiglia Dellagiacoma.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STORY — Broken grid ═══════════════════ */}
      <section className="story-section px-5 md:px-10 lg:px-16 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">

          {/* Left column: text + small overlapping image */}
          <div className="col-span-12 md:col-span-5 md:col-start-1 story-text">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">La famiglia</p>
            <h2 className="font-serif fluid-h1 text-wood-800 mb-6 leading-tight">I Della&shy;giacoma</h2>
            <p className="fluid-body-lg text-wood-500 font-light leading-relaxed mb-5">
              Il nuovo agritur Maso Lena, gestito dalla famiglia Dellagiacoma, offre ai suoi ospiti
              un ambiente accogliente e familiare dove il tempo sembra essersi fermato.
            </p>
            <p className="text-wood-500 leading-relaxed mb-8">
              L'anima rurale pervade ogni locale con pavimenti e arredamenti in legno massiccio
              e oggetti usati nell'arte contadina di un tempo. Una tradizione che si tramanda
              di generazione in generazione, con stile, confort e cibi genuini come ingredienti
              di un'atmosfera tranquilla e autentica.
            </p>
            <div className="story-line sep-line max-w-xs" style={{ transformOrigin: 'left' }} />
          </div>

          {/* Right column: large family image */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 story-img-left" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[4/5]">
              <img src={famiglia} alt="La famiglia Dellagiacoma" title="La famiglia Dellagiacoma" loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Overlapping secondary image — pulled up into the gap */}
          <div className="col-span-8 md:col-span-4 md:col-start-4 story-img-right mt-[-8vw] md:mt-[-14vw] relative z-10" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[3/2] shadow-2xl">
              <img src={famigliaVitelli} alt="Famiglia con le mucche al maso" title="Famiglia con le mucche al maso" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PANORAMA — Asymmetric with big number ═══════════════════ */}
      <section className="pano-section relative px-5 md:px-10 lg:px-16 py-24 md:py-36" style={{ background: 'var(--cream-200)' }}>
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">

          {/* Giant altitude number */}
          <div className="col-span-12 md:col-span-5 pano-number mb-8 md:mb-0">
            <span
              className="font-serif text-[5rem] md:text-[9rem] lg:text-[13rem] leading-none text-transparent block"
              style={{ WebkitTextStroke: '1.5px var(--wood-200)' }}
            >
              1018
            </span>
            <p className="text-wood-400 text-xs uppercase tracking-[0.25em] mt-2">metri sul livello del mare</p>
          </div>

          {/* Panorama image — wide, offset */}
          <div className="col-span-12 md:col-span-7 pano-img" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[16/9]">
              <img src={panorama} alt="Panorama della Val di Fiemme e catena del Lagorai" title="Panorama della Val di Fiemme e catena del Lagorai" loading="lazy" width={800} height={500} className="para-img w-full h-full object-cover" />
            </div>
          </div>

          {/* Text block — pushed left */}
          <div className="col-span-12 md:col-span-5 md:col-start-1 pano-text mt-12 md:mt-16">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">La posizione</p>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-5">Vista<br />panoramica</h2>
            <p className="text-wood-500 leading-relaxed mb-4 max-w-md">
              Adagiato in posizione panoramica sopra Predazzo, Maso Lena offre una vista
              spettacolare sulla catena del Lagorai e sulla Val di Fiemme sottostante.
            </p>
            <p className="text-wood-500 leading-relaxed max-w-md">
              A soli 30 minuti a piedi dal maso si trova una suggestiva cascata raggiungibile
              con un facile sentiero nel bosco, perfetto per una passeggiata rigenerante.
            </p>
          </div>

          {/* Small mountain window image — floating overlap */}
          <div className="col-span-7 md:col-span-3 md:col-start-8 pano-img-small mt-[-4vw] md:mt-[-8vw] relative z-10">
            <div className="img-hover-zoom aspect-[3/4] shadow-2xl">
              <img src={montagna} alt="Vista montagna dalla finestra" title="Vista montagna dalla finestra" loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ EXPERIENCES — Dark, numbered, staggered ═══════════════════ */}
      <section className="experiences-section relative py-24 md:py-40 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full opacity-[0.04]" style={{ background: 'var(--wood-400)', filter: 'blur(100px)', transform: 'translate(-30%, -30%)' }} />

        <div className="px-5 md:px-10 lg:px-16">
          {/* Heading — left-aligned */}
          <div className="exp-heading mb-16 md:mb-28">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">Incluse nel soggiorno</p>
            <h2 className="font-serif fluid-h1 text-cream-100 max-w-xl">Le esperienze<br />del maso</h2>
            <p className="text-cream-200/70 max-w-md mt-6 font-light leading-relaxed">
              I prezzi del soggiorno comprendono esperienze uniche per vivere la montagna
              e le tradizioni trentine nella loro forma più autentica.
            </p>
          </div>

          {/* Experience items — broken stagger grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-14 md:gap-y-0">
            {[
              { num: '01', title: 'Carrozza e slitta', desc: 'Giro con i cavalli Norici: in carrozza d\'estate, in slitta d\'inverno tra i paesaggi dolomitici', col: 'md:col-span-3' , offset: '' },
              { num: '02', title: 'Pranzo in malga', desc: 'Pranzo incluso a Malga Bocche a 1.946 m di altitudine con vista Pale di San Martino', col: 'md:col-span-3 md:col-start-4', offset: 'md:mt-20' },
              { num: '03', title: 'Merenda al maso', desc: 'Merenda pomeridiana con prodotti genuini del maso, dolci fatti in casa e sapori di montagna', col: 'md:col-span-3 md:col-start-7', offset: 'md:mt-8' },
              { num: '04', title: 'Fattoria didattica', desc: 'Lama, tacchini, cavalli, pony, mucche, asini: un\'esperienza educativa per grandi e piccini', col: 'md:col-span-3 md:col-start-10', offset: 'md:mt-28' },
            ].map((item) => (
              <div key={item.num} className={`exp-card col-span-1 ${item.col} ${item.offset}`}>
                <span className="creative-number-light block mb-3">{item.num}</span>
                <h3 className="font-serif text-xl text-cream-100 mb-2">{item.title}</h3>
                <p className="text-cream-200/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional experience — snowshoeing callout */}
          <div className="mt-20 md:mt-32 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-4 md:col-start-2 exp-card">
              <span className="creative-number-light block mb-3">05</span>
              <h3 className="font-serif text-xl text-cream-100 mb-2">Ciaspolate invernali</h3>
              <p className="text-cream-200/70 text-sm leading-relaxed">
                Ciaspolata guidata in compagnia attraverso i boschi innevati
                della Val di Fiemme. Un modo silenzioso e magico di vivere l'inverno.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="exp-line sep-line w-full" style={{ transformOrigin: 'right' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NORICI HORSES — Diagonal composition ═══════════════════ */}
      <section className="norici-section px-5 md:px-10 lg:px-16 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">

          {/* Main horse image — spanning wide */}
          <div className="col-span-12 md:col-span-7 md:col-start-1 norici-img-main" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[4/3]">
              <img src={cavallo} alt="Cavallo Norico con il fienile" title="Cavallo Norico con il fienile" loading="lazy" width={800} height={600} className="para-img w-full h-full object-cover" />
            </div>
          </div>

          {/* Text — right side, vertically offset upward */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 norici-text md:mt-[-6vh]">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Tradizione alpina</p>
            <h2 className="font-serif fluid-h2 text-wood-800 mb-5">I cavalli<br />Norici</h2>
            <p className="text-wood-500 leading-relaxed mb-4">
              I nostri splendidi cavalli di razza Norica sono i protagonisti delle esperienze
              più emozionanti del maso. Questa razza robusta, tipica dell'arco alpino,
              ha una tradizione secolare nel trasporto montano.
            </p>
            <p className="text-wood-500 leading-relaxed mb-8">
              In estate vi attende un romantico giro in carrozza tra i pascoli verdi,
              mentre in inverno la slitta trainata attraverso i paesaggi innevati
              vi regalerà momenti indimenticabili.
            </p>
            <Link to="/contatti" className="btn-outline">
              <span>Prenota l'esperienza</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Sleigh image — overlapping below, pulled left into the grid gap */}
          <div className="col-span-9 md:col-span-4 md:col-start-5 norici-img-secondary mt-[-6vw] md:mt-[-10vw] relative z-10" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="img-hover-zoom aspect-[16/10] shadow-2xl">
              <img src={slitta} alt="Slitta con cavalli Norici nella neve" title="Slitta con cavalli Norici nella neve" loading="lazy" width={800} height={500} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SEASONS — Two columns, asymmetric heights ═══════════════════ */}
      <section className="seasons-section relative py-24 md:py-36 overflow-hidden" style={{ background: 'var(--cream-200)' }}>
        <div className="px-5 md:px-10 lg:px-16">

          {/* Section label — far left */}
          <div className="mb-16 md:mb-24">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">365 giorni all'anno</p>
            <h2 className="font-serif fluid-h2 text-wood-800">Il maso nelle<br />stagioni</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

            {/* SUMMER — taller, left-aligned */}
            <div className="season-summer md:w-[55%]">
              <div className="img-hover-zoom aspect-[3/4] relative">
                <img src={masoEstate} alt="Maso Lena in estate" title="Maso Lena in estate" loading="lazy" width={600} height={800} className="para-img w-full h-full object-cover" />
                <div className="absolute top-0 left-0 p-6 md:p-10">
                  <span
                    className="font-serif text-[4rem] md:text-[6rem] leading-none text-transparent"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                  >
                    EST
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-8 max-w-sm">
                <h3 className="season-label font-serif fluid-h3 text-wood-800 mb-3">Estate</h3>
                <ul className="space-y-2">
                  {[
                    'Giro in carrozza con i cavalli Norici',
                    'Fattoria didattica con gli animali del maso',
                    'Escursione alla cascata nel bosco',
                    'Pranzo a Malga Bocche a 1.946 m',
                    'Merenda pomeridiana al maso',
                  ].map((item, i) => (
                    <li key={i} className="season-label text-wood-500 text-sm leading-relaxed flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-wood-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WINTER — shorter, offset downward */}
            <div className="season-winter md:w-[45%] md:mt-[12vh]">
              <div className="img-hover-zoom aspect-[4/5] relative">
                <img src={masoInverno} alt="Maso Lena in inverno" title="Maso Lena in inverno" loading="lazy" width={600} height={800} className="para-img w-full h-full object-cover" />
                <div className="absolute top-0 right-0 p-6 md:p-10">
                  <span
                    className="font-serif text-[4rem] md:text-[6rem] leading-none text-transparent"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                  >
                    INV
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-8 max-w-sm md:ml-auto">
                <h3 className="season-label font-serif fluid-h3 text-wood-800 mb-3">Inverno</h3>
                <ul className="space-y-2">
                  {[
                    'Slitta trainata dai cavalli Norici nella neve',
                    'Ciaspolata guidata nei boschi innevati',
                    'Piste da sci dello Ski Center Latemar',
                    'Atmosfera calda e accogliente del maso',
                    'Merenda con dolci fatti in casa',
                  ].map((item, i) => (
                    <li key={i} className="season-label text-wood-500 text-sm leading-relaxed flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-wood-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA — Full-bleed image, left-aligned ═══════════════════ */}
      <section className="cta-section relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={panorama} alt="Val di Fiemme panorama" title="Val di Fiemme panorama" loading="lazy" width={800} height={500} className="para-img w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 cta-content">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-6">Val di Fiemme · Dolomiti</p>
          <h2 className="font-serif fluid-h1 text-white max-w-2xl mb-4">Vivi l'esperienza<br />Maso Lena</h2>
          <p className="text-white/50 max-w-md mb-10 font-light leading-relaxed">
            Prenota il tuo soggiorno e scopri la magia delle Dolomiti
            con la famiglia Dellagiacoma.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contatti" className="btn-creative !bg-white !text-wood-900 hover:!text-wood-900">
              <span>Prenota ora</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/le-camere" className="btn-outline !border-white/30 !text-white/70 hover:!bg-white/10 hover:!border-white/50 hover:!text-white">
              <span>Scopri le camere</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
