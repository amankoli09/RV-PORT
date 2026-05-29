import { motion } from 'framer-motion'
import { FiCode, FiGitBranch, FiStar, FiZap, FiCpu, FiAward } from 'react-icons/fi'

const timeline = [
  { year: '2021', title: 'The Beginning', desc: 'Wrote my first line of code in C. Discovered competitive programming and fell in love with problem-solving.', icon: FiCode, accentColor: '#7c5cbf', milestone: 'First Program' },
  { year: '2022', title: 'Web Development Begins', desc: 'Explored HTML, CSS, and JavaScript. Built my first static websites and realized the power of the browser.', icon: FiZap, accentColor: '#e8917a', milestone: 'Web Fundamentals' },
  { year: '2022', title: 'C++ & DSA Deep Dive', desc: 'Committed to C++ and Data Structures. Solved 200+ competitive programming problems on LeetCode and Codeforces.', icon: FiCpu, accentColor: '#34d399', milestone: '200+ Problems' },
  { year: '2023', title: 'React & Modern Frontend', desc: 'Discovered React and the component-based architecture. Built multiple projects and learned the modern frontend ecosystem.', icon: FiStar, accentColor: '#9b72cf', milestone: 'React Mastery' },
  { year: '2023', title: 'Open Source Journey', desc: 'Submitted first open source pull request. Discovered the incredible world of collaborative development and community.', icon: FiGitBranch, accentColor: '#e8917a', milestone: 'First PR Merged' },
  { year: '2024', title: 'UI/UX & Design Systems', desc: 'Deep-dived into design principles, glassmorphism, motion design, and building premium user interfaces.', icon: FiZap, accentColor: '#7c5cbf', milestone: 'Design Focused' },
  { year: '2025', title: 'AI & Startup Exploration', desc: 'Exploring AI interfaces, LLM tooling, and building product ideas. Focused on the intersection of AI and modern UX.', icon: FiAward, accentColor: '#9b72cf', milestone: 'AI Enthusiast' },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.2), transparent)' }} />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>Timeline</p>
          <h2 className="section-heading" style={{ color: 'var(--color-text)' }}>
            My Coding <span className="gradient-text inline-block origin-left transition-all duration-300 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: '1.35em', paddingLeft: '0.15em', verticalAlign: 'middle' }}>Journey</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            From writing "Hello World" to building production-ready applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(120,90,200,0.3), rgba(120,90,200,0.04))' }} />
          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 30 }} 
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, margin: '-10% 0px -15% 0px' }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-card rounded-2xl p-5 hover:glow-box transition-all duration-300 group">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${item.accentColor}10`, color: item.accentColor }}>{item.year}</span>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(120,90,200,0.04)', color: 'var(--color-muted)' }}>{item.milestone}</span>
                      </div>
                      <h3 className="font-bold text-base mb-1.5 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `${item.accentColor}12`, border: `2px solid ${item.accentColor}40`, boxShadow: `0 0 10px ${item.accentColor}20` }}>
                    <item.icon size={10} style={{ color: item.accentColor }} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
