import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COOKIE_KEY } from '../constants/siteData'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const handleConsent = (value) => {
    localStorage.setItem(COOKIE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Blur overlay — hidden on policy pages */}
      {!isPolicyPage && (
        <div className="fixed inset-0 z-[998] backdrop-blur-sm bg-black/30" />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] px-4 pb-4 md:px-8 md:pb-8">
        <div className="max-w-2xl mx-auto border border-white/10 shadow-2xl p-6 md:p-8" style={{ background: 'var(--wood-900)' }}>
          <p className="text-white/90 text-sm leading-relaxed mb-2">
            Questo sito utilizza solo <strong className="text-white">cookie tecnici</strong> necessari al funzionamento.
          </p>
          <p className="text-white/50 text-xs leading-relaxed mb-6">
            Non utilizziamo cookie di profilazione o tracciamento.
            Per maggiori informazioni consulta la nostra{' '}
            <Link to="/privacy-policy" className="text-white/70 underline hover:text-white transition-colors">Privacy Policy</Link>
            {' '}e la{' '}
            <Link to="/cookie-policy" className="text-white/70 underline hover:text-white transition-colors">Cookie Policy</Link>.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => handleConsent('accepted')}
              className="flex-1 py-2.5 text-xs uppercase tracking-widest font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Accetta
            </button>
            <button
              onClick={() => handleConsent('rejected')}
              className="flex-1 py-2.5 text-xs uppercase tracking-widest font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
