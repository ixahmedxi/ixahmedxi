import {
  Adobexd,
  Apollographql,
  Css3,
  Firebase,
  Gatsby,
  Graphql,
  Html5,
  Javascript,
  Mongodb,
  Nestjs,
  NextDotJs,
  NodeDotJs,
  Postgresql,
  ReactJs,
  Sass,
  Sketch,
  Svelte,
  Typescript,
} from '@icons-pack/react-simple-icons'
import React from 'react'
import styled from 'styled-components'

const color = 'rgba(255, 255, 255, 0.3)'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`

const IconsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  svg {
    margin: 15px;
  }
`

export const TechnologiesLogos = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <Postgresql size={50} color={color} />
        <Apollographql size={50} color={color} />
        <NextDotJs size={50} color={color} />
        <Gatsby size={50} color={color} />
        <Css3 size={50} color={color} />
        <Javascript size={50} color={color} />
        <Html5 size={50} color={color} />
        <ReactJs size={50} color={color} />
        <Firebase size={50} color={color} />
        <Graphql size={50} color={color} />
        <Typescript size={50} color={color} />
        <Mongodb size={50} color={color} />
        <Adobexd size={50} color={color} />
        <NodeDotJs size={50} color={color} />
        <Nestjs size={50} color={color} />
        <Sketch size={50} color={color} />
        <Svelte size={50} color={color} />
        <Sass size={50} color={color} />
      </IconsWrapper>
    </Wrapper>
  )
}
