import { motion } from 'framer-motion'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'

export const HamburgerIcon = () => {
  return (
    <motion.div
      animate={{ y: '0vh' }}
      initial={{ y: '-100vh' }}
      transition={{ ease: 'easeOut', duration: 1 }}>
      <FiMenu size={35} />
    </motion.div>
  )
}
