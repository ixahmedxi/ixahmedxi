import * as React from 'react'
import { Landing } from '../components/Landing/Landing'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <main>
      <SEO title='Home' />
      <Landing />
      <div style={{ height: '100vh' }} />
    </main>
  )
}

export default IndexPage
