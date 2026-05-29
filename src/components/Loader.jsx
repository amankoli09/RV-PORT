import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 1.5
      })
    }, 30)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-xl glass-card flex items-center justify-center glow-box">
            <span className="gradient-text font-bold text-2xl font-display">AK</span>
          </div>
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{ border: '1px solid rgba(120,90,200,0.3)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-4 w-64">
          <div className="w-full h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(120,90,200,0.08)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #7c5cbf, #e8917a)' }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="text-sm font-mono"
            style={{ color: 'var(--color-muted)' }}
          >
            {progress < 100 ? 'Initializing...' : 'Ready'}
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-8 flex gap-1 items-end">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full"
            style={{ background: 'rgba(120,90,200,0.3)' }}
            animate={{ height: ['8px', '20px', '8px'] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12 }}
          />
        ))}
      </div>
    </motion.div>
  )
}
