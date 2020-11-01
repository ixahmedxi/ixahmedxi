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
  margin: 15px 0 30px 0;
`

const IconsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
  svg {
    margin: 10px 5px 0 5px;
  }
`

export const TechnologiesLogos = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <Postgresql size={35} color={color} />
        <Apollographql size={35} color={color} />
        <NextDotJs size={35} color={color} />
        <Gatsby size={35} color={color} />
        <Css3 size={35} color={color} />
        <Javascript size={35} color={color} />
        <Html5 size={35} color={color} />
        <ReactJs size={35} color={color} />
        <Firebase size={35} color={color} />
        <Graphql size={35} color={color} />
        <Typescript size={35} color={color} />
        <Mongodb size={35} color={color} />
        <Adobexd size={35} color={color} />
        <NodeDotJs size={35} color={color} />
        <Nestjs size={35} color={color} />
        <Sketch size={35} color={color} />
        <Svelte size={35} color={color} />
        <Sass size={35} color={color} />
      </IconsWrapper>
    </Wrapper>
  )
}
