/* @jsx jsx */
import { motion } from 'framer-motion'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { jsx } from 'theme-ui'

export const MainContent = () => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <div>
        <div sx={{ height: '27px', overflow: 'hidden' }}>
          <motion.div
            sx={{ display: 'flex', alignItems: 'center' }}
            initial={{ y: 96 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}>
            <p>Hey!</p>{' '}
            <div sx={{ width: '300px', height: '2px', bg: 'text', ml: 3 }} />
          </motion.div>
        </div>
        <div sx={{ height: '96px', overflow: 'hidden' }}>
          <motion.h1
            sx={{ fontSize: 8, fontWeight: 700 }}
            initial={{ y: 96 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.7, duration: 0.5, ease: 'easeOut' }}>
            I&#39;m Ahmed Elsakaan
          </motion.h1>
        </div>
        <div sx={{ height: '54px', overflow: 'hidden' }}>
          <motion.h3
            sx={{ strong: { fontWeight: 600 } }}
            initial={{ y: 96 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.9, duration: 0.5, ease: 'easeOut' }}>
            I am a <strong>full stack web developer</strong>. I like creating{' '}
            <strong>accessible</strong>, <strong>highly performant</strong> and{' '}
            <strong>fully responsive websites</strong>. <br />I am a{' '}
            <strong>BSc Computer Science</strong> student at{' '}
            <strong>Royal Holloway University of London</strong>.
          </motion.h3>
        </div>
        <div sx={{ height: '27px', overflow: 'hidden', mt: 3 }}>
          <motion.h5
            initial={{ y: 96 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.1, duration: 0.5, ease: 'easeOut' }}
            sx={{
              fontWeight: 600,
              a: { color: 'inherit', fontWeight: 400 },
            }}>
            Read my latest blog post:{' '}
            <a
              href='https://github.com/ixahmedxi'
              target='_blank'
              rel='noopener noreferrer'>
              A 5 minute introduction to theme-ui
            </a>
          </motion.h5>
        </div>
        <motion.a
          initial={{ x: '-100vw' }}
          animate={{ x: '0vh' }}
          transition={{ delay: 2.3, duration: 0.5 }}
          href='#projects'
          sx={{
            display: 'inline-block',
            bg: 'primary',
            color: 'background',
            p: '20px 50px',
            borderRadius: '500px',
            textDecoration: 'none',
            mt: 5,
            textTransform: 'uppercase',
            boxShadow: '0px 10px 30px rgba(96, 70, 241, 0.5)',
            transition: '0.2s ease-out',
            svg: {
              ml: 2,
              transition: 'margin-left 0.2s ease-out',
            },
            '&:hover': {
              svg: {
                ml: 4,
              },
            },
          }}>
          <span sx={{ display: 'flex', alignItems: 'center', fontSize: 0 }}>
            view my work <FaLongArrowAltRight size={25} sx={{ mt: '-3.5px' }} />
          </span>
        </motion.a>
      </div>
    </div>
  )
}
