import React from 'react'
import { About } from '../components/About'
import { Landing } from '../components/Landing'
import { Projects } from '../components/Projects'
import SEO from '../components/seo'
import { Skills } from '../components/Skills'

const index = () => {
  return (
    <div>
      <SEO title='Home' />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default index
