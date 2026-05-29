import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend, FiArrowRight } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, label: 'GitHub', handle: '@amankoli', href: 'https://github.com/amankoli09', color: '#2d2640', desc: 'Check out my code' },
  { icon: FiLinkedin, label: 'LinkedIn', handle: 'Aman Koli', href: 'https://www.linkedin.com/in/aman-koli-773510331/', color: '#7c5cbf', desc: 'Connect professionally' },
  { icon: FiInstagram, label: 'Instagram', handle: '@amankoli', href: 'https://instagram.com/amankoli', color: '#e8917a', desc: 'Behind the scenes' },
  { icon: FiMail, label: 'Email', handle: 'amankoli1206@gmail.com', href: 'mailto:amankoli1206@gmail.com', color: '#34d399', desc: 'Direct message' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const inputStyle = { background: 'rgba(120,90,200,0.03)', border: '1px solid rgba(120,90,200,0.08)', color: 'var(--color-text)' }
  const focusHandler = (e) => { e.target.style.borderColor = 'rgba(120,90,200,0.25)'; e.target.style.boxShadow = '0 0 0 3px rgba(120,90,200,0.06)' }
  const blurHandler = (e) => { e.target.style.borderColor = 'rgba(120,90,200,0.08)'; e.target.style.boxShadow = 'none' }

  return (
    <section id="contact" className="py-24 relative" style={{ background: 'var(--color-surface)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(120,90,200,0.2), transparent)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(120,90,200,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>Let's Talk</p>
          <h2 className="section-heading" style={{ color: 'var(--color-text)' }}>
            Get In <span className="gradient-text inline-block origin-left transition-all duration-300 hover:scale-105 select-none" style={{ fontFamily: 'var(--font-logo-script)', fontWeight: 400, fontSize: '1.35em', paddingLeft: '0.15em', verticalAlign: 'middle' }}>Touch</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            Have a project in mind? Want to collaborate on open source? Or just want to say hi?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text)' }}>Find me on</h3>
            {socials.map((social, i) => (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noreferrer"
                initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }} whileHover={{ x: 4 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:glow-box transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${social.color}08` }}>
                  <social.icon size={20} style={{ color: social.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{social.label}</p>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{social.handle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs hidden sm:block" style={{ color: 'var(--color-muted)' }}>{social.desc}</span>
                  <FiArrowRight size={14} style={{ color: 'var(--color-muted)' }} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-text)' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--color-muted)' }}>Your Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required
                  placeholder="Aman Koli" className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--color-muted)' }}>Email Address</label>
                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required
                  placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--color-muted)' }}>Message</label>
                <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required
                  rows={4} placeholder="Hey Aman, let's build something great..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ background: sent ? 'rgba(52,211,153,0.1)' : 'linear-gradient(135deg, #7c5cbf, #9b72cf)', color: sent ? '#34d399' : '#fff', border: sent ? '1px solid rgba(52,211,153,0.2)' : 'none' }}>
                {sent ? 'Message sent!' : <><FiSend size={14} />Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
