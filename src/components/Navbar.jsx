import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass border-b' : 'bg-transparent'
        }`}
        style={{ borderColor: scrolled ? 'rgba(120,90,200,0.06)' : 'transparent' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-baseline gap-1 group">
            <span className="font-extrabold tracking-wide text-xl transition-all duration-300 group-hover:opacity-80" style={{ fontFamily: 'var(--font-logo-sans)', color: 'var(--color-text)' }}>
              Aman
            </span>
            <span className="gradient-text text-3xl pl-0.5 select-none transition-all duration-300 group-hover:scale-105 inline-block origin-left" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400 }}>
              Koli
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 font-medium"
                style={{ color: active === link.href ? 'var(--color-primary)' : 'var(--color-muted)' }}
              >
                <span className="relative z-10 hover:text-purple-400 transition-colors">{link.label}</span>
                {active === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'var(--color-highlight)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:glow-button"
            style={{ background: 'linear-gradient(135deg, #7c5cbf, #9b72cf)', color: '#fff' }}
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 rounded-lg glass-card"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--color-primary)' }}
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 glass border-b"
            style={{ borderColor: 'rgba(120,90,200,0.06)' }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: 'var(--color-text)' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center"
                style={{ background: 'linear-gradient(135deg, #7c5cbf, #9b72cf)', color: '#fff' }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
