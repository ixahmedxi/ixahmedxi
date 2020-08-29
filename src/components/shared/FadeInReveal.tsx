import { motion, useAnimation } from 'framer-motion'
import React, { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  children: ReactNode
  threshold?: number
}

export const FadeInReveal = ({ children, threshold }: Props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: threshold || 0 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={variants}
      initial='hidden'>
      {children}
    </motion.div>
  )
}
