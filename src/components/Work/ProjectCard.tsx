import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../shared/PrimaryButton'

interface Props {
  num: string
  title: string
  description: string
  link: string
}

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const CardWrapper = styled('div')`
  padding: 100px 0 0 0;
`

const Number = styled('p')`
  font-size: 3rem;
  opacity: 0.3;
  font-weight: 400;
  line-height: 1.5;
`

const Title = styled('h1')`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.5;
`

export const ProjectCard = ({ num, title, description, link }: Props) => {
  return (
    <CardWrapper>
      <Number>{num}</Number>
      <Title>{title}</Title>
      <p style={{ opacity: 0.7 }}>{description}</p>
      <PrimaryButton
        href={link}
        text='view project'
        variants={buttonVariants}
      />
    </CardWrapper>
  )
}
