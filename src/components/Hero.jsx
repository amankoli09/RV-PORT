import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowDown } from 'react-icons/fi'
import { useEffect, useState } from 'react'


const roles = [
  'Frontend Developer',
  'React Developer',
  'Open Source Contributor',
  'C++ Programmer',
  'UI/UX Enthusiast',
  'AI & Startup Enthusiast',
  'Creative Problem Solver',
]

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="gradient-text font-semibold">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-5 ml-0.5 align-middle"
        style={{ background: 'var(--color-primary)', borderRadius: '1px' }}
      />
    </span>
  )
}

const socials = [
  { icon: FiGithub, href: 'https://github.com/amankoli09', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aman-koli-773510331/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/amankoli', label: 'Instagram' },
  { icon: FiMail, href: 'mailto:amankoli1206@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(120,90,200,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,145,122,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium"
          style={{ color: 'var(--color-primary)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#34d399' }} />
          Open Source Contributor · B.Tech CSE Student
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <p className="text-base font-medium" style={{ color: 'var(--color-muted)' }}>Hi, I'm</p>
          <h1
            className="font-black tracking-tight glow-text flex items-center justify-center flex-wrap gap-x-1"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: 'var(--color-text)', lineHeight: 1.05 }}
          >
            <span style={{ fontFamily: 'var(--font-logo-sans)' }}>Aman</span>{' '}
            <span className="gradient-text-name inline-block origin-left transition-all duration-500 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: 'clamp(4rem, 10vw, 7.5rem)', paddingLeft: '0.15em', paddingRight: '0.15em', verticalAlign: 'middle' }}>
              Koli
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl h-8 flex items-center"
          style={{ color: 'var(--color-muted)' }}
        >
          <TypewriterRole />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-base leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          Crafting elegant web experiences, contributing to open source,
          and building products at the intersection of{' '}
          <span style={{ color: 'var(--color-primary)' }}>AI & modern UI</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 justify-center"
        >
          <a href="#projects" className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:glow-button hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7c5cbf, #9b72cf)', color: '#fff' }}>View Projects</a>
          <a href="#contact" className="px-7 py-3 rounded-xl font-semibold text-sm glass-card transition-all duration-200 hover:glow-box hover:scale-105"
            style={{ color: 'var(--color-primary)' }}>Get In Touch</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-200 hover:glow-box hover:scale-110"
              style={{ color: 'var(--color-muted)' }}>
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mt-4 w-full max-w-sm"
        >
          {[{ value: '50+', label: 'GitHub Repos' }, { value: '10+', label: 'Projects Built' }, { value: '5+', label: 'OSS Contributions' }].map(stat => (
            <div key={stat.label} className="glass-card rounded-xl p-3 flex flex-col items-center gap-0.5">
              <span className="gradient-text font-bold text-lg">{stat.value}</span>
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2" style={{ color: 'var(--color-muted)' }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
