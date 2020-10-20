import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('div')`
  text-align: center;
`

const Title = styled('h3')`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.5;
`

export const Heading = () => {
  return (
    <Wrapper>
      <Title>Knowledge & Skills</Title>
      <p>
        I have worked with a lot of technologies throughout the years and I am
        always learning <br /> new things to add to my toolset.
      </p>
    </Wrapper>
  )
}
