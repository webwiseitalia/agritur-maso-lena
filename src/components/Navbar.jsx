import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import logo from '../assets/logo.webp'

const navLinks = [
  { name: 'Il Maso', path: '/il-maso' },
  { name: 'Camere', path: '/le-camere' },
  { name: 'Ristorante', path: '/ristorante' },
  { name: 'Prezzi', path: '/prezzi' },
  { name: 'Malga Bocche', path: '/malga-bocche' },
  { name: 'Galleria', path: '/galleria' },
  { name: 'Contatti', path: '/contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className={`absolute inset-0 transition-all duration-700 ${
          scrolled ? 'bg-cream-50/90 backdrop-blur-xl' : 'bg-transparent'
        }`} />

        <div className="relative z-10 flex items-center justify-between px-5 md:px-10 lg:px-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Maso Lena" className="h-11 w-auto transition-transform duration-500 group-hover:rotate-[-4deg]" />
            <div className="hidden md:block">
              <span className={`font-serif text-lg tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-wood-800' : 'text-white'
              }`}>Maso Lena</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[0.7rem] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                  scrolled ? 'text-wood-700 hover:text-wood-900' : 'text-white/80 hover:text-white'
                } ${location.pathname === link.path ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-current' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+393407128301"
              className={`ml-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                scrolled ? 'text-wood-600' : 'text-white/70'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">340 712 8301</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-end justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className={`block h-[1.5px] origin-center transition-colors duration-300 ${
                scrolled || isOpen ? 'bg-wood-800' : 'bg-white'
              }`}
              style={{ width: '100%' }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5, width: '100%' } : { rotate: 0, y: 0, width: '60%' }}
              className={`block h-[1.5px] origin-center transition-colors duration-300 ${
                scrolled || isOpen ? 'bg-wood-800' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream-100 flex flex-col justify-center px-10"
          >
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className={`block font-serif text-[2rem] py-2 transition-colors ${
                      location.pathname === link.path ? 'text-wood-800' : 'text-wood-500 hover:text-wood-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-wood-200"
            >
              <a href="tel:+393407128301" className="text-wood-500 text-sm tracking-wide">
                +39 340 712 8301
              </a>
              <p className="text-wood-400 text-xs mt-2 tracking-wide">info@masolena.it</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
