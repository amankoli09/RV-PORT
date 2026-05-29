import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com/amankoli09', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aman-koli-773510331/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/amankoli', label: 'Instagram' },
  { icon: FiMail, href: 'mailto:amankoli1206@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 mt-8">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.15), transparent)' }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#hero" className="flex flex-col items-start gap-0.5 group">
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold tracking-wide text-xl transition-all duration-300 group-hover:opacity-80" style={{ fontFamily: 'var(--font-logo-sans)', color: 'var(--color-text)' }}>
                Aman
              </span>
              <span className="gradient-text text-3xl pl-0.5 select-none transition-all duration-300 group-hover:scale-105 inline-block origin-left" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400 }}>
                Koli
              </span>
            </div>
            <p className="text-xs tracking-wider uppercase font-medium pl-0.5" style={{ color: 'var(--color-muted)', fontSize: '0.65rem' }}>Frontend Developer</p>
          </a>
          <div className="flex items-center gap-5">
            {links.map(link => (
              <a key={link.label} href={link.href} className="text-xs font-medium transition-colors hover:text-purple-400"
                style={{ color: 'var(--color-muted)' }}>{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center transition-all duration-200 hover:glow-box hover:scale-110"
                style={{ color: 'var(--color-muted)' }}><Icon size={14} /></a>
            ))}
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(120,90,200,0.06)' }}>
          <p className="text-xs" style={{ color: 'var(--color-muted)' }}>&copy; 2026 Aman Koli. All rights reserved.</p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--color-muted)' }}>
            Built with
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="inline-flex">
              <FiHeart size={11} style={{ color: '#e8917a' }} />
            </motion.span>
            using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
