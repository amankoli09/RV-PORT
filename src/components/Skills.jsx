import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiCplusplus, SiGit, SiGithub, SiVite, SiFramer } from 'react-icons/si'
import { FiCode } from 'react-icons/fi'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#7c5cbf' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#e8917a' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, color: '#9b72cf' },
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#e8917a' },
      { name: 'CSS3', icon: FiCode, level: 90, color: '#7c5cbf' },
      { name: 'Vite', icon: SiVite, level: 82, color: '#9b72cf' },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'C++', icon: SiCplusplus, level: 85, color: '#7c5cbf' },
      { name: 'Framer Motion', icon: SiFramer, level: 78, color: '#e8917a' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 88, color: '#e8917a' },
      { name: 'GitHub', icon: SiGithub, level: 90, color: '#2d2640' },
      { name: 'VS Code', icon: FiCode, level: 95, color: '#7c5cbf' },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, color, inView, delay }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay }} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}10` }}>
            <Icon size={14} style={{ color }} />
          </div>
          <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{name}</span>
        </div>
        <span className="text-xs font-mono" style={{ color: 'var(--color-muted)' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(120,90,200,0.06)' }}>
        <motion.div className="h-full rounded-full"
          initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }} />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 relative" style={{ background: 'var(--color-surface)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.2), transparent)' }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>Technical Skills</p>
          <h2 className="section-heading" style={{ color: 'var(--color-text)' }}>
            My Tech <span className="gradient-text inline-block origin-left transition-all duration-300 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: '1.35em', paddingLeft: '0.15em', verticalAlign: 'middle' }}>Stack</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            A curated set of tools I use to build elegant, performant, and beautiful web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-box transition-all duration-300">
              <h3 className="text-xs font-bold tracking-widest uppercase mb-5 pb-3"
                style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(120,90,200,0.08)' }}>{group.category}</h3>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => <SkillBar key={skill.name} {...skill} inView={inView} delay={gi * 0.1 + si * 0.08} />)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4">
          {skillGroups.flatMap(g => g.skills).map(({ name, icon: Icon, color }) => (
            <motion.div key={name} whileHover={{ scale: 1.1, y: -4 }}
              className="glass-card rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-default transition-all duration-200 hover:glow-box">
              <Icon size={16} style={{ color }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text)' }}>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
