import { motion } from 'framer-motion'
import React from 'react'
import { FiCodepen, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import styled from 'styled-components'

const SocialMediaIconsWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SocialMediaLink = styled('a')`
  text-decoration: none;
  color: inherit;
  padding: 0 15px;
`

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 3.2,
      ease: 'easeOut',
    },
  },
}

export const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsWrapper
      variants={variants}
      initial='initial'
      animate='animate'>
      <SocialMediaLink
        href='https://github.com/ixahmedxi'
        target='_blank'
        rel='noopener noreferrer'>
        <FiGithub size={30} />{' '}
      </SocialMediaLink>
      <SocialMediaLink
        href='https://github.com/ixahmedxi'
        target='_blank'
        rel='noopener noreferrer'>
        <FiTwitter size={30} />{' '}
      </SocialMediaLink>
      <SocialMediaLink
        href='https://github.com/ixahmedxi'
        target='_blank'
        rel='noopener noreferrer'>
        <FiCodepen size={30} />{' '}
      </SocialMediaLink>
      <SocialMediaLink
        href='https://github.com/ixahmedxi'
        target='_blank'
        rel='noopener noreferrer'>
        <FiInstagram size={30} />{' '}
      </SocialMediaLink>
    </SocialMediaIconsWrapper>
  )
}
