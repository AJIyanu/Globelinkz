'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  'Your Data...',
  'Our Insight...',
  'Your Advantage...',
  'GLOBELINKZ!',
]
const normalDuration = 6000
const lastWordDuration = normalDuration * 2

export default function TextWipeAnimation() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const duration =
      index === words.length - 1 ? lastWordDuration : normalDuration
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className="flex justify-start items-center text-[#FF8D00] text-4xl font-bold overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          className={`relative ${index === words.length - 1 ? 'font-bold text-green-700 italic text-5xl' : ''}`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          exit={{ width: 0 }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
          style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
