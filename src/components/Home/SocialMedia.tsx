/* @jsx jsx */
import { motion } from 'framer-motion'
import { FiCodepen, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import { jsx } from 'theme-ui'

export const SocialMedia = () => {
  return (
    <motion.div
      sx={{ display: 'flex', justifyContent: 'flex-end' }}
      animate={{ y: '0vh' }}
      initial={{ y: '100vh' }}
      transition={{ delay: 0.5, ease: 'easeOut', duration: 1 }}>
      <ul sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex' }}>
        <li>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ px: 3, color: 'inherit' }}>
            <FiGithub size={25} />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ px: 3, color: 'inherit' }}>
            <FiCodepen size={25} />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ px: 3, color: 'inherit' }}>
            <FiTwitter size={25} />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ px: 3, color: 'inherit' }}>
            <FiInstagram size={25} />
          </a>
        </li>
      </ul>
    </motion.div>
  )
}
