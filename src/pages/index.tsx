import * as React from 'react'
import { About } from '../components/About/About'
import { Landing } from '../components/Landing/Landing'
import SEO from '../components/seo'
import { Skills } from '../components/Skills/Skills'
import { Work } from '../components/Work/Work'

const IndexPage = () => {
  return (
    <main>
      <SEO title='Home' />
      <Landing />
      <Work />
      <About />
      <Skills />
    </main>
  )
}

export default IndexPage
