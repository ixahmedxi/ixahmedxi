import * as React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import { Container } from '../components/shared/Container'
import { NavBar } from '../components/shared/NavBar'

const Text = styled('h1')`
  color: dodgerblue;
`

const IndexPage = () => {
  return (
    <Container>
      <SEO title='Home' />
      <div>
        <NavBar />
        <Text>Hello World</Text>
      </div>
    </Container>
  )
}

export default IndexPage
