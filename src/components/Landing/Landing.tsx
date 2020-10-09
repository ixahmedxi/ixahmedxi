import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import bg from '../../images/landing-background.svg'
import profile from '../../images/profile.jpg'
import { Container } from '../shared/Container'
import { MainContent } from './MainContent'
import { SocialMediaIcons } from './SocialMediaIcons'

const LandingWrapper = styled('section')`
  min-height: 100vh;
  width: 100vw;
  background: url(${bg}) left center no-repeat;
  background-size: cover;
`

const GridLayout = styled('div')`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 100px;
  position: relative;
`

const ProfileWrapper = styled(motion.div)`
  max-width: 400px;
  overflow: hidden;
  position: absolute;
  right: 100px;
  top: 0;
`

const ProfileImage = styled(motion.img)`
  width: 100%;
`

const profileWrapperVariants = {
  initial: {
    top: '100vh',
  },
  animate: {
    top: '0vh',
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
}

const profileImageVariants = {
  initial: {
    scale: 1.6,
    borderRadius: '0 0 0 0',
  },
  animate: {
    scale: 1,
    borderRadius: '0 0 30px 30px',
    transition: {
      duration: 0.6,
      delay: 0.6,
      ease: 'easeOut',
    },
  },
}

export const Landing = () => {
  return (
    <LandingWrapper>
      <Container>
        <GridLayout>
          <MainContent />
          <ProfileWrapper
            variants={profileWrapperVariants}
            initial='initial'
            animate='animate'>
            <ProfileImage
              src={profile}
              alt='My profile'
              variants={profileImageVariants}
              initial='initial'
              animate='animate'
            />
          </ProfileWrapper>
          <SocialMediaIcons />
        </GridLayout>
      </Container>
    </LandingWrapper>
  )
}
