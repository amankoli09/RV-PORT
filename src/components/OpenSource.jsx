import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGitPullRequest, FiStar, FiGitBranch, FiUsers, FiCode, FiPackage } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'

const stats = [
  { icon: FiGitPullRequest, label: 'Pull Requests', value: '30+', color: '#7c5cbf' },
  { icon: FiStar, label: 'Stars Earned', value: '120+', color: '#e8917a' },
  { icon: FiGitBranch, label: 'Repos', value: '50+', color: '#34d399' },
  { icon: FiUsers, label: 'Collaborations', value: '15+', color: '#9b72cf' },
]

const contributions = [
  { project: 'UI Component Library', type: 'Feature', desc: 'Added animated modal and drawer components with accessibility support.', language: 'TypeScript', icon: FiPackage },
  { project: 'Developer Tools CLI', type: 'Bug Fix', desc: 'Fixed async handling bug causing intermittent build failures on Windows.', language: 'JavaScript', icon: FiCode },
  { project: 'React Hooks Collection', type: 'Docs', desc: 'Improved documentation for useDebounce and useLocalStorage hooks.', language: 'Markdown', icon: FiGitBranch },
  { project: 'CSS Animation Toolkit', type: 'Enhancement', desc: 'Contributed glassmorphism utility classes and gradient presets.', language: 'CSS', icon: FiPackage },
]

const typeColors = {
  Feature: { bg: 'rgba(120,90,200,0.08)', text: '#7c5cbf' },
  'Bug Fix': { bg: 'rgba(232,145,122,0.08)', text: '#e8917a' },
  Docs: { bg: 'rgba(52,211,153,0.08)', text: '#34d399' },
  Enhancement: { bg: 'rgba(155,114,207,0.08)', text: '#9b72cf' },
}

export default function OpenSource() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="opensource" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.2), transparent)' }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>Community</p>
          <h2 className="section-heading" style={{ color: 'var(--color-text)' }}>
            Open Source <span className="gradient-text inline-block origin-left transition-all duration-300 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: '1.35em', paddingLeft: '0.15em', verticalAlign: 'middle' }}>Contributions</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            I believe in building in public and giving back to the community that shaped my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 flex flex-col items-center gap-2 hover:glow-box transition-all duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}10` }}>
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <span className="font-bold text-2xl" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-xs text-center" style={{ color: 'var(--color-muted)' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <SiGithub size={18} style={{ color: 'var(--color-text)' }} />
              <span className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>GitHub Activity</span>
            </div>
            <a href="https://github.com/amankoli09" target="_blank" rel="noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ color: 'var(--color-primary)', background: 'var(--color-highlight)' }}>View Profile →</a>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, day) => {
                    const intensity = Math.random()
                    const opacity = intensity < 0.4 ? 0.05 : intensity < 0.65 ? 0.2 : intensity < 0.85 ? 0.45 : 0.75
                    return <div key={day} className="w-3 h-3 rounded-sm" style={{ background: `rgba(120,90,200,${opacity})` }} />
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Less</span>
            {[0.05, 0.2, 0.45, 0.75].map(o => <div key={o} className="w-3 h-3 rounded-sm" style={{ background: `rgba(120,90,200,${o})` }} />)}
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>More</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contributions.map((item, i) => (
            <motion.div key={item.project}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass-card rounded-2xl p-5 hover:glow-box transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-highlight)' }}>
                    <item.icon size={15} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{item.project}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: typeColors[item.type]?.bg, color: typeColors[item.type]?.text }}>{item.type}</span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>{item.desc}</p>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(120,90,200,0.05)', color: 'var(--color-muted)' }}>{item.language}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
