import React from 'react'
import styled from 'styled-components'
import illustration from '../../images/laptop-illustration.svg'

const Title = styled('h1')`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.5;
`

const Description = styled('div')`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
`

export const LeftSide = () => {
  return (
    <div>
      <Title>Let&#39;s get in touch!</Title>
      <Description>
        Feel free to send me a message. I will try to get back to you as soon as
        I can!
      </Description>
      <img src={illustration} alt='Laptop Illustration' />
      <p>&copy; Copyright 2020 Ahmed Elsakaan. All Rights Reserved.</p>
    </div>
  )
}
