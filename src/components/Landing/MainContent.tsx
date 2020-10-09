import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../shared/PrimaryButton'

const MainContentWrapper = styled('div')`
  display: flex;
  align-items: center;
`

const HeyWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-space-between;
`

const HeyLine = styled('div')`
  width: 150px;
  height: 2px;
  background-color: #111;
  border-radius: 5px;
  margin-left: 15px;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
`

const wrapperVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 1.2,
    },
  },
}

const itemVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const MainContent = () => {
  return (
    <MainContentWrapper>
      <motion.div
        variants={wrapperVariants}
        initial='initial'
        animate='animate'>
        <HeyWrapper variants={itemVariants}>
          <p>Hey!</p> <HeyLine />
        </HeyWrapper>
        <Title variants={itemVariants}>I&#39;m Ahmed Elsakaan</Title>
        <motion.h3 variants={itemVariants}>
          I&#39;m a <strong>fullstack web developer</strong>, I like creating{' '}
          <strong>accessible</strong>, <strong>highly performant</strong> and{' '}
          <strong>fully responsive websites</strong>. <br /> I am a{' '}
          <strong>BSc Computer Science</strong> student at{' '}
          <strong>Royal Holloway University of London</strong>.
        </motion.h3>
        <PrimaryButton
          variants={itemVariants}
          href='#work'
          text='View my work'
        />
      </motion.div>
    </MainContentWrapper>
  )
}
