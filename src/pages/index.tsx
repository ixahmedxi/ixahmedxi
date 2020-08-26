import React from 'react'
import { About } from '../components/About'
import { Landing } from '../components/Landing'
import SEO from '../components/seo'

const index = () => {
  return (
    <div>
      <SEO title='Home' />
      <Landing />
      <About />
    </div>
  )
}

export default index
