import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import { SiReact, SiJavascript, SiTailwindcss, SiCplusplus, SiFramer, SiVite } from 'react-icons/si'

// Import project images so they get bundled by Vite during deployment
import bawImg from '../images/BAW.webp'
import elImg from '../images/El.png'
import secureVerseImg from '../images/SecureVerse.png'
import portfolioImg from '../images/Portfolio.png'
import blenderImg from '../images/blender.webp'

const techIcons = { React: SiReact, JavaScript: SiJavascript, Tailwind: SiTailwindcss, 'C++': SiCplusplus, 'Framer Motion': SiFramer, Vite: SiVite }

const projects = [
  { title: 'Business Analytical Website', desc: 'A comprehensive business analytics dashboard with real-time data visualization, interactive charts, KPI metrics, and advanced filtering capabilities.', tags: ['React', 'Tailwind', 'Analytics', 'Dashboard'], category: 'Frontend', featured: true, accentColor: '#3b82f6', image: bawImg, github: 'https://tableau-website.vercel.app/' },
  { title: 'AI Speaking Assistant EL', desc: 'A futuristic voice-interface concept with animated orb, waveform visualization, and AI response display.', tags: ['React', 'Framer Motion', 'JavaScript', 'Tailwind'], category: 'AI', featured: true, accentColor: '#7c5cbf', image: elImg, github: 'https://github.com/amankoli09/AI-Speaking-Assistant' },
  { title: 'SecureVerse Concept', desc: 'A cybersecurity dashboard concept with real-time threat monitoring, glassmorphism UI, and animated data flows.', tags: ['React', 'Tailwind', 'JavaScript'], category: 'Security', featured: true, accentColor: '#34d399', image: secureVerseImg },
  { title: 'Modern Dashboard UI', desc: 'A sleek analytics dashboard with dark theme, animated charts, metric cards, and a collapsible sidebar.', tags: ['React', 'Tailwind', 'Vite', 'JavaScript'], category: 'Frontend', featured: false, accentColor: '#e8917a', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Portfolio Website', desc: 'This very portfolio — built with React, Vite, Tailwind, and Framer Motion. Fully responsive premium design.', tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'], category: 'Frontend', featured: false, accentColor: '#9b72cf', image: portfolioImg, github: 'https://amankoliportfolio-zeta-one-20.vercel.app/' },
  { title: 'Blender 3D Projects', desc: 'A collection of professional 3D renders and animations: character modeling, product visualization, architectural renders, and motion graphics.', tags: ['Blender', '3D Modeling', 'Rendering', 'Animation'], category: '3D', featured: false, accentColor: '#f97316', image: blenderImg, github: 'https://github.com/amankoli09/Blender' },
]

const categories = ['All', 'AI', 'Frontend', 'Security', 'Programming', '3D']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative" style={{ background: 'var(--color-surface)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.2), transparent)' }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-black tracking-tight" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Featured <span className="gradient-text inline-block origin-left transition-all duration-300 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: '1.15em', paddingLeft: '0.15em', verticalAlign: 'middle' }}>Projects</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            A selection of projects that represent my skills, creativity, and passion for building great products.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{ background: activeFilter === cat ? 'var(--color-highlight)' : 'rgba(120,90,200,0.03)', color: activeFilter === cat ? 'var(--color-primary)' : 'var(--color-muted)', border: `1px solid ${activeFilter === cat ? 'rgba(120,90,200,0.15)' : 'rgba(120,90,200,0.05)'}` }}
            >{cat}</button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div key={project.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }} layout whileHover={{ y: -6 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glow-box transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(250,248,245,0.9))' }} />
                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${project.accentColor}15`, color: project.accentColor, border: `1px solid ${project.accentColor}30` }}>Featured</span>
                )}
                <span className="absolute bottom-3 left-3 text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: 'rgba(250,248,245,0.7)', color: 'var(--color-muted)' }}>{project.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--color-text)' }}>{project.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => {
                    const Icon = techIcons[tag]
                    return <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(120,90,200,0.05)', color: 'var(--color-muted)' }}>
                      {Icon && <Icon size={10} />}{tag}</span>
                  })}
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.github || 'https://github.com/amankoli09'} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
                    <FiGithub size={13} />Code</a>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--color-primary)' }}>
                    <FiExternalLink size={13} />Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          className="flex justify-center mt-10">
          <a href="https://github.com/amankoli09" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl glass-card text-sm font-medium transition-all duration-200 hover:glow-box"
            style={{ color: 'var(--color-primary)' }}>View All on GitHub <FiArrowRight size={14} /></a>
        </motion.div>
      </div>
    </section>
  )
}
