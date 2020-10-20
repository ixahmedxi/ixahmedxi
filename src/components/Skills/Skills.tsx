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
  padding: 100px 0;
`

export const Skills = () => {
  return (
    <SkillsWrapper id='#skills'>
      <Heading />
      <TechnologiesLogos />
      <CurrentStack />
    </SkillsWrapper>
  )
}
