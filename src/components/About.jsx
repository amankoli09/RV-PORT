import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiGitBranch, FiZap, FiCpu } from 'react-icons/fi'
import AmanPhoto from '../images/Aman.png'

const traits = [
  { icon: FiCode, title: 'Frontend Focused', desc: 'Building pixel-perfect, performant UIs with React and modern CSS.' },
  { icon: FiGitBranch, title: 'Open Source', desc: 'Active contributor — PRs, issues, docs, and community engagement.' },
  { icon: FiCpu, title: 'AI Enthusiast', desc: 'Exploring AI interfaces, LLM tooling, and next-gen developer experiences.' },
  { icon: FiZap, title: 'Startup Mindset', desc: 'Think in products, ship fast, iterate. Passion for impactful ideas.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.2), transparent)' }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="relative flex-shrink-0">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(120,90,200,0.12), rgba(232,145,122,0.08))', border: '1px solid rgba(120,90,200,0.12)' }} />
              <div className="absolute inset-3 rounded-xl overflow-hidden glass-card flex items-center justify-center">
                <img src={AmanPhoto} alt="Aman Koli" className="w-full h-full object-cover" />
              </div>
              <motion.div className="absolute -inset-4 rounded-3xl"
                style={{ border: '1px dashed rgba(120,90,200,0.12)' }}
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="absolute -top-2 left-1/2 w-2 h-2 rounded-full"
                style={{ background: '#7c5cbf', boxShadow: '0 0 8px rgba(120,90,200,0.5)', marginLeft: '-4px' }}
                animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl px-4 py-3">
              <span className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>Available for work</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#34d399' }} />
                <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>About Me</p>
              <h2 className="section-heading mb-4" style={{ color: 'var(--color-text)' }}>
                Passionate Developer<br />
                <span className="gradient-text">Building the </span>
                <span className="gradient-text inline-block origin-left transition-all duration-300 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: '1.35em', paddingLeft: '0.1em', verticalAlign: 'middle' }}>Future</span>
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>
                I'm a B.Tech CSE student who thrives at the intersection of clean code and beautiful design.
                I love crafting modern web applications, elegant UI experiences, and contributing to the open source ecosystem.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                My toolkit revolves around <span style={{ color: 'var(--color-primary)' }}>React, Vite, and Tailwind</span> on
                the frontend, with strong roots in <span style={{ color: 'var(--color-secondary)' }}>C++ and algorithms</span>.
                I'm drawn to AI interfaces, developer tooling, and startup ideas that push boundaries.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {traits.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-start gap-3 group hover:glow-box transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-highlight)' }}>
                    <item.icon size={15} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
