/* @jsx jsx */
import { motion, Variants } from 'framer-motion'
import { FiCodepen, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import { jsx, SxStyleProp } from 'theme-ui'

const links = [
  {
    url: 'https://github.com/ixahmedxi',
    Icon: FiGithub,
  },
  {
    url: 'https://codepen.io/ixahmedxi',
    Icon: FiCodepen,
  },
  {
    url: 'https://twitter.com/ixahmedxii',
    Icon: FiTwitter,
  },
  {
    url: 'https://instagram.com/ix.ahmed.xi',
    Icon: FiInstagram,
  },
]

const styles: SxStyleProp = {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  listWrapper: {
    listStyle: 'none',
    p: 0,
    m: 0,
    display: 'flex',
  },
  icon: { px: 3, color: 'inherit' },
}

const variants: { [key: string]: Variants } = {
  wrapper: {
    initial: {
      y: '100vh',
    },
    animate: {
      y: '0vh',
      transition: { delay: 0.5, ease: 'easeOut', duration: 1 },
    },
  },
}

export const SocialMediaLinks = () => {
  return (
    <motion.div
      sx={styles.wrapper}
      variants={variants.wrapper}
      initial='initial'
      animate='animate'>
      <ul sx={styles.listWrapper}>
        {links.map(Link => (
          <li key={Link.url}>
            <a
              href={Link.url}
              target='_blank'
              rel='noopener noreferrer'
              sx={styles.icon}>
              <Link.Icon size={25} />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
