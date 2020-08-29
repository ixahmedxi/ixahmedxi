import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { FaCodepen, FaGithub } from 'react-icons/fa'
import { FiArrowRight, FiCode } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import './Projects.scss'
import { Title } from './shared/Title'

const projects = [
  {
    title: 'lop.si',
    description:
      'A url shortener made to turn long urls into short alternatives that look good anywhere used.',
    website: 'https://lop.si',
    source: 'https://github.com/ixahmedxi/lop.si',
    builtWith: ['Next.js', 'theme-ui', 'Firebase'],
  },
  {
    title: 'next-boilerpack',
    description:
      'A TypeScript based next.js boilerplate made to provide a quick yet features full start to new Next.js projects.',
    website: 'https://next-boilerpack.vercel.app',
    source: 'https://github.com/ixahmedxi/next-boilerpack',
    builtWith: ['TypeScript', 'Next.js', 'theme-ui'],
  },
  {
    title: 'Big sur control center',
    description:
      "A fully interactive demo of MacOS Big Sur's control center in ReactJS to showcase the new design ui.",
    website: 'https://codepen.io/ixahmedxi/full/zYrdBKx',
    source: 'https://codepen.io/ixahmedxi/pen/zYrdBKx',
    builtWith: ['React', 'Sass', 'react-rangeslider'],
  },
  {
    title: 'Music Player UI',
    description:
      'An implementation of a music player UI design freebie found on dribbble into a web project with some interactivity.',
    website: 'https://codepen.io/ixahmedxi/full/RKbdyJ',
    source: 'https://codepen.io/ixahmedxi/pen/RKbdyJ',
    builtWith: ['HTML', 'CSS', 'JS'],
  },
]

const container = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.2,
    },
  },
}

const listItem = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 150,
    },
  },
}

export const Projects = () => {
  const animation = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      animation.start('show')
    }
  }, [animation, inView])
  return (
    <div className='projects-wrapper container' id='projects'>
      <Title
        title='Some of my past projects'
        description='I am always trying to create new projects to try new technologies,
        contribute to open source projects and expand my knowledge.'
      />
      <motion.div
        className='cards-wrapper'
        variants={container}
        initial='hidden'
        animate={animation}
        ref={ref}>
        {projects.map(project => (
          <motion.div
            className='project-card'
            key={project.title}
            variants={listItem}>
            <h3>{project.title}</h3>
            <a
              href={project.source}
              target='_blank'
              rel='noopener noreferrer'
              className='source-button'>
              <FiCode />
            </a>
            <h5>{project.description}</h5>
            <p>
              Built with: <strong>{project.builtWith[0]}</strong>,{' '}
              <strong>{project.builtWith[1]}</strong> and{' '}
              <strong>{project.builtWith[2]}</strong>
            </p>
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='button'>
              <div className='inner'>
                <FiArrowRight /> Check it out!
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
      <div className='profiles-wrapper'>
        <p>
          I have a lot more projects on my Github and <br /> codepen accounts,
          <strong> check them out!</strong>
        </p>

        <div className='buttons'>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            className='button github'>
            <div className='inner'>
              <FaGithub /> Github
            </div>
          </a>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            className='button'>
            <div className='inner'>
              <FaCodepen /> Codepen
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
