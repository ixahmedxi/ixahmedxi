import React from 'react'
import styled from 'styled-components'
import { Container } from '../shared/Container'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

const SectionWrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerWrapper = styled('div')`
  width: 100%;
`

const GridLayout = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Contact = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <Container>
          <GridLayout>
            <LeftSide />
            <RightSide />
          </GridLayout>
        </Container>
      </InnerWrapper>
    </SectionWrapper>
  )
}
