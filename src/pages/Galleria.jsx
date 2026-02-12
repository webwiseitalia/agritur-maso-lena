import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto18 from '../assets/foto/foto-18.webp'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  { src: foto6, alt: 'Maso Lena in estate', category: 'il-maso', span: 'col-span-2 row-span-2' },
  { src: foto8, alt: 'Maso Lena in inverno', category: 'il-maso', span: 'col-span-1 row-span-1' },
  { src: foto7, alt: 'Panorama Val di Fiemme', category: 'panorami', span: 'col-span-1 row-span-2' },
  { src: foto15, alt: 'Vista montagne dalla camera', category: 'panorami', span: 'col-span-1 row-span-1' },
  { src: foto9, alt: 'Camera con arredamento tipico', category: 'camere', span: 'col-span-1 row-span-1' },
  { src: foto5, alt: 'Sala ristorante', category: 'ristorante', span: 'col-span-2 row-span-1' },
  { src: foto3, alt: 'Tavolo ristorante', category: 'ristorante', span: 'col-span-1 row-span-1' },
  { src: foto11, alt: 'Dettaglio ristorante', category: 'ristorante', span: 'col-span-1 row-span-1' },
  { src: foto13, alt: 'Canederli', category: 'piatti', span: 'col-span-1 row-span-1' },
  { src: foto12, alt: 'Gulasch con polenta', category: 'piatti', span: 'col-span-1 row-span-2' },
  { src: foto14, alt: 'Speck grigliato', category: 'piatti', span: 'col-span-1 row-span-1' },
  { src: foto17, alt: 'Carne salada con fagioli', category: 'piatti', span: 'col-span-1 row-span-1' },
  { src: foto16, alt: 'Strudel con panna', category: 'piatti', span: 'col-span-2 row-span-1' },
  { src: foto18, alt: 'Strudel di mele', category: 'piatti', span: 'col-span-1 row-span-1' },
  { src: foto4, alt: 'Cavallo Norico', category: 'animali', span: 'col-span-1 row-span-2' },
  { src: foto10, alt: 'Slitta con cavallo', category: 'esperienze', span: 'col-span-2 row-span-1' },
  { src: foto1, alt: 'Famiglia Dellagiacoma', category: 'famiglia', span: 'col-span-1 row-span-1' },
  { src: foto2, alt: 'Con i nostri animali', category: 'famiglia', span: 'col-span-1 row-span-1' },
]

const categories = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'il-maso', label: 'Il Maso' },
  { id: 'panorami', label: 'Panorami' },
  { id: 'camere', label: 'Camere' },
  { id: 'ristorante', label: 'Ristorante' },
  { id: 'piatti', label: 'Piatti' },
  { id: 'animali', label: 'Animali' },
  { id: 'esperienze', label: 'Esperienze' },
  { id: 'famiglia', label: 'Famiglia' },
]

export default function Galleria() {
  const mainRef = useRef(null)
  const gridRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('tutti')
  const [lightbox, setLightbox] = useState(null)

  const filteredPhotos = activeCategory === 'tutti'
    ? photos
    : photos.filter(p => p.category === activeCategory)

  const openLightbox = useCallback((index) => setLightbox(index), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevPhoto = useCallback(() => setLightbox((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1)), [filteredPhotos.length])
  const nextPhoto = useCallback(() => setLightbox((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0)), [filteredPhotos.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, closeLightbox, prevPhoto, nextPhoto])

  // GSAP hero and initial stagger
  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.gallery-hero-line', { y: 100, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  // GSAP stagger on grid items whenever filter changes
  useEffect(() => {
    if (!gridRef.current) return
    const items = gridRef.current.querySelectorAll('.gallery-item')
    gsap.fromTo(items,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: { each: 0.06, from: 'random' }, ease: 'power2.out' }
    )
  }, [activeCategory])

  return (
    <div ref={mainRef}>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full opacity-[0.04]" style={{ background: 'var(--wood-300)', filter: 'blur(100px)', transform: 'translate(20%, -30%)' }} />
        <div className="px-5 md:px-10 lg:px-16 relative z-10">
          <div className="overflow-hidden">
            <p className="gallery-hero-line text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-6">18 fotografie</p>
          </div>
          <div className="overflow-hidden">
            <h1 className="gallery-hero-line font-serif fluid-display text-cream-100">Galleria</h1>
          </div>
          <div className="overflow-hidden">
            <p className="gallery-hero-line text-cream-200/70 max-w-md fluid-body-lg font-light mt-8">
              Immagini dal maso, dalla malga e dalle esperienze che vi aspettano.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-[72px] z-40 border-b" style={{ background: 'var(--cream-50)', borderColor: 'var(--wood-100)' }}>
        <div className="px-5 md:px-10 lg:px-16 py-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="transition-all duration-300"
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  background: activeCategory === cat.id ? 'var(--wood-800)' : 'transparent',
                  color: activeCategory === cat.id ? 'var(--cream-50)' : 'var(--wood-500)',
                  border: activeCategory === cat.id ? 'none' : '1px solid var(--wood-200)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY-LIKE GRID */}
      <section className="px-5 md:px-10 lg:px-16 py-12 md:py-20">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[280px] gap-3 md:gap-4"
        >
          {filteredPhotos.map((photo, i) => {
            // For "tutti" view, use defined spans; for filtered view, use alternating sizes
            const spanClass = activeCategory === 'tutti'
              ? photo.span
              : (i === 0 || i === 5 ? 'col-span-2 row-span-2' : i === 2 || i === 9 ? 'col-span-1 row-span-2' : 'col-span-1 row-span-1')

            return (
              <button
                key={`${photo.alt}-${i}`}
                onClick={() => openLightbox(i)}
                className={`gallery-item img-hover-zoom relative group cursor-pointer ${spanClass}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                  <div className="p-4 md:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm font-light">{photo.alt}</p>
                    <p className="text-white/40 text-[0.6rem] uppercase tracking-[0.2em] mt-1">{photo.category.replace('-', ' ')}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 p-2"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto() }}
            className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto() }}
            className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <img
            src={filteredPhotos[lightbox].src}
            alt={filteredPhotos[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center px-4">
            <p className="text-white/70 text-sm font-light">{filteredPhotos[lightbox].alt}</p>
            <p className="text-white/30 text-xs mt-1">{lightbox + 1} / {filteredPhotos.length}</p>
          </div>
        </div>
      )}
    </div>
  )
}
