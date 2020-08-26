import React from 'react'
import { About } from '../components/About'
import { Landing } from '../components/Landing'
import SEO from '../components/seo'
import { Skills } from '../components/Skills'

const index = () => {
  return (
    <div>
      <SEO title='Home' />
      <Landing />
      <About />
      <Skills />
    </div>
  )
}

export default index
