import * as React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'

const Text = styled('h1')`
  color: dodgerblue;
`

const IndexPage = () => {
  return (
    <div>
      <SEO title='Home' />
      <div>
        <Text>Hello World</Text>
      </div>
    </div>
  )
}

export default IndexPage
