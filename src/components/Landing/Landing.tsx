import { motion } from 'framer-motion'
import React from 'react'
import { FiCodepen, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import styled from 'styled-components'
import bg from '../../images/landing-background.svg'
import profile from '../../images/profile.jpg'
import { Container } from '../shared/Container'
import { PrimaryButton } from '../shared/PrimaryButton'

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

const SocialMediaIconsWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SocialMediaLink = styled('a')`
  text-decoration: none;
  color: inherit;
  padding: 0 15px;
`

const MainContentWrapper = styled('div')`
  display: flex;
  align-items: center;
`

const HeyWrapper = styled('div')`
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

const Title = styled('h1')`
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
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
          <MainContentWrapper>
            <div>
              <HeyWrapper>
                <p>Hey!</p> <HeyLine />
              </HeyWrapper>
              <Title>I&#39;m Ahmed Elsakaan</Title>
              <h3>
                I&#39;m a <strong>fullstack web developer</strong>, I like
                creating <strong>accessible</strong>,{' '}
                <strong>highly performant</strong> and{' '}
                <strong>fully responsive websites</strong>. <br /> I am a{' '}
                <strong>BSc Computer Science</strong> student at{' '}
                <strong>Royal Holloway University of London</strong>.
              </h3>
              <PrimaryButton href='#work' text='View my work' />
            </div>
          </MainContentWrapper>
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
          <SocialMediaIconsWrapper>
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
        </GridLayout>
      </Container>
    </LandingWrapper>
  )
}
