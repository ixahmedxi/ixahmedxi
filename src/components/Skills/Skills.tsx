import React from 'react'
import styled from 'styled-components'
import { CurrentStack } from './CurrentStack'
import { Heading } from './Heading'
import { TechnologiesLogos } from './TechnologiesLogos'

const SkillsWrapper = styled('section')`
  min-height: 100vh;
  background-color: #111;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerWrapper = styled('div')`
  width: 100%;
`

export const Skills = () => {
  return (
    <SkillsWrapper id='#skills'>
      <InnerWrapper>
        <Heading />
        <TechnologiesLogos />
        <CurrentStack />
      </InnerWrapper>
    </SkillsWrapper>
  )
}
