import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MapPin, Clock, Send, Instagram, ArrowUpRight } from 'lucide-react'
import masoImg from '../assets/foto/foto-6.webp'

gsap.registerPlugin(ScrollTrigger)

const rooms = [
  { value: '', label: 'Seleziona camera...' },
  { value: 'carador', label: 'Suite del Carador' },
  { value: 'bacan', label: 'Suite del Bacan' },
  { value: 'pastor', label: 'Suite del Pastor' },
  { value: 'boscher', label: 'Suite del Boscher' },
  { value: 'negritella', label: 'Junior Suite Negritella' },
  { value: 'stella-alpina', label: 'Junior Suite Stella Alpina' },
  { value: 'fiocco-neve', label: 'Junior Suite Fiocco di Neve' },
  { value: 'genziana', label: 'Junior Suite Genziana' },
  { value: 'nessuna', label: 'Nessuna preferenza' },
]

export default function Contatti() {
  const mainRef = useRef(null)
  const [formData, setFormData] = useState({
    nome: '', email: '', telefono: '', checkin: '', checkout: '',
    ospiti: '', camera: '', messaggio: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Richiesta preventivo - Agritur Maso Lena')
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefono: ${formData.telefono}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nOspiti: ${formData.ospiti}\nCamera preferita: ${formData.camera}\n\nMessaggio:\n${formData.messaggio}`
    )
    window.location.href = `mailto:info@masolena.it?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  useEffect(() => {
    if (!mainRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.contatti-hero-line', { y: 100, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
      gsap.to('.contatti-hero-img', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.contatti-hero', start: 'top top', end: 'bottom top', scrub: 1.5 } })

      gsap.from('.contact-info-block', { x: -60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.contatti-main', start: 'top 70%' } })
      gsap.from('.contact-form-block', { x: 60, opacity: 0, duration: 1.1, delay: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.contatti-main', start: 'top 70%' } })

      gsap.from('.map-contact-reveal', { clipPath: 'inset(0 100% 0 0)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: '.map-contact-section', start: 'top 75%' } })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  const inputClasses = 'w-full border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-0'
  const inputStyle = { borderColor: 'var(--wood-200)', background: 'transparent', color: 'var(--wood-800)' }
  const inputFocusStyle = 'focus:border-wood-500'

  return (
    <div ref={mainRef}>
      {/* HERO */}
      <section className="contatti-hero relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={masoImg} alt="Maso Lena" className="contatti-hero-img w-full h-[130%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full">
          <div className="overflow-hidden">
            <p className="contatti-hero-line text-[0.65rem] uppercase tracking-[0.3em] text-white/50 mb-6">Scrivici o chiamaci</p>
          </div>
          <div className="overflow-hidden">
            <h1 className="contatti-hero-line font-serif fluid-display text-white">Contatti</h1>
          </div>
          <div className="overflow-hidden mt-8">
            <p className="contatti-hero-line text-white/50 max-w-md fluid-body-lg font-light">
              Siamo a disposizione per rispondere alle vostre domande e preparare un preventivo personalizzato.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN: CONTACT INFO + FORM — asymmetric split */}
      <section className="contatti-main px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* LEFT: Contact info — narrower */}
          <div className="contact-info-block col-span-12 md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">Informazioni</p>
            <h2 className="font-serif fluid-h3 text-wood-800 mb-8">Maso Lena</h2>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--wood-400)' }} />
                <div>
                  <p className="text-wood-800 font-medium text-sm mb-1">Indirizzo</p>
                  <p className="text-wood-500 text-sm font-light leading-relaxed">
                    Localit&agrave; L&ouml;ze, Via Salita alla Cascata 3<br />
                    38037 Predazzo (TN)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--wood-400)' }} />
                <div>
                  <p className="text-wood-800 font-medium text-sm mb-1">Telefono</p>
                  <a href="tel:+393407128301" className="text-wood-500 text-sm font-light hover:text-wood-800 transition-colors">
                    +39 340 712 8301 (Katia)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--wood-400)' }} />
                <div>
                  <p className="text-wood-800 font-medium text-sm mb-1">Email</p>
                  <a href="mailto:info@masolena.it" className="text-wood-500 text-sm font-light hover:text-wood-800 transition-colors">
                    info@masolena.it
                  </a>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="sep-line my-8" style={{ transform: 'scaleX(1)' }} />

            {/* Malga Bocche */}
            <div>
              <h3 className="font-serif text-lg text-wood-800 mb-4">Malga Bocche</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" style={{ color: 'var(--wood-400)' }} />
                  <a href="tel:+393355946308" className="text-wood-500 text-sm font-light hover:text-wood-800 transition-colors">
                    +39 335 594 6308
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4" style={{ color: 'var(--wood-400)' }} />
                  <span className="text-wood-500 text-sm font-light">20 giugno &mdash; 20 settembre</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="sep-line my-8" style={{ transform: 'scaleX(1)' }} />

            {/* Social */}
            <div>
              <h3 className="font-serif text-lg text-wood-800 mb-4">Seguici</h3>
              <a
                href="https://www.instagram.com/maso_lena/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-wood-500 hover:text-wood-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-light">@maso_lena</span>
              </a>
            </div>

            {/* CIN */}
            <div className="mt-10 pt-6 border-t" style={{ borderColor: 'var(--wood-200)' }}>
              <p className="text-wood-400 text-xs">CIN: IT022147B5RUTK7NS2</p>
            </div>
          </div>

          {/* RIGHT: Form — wider, offset */}
          <div className="contact-form-block col-span-12 md:col-span-7 md:col-start-6 md:mt-[-2vh]">
            <div className="p-8 md:p-10 lg:p-12" style={{ background: 'var(--cream-100)' }}>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-4">Preventivo personalizzato</p>
              <h2 className="font-serif fluid-h3 text-wood-800 mb-2">Richiedi informazioni</h2>
              <p className="text-wood-500 text-sm font-light mb-10">
                Compila il modulo e ti risponderemo il prima possibile.
              </p>

              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--forest-50)' }}>
                    <Send className="w-7 h-7" style={{ color: 'var(--forest-600)' }} />
                  </div>
                  <h3 className="font-serif text-xl text-wood-800 mb-3">Grazie per la richiesta!</h3>
                  <p className="text-wood-500 text-sm font-light max-w-sm mx-auto mb-8">
                    Si aprir&agrave; il tuo programma email con il messaggio precompilato.
                    Ti risponderemo il prima possibile.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    <span>Invia un'altra richiesta</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Nome e Cognome *</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Il tuo nome"
                        className={`${inputClasses} ${inputFocusStyle}`}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="La tua email"
                        className={`${inputClasses} ${inputFocusStyle}`}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Telefono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Il tuo numero di telefono"
                      className={`${inputClasses} ${inputFocusStyle}`}
                      style={inputStyle}
                    />
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Check-in</label>
                      <input
                        type="date"
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                        className={`${inputClasses} ${inputFocusStyle}`}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Check-out</label>
                      <input
                        type="date"
                        name="checkout"
                        value={formData.checkout}
                        onChange={handleChange}
                        className={`${inputClasses} ${inputFocusStyle}`}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Guests + Room */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Numero ospiti</label>
                      <input
                        type="number"
                        name="ospiti"
                        min="1"
                        value={formData.ospiti}
                        onChange={handleChange}
                        placeholder="Quanti siete?"
                        className={`${inputClasses} ${inputFocusStyle}`}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Camera preferita</label>
                      <select
                        name="camera"
                        value={formData.camera}
                        onChange={handleChange}
                        className={`${inputClasses} ${inputFocusStyle}`}
                        style={inputStyle}
                      >
                        {rooms.map((room) => (
                          <option key={room.value} value={room.value}>{room.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-wood-400 mb-2">Messaggio</label>
                    <textarea
                      name="messaggio"
                      rows={5}
                      value={formData.messaggio}
                      onChange={handleChange}
                      placeholder="Richieste speciali, domande o informazioni aggiuntive..."
                      className={`${inputClasses} ${inputFocusStyle} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-creative w-full justify-center mt-4">
                    <span>Invia richiesta</span><Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-contact-section relative">
        <div className="px-5 md:px-10 lg:px-16 pb-0">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-wood-400 mb-6">Dove siamo</p>
        </div>
        <div className="map-contact-reveal w-full h-[400px] md:h-[500px]" style={{ clipPath: 'inset(0 0 0 0)' }}>
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

      {/* CTA BOTTOM */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--wood-800)' }}>
        <div className="px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-300/60 mb-4">Preferisci chiamare?</p>
              <h2 className="font-serif fluid-h2 text-cream-100 mb-2">Parla con Katia</h2>
              <p className="text-cream-200/70 font-light max-w-md">
                Chiamaci direttamente per verificare la disponibilit&agrave;
                o per qualsiasi informazione.
              </p>
            </div>
            <a href="tel:+393407128301" className="btn-creative !bg-white !text-wood-900 hover:!text-wood-900">
              <Phone className="w-4 h-4" /><span>+39 340 712 8301</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
