import React from 'react'
import styled from 'styled-components'
import illustration from '../../images/about-section-illustration.svg'
import { Container } from '../shared/Container'
import { PrimaryButton } from '../shared/PrimaryButton'

const AboutSectionWrapper = styled('section')`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

const GridLayout = styled('div')`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`

const Title = styled('h1')`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 15px;
`

const IllustrationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const About = () => {
  return (
    <AboutSectionWrapper id='#about'>
      <Container>
        <GridLayout>
          <div>
            <Title>Get to know me a bit!</Title>
            <p>
              I started programming at around the age of 16. One day, I randomly
              started to wonder as to how websites are made. That&#39;s when I
              started playing around with HTML and CSS. It took me a couple of
              months to get comfortable with these two, and that&#39;s when I
              decided to learn my first programming language, JavaScript to add
              to my toolset. I didn’t get comfortable with JavaScript until a
              year of using it. This allowed me to dive deeper into the vast
              world of web development, one which I still learn new things in
              day by day. I decided to pursue it as a career, a goal which I am
              still working on towards to this day. I will hopefully earn my
              computer science degree in 2023, from there, I can&#39;t wait to
              see what the future holds. I am always striving to improve my
              skills and to make better projects, ones that I am proud of.
            </p>
            <div style={{ marginTop: '15px' }}>
              <PrimaryButton
                href='#skills'
                text='Know my skills'
                variants={{}}
              />
            </div>
          </div>
          <IllustrationWrapper>
            <img src={illustration} alt='Laptop illustration' />
          </IllustrationWrapper>
        </GridLayout>
      </Container>
    </AboutSectionWrapper>
  )
}
