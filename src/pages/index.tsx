import * as React from 'react'
import { Landing } from '../components/Landing/Landing'
import SEO from '../components/seo'
import { Work } from '../components/Work/Work'

const IndexPage = () => {
  return (
    <main>
      <SEO title='Home' />
      <Landing />
      <Work />
      <div id='#about' style={{ height: '100vh' }} />
    </main>
  )
}

export default IndexPage
