import React from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Landing } from '../components/Landing'
import { Newsletter } from '../components/Newsletter'
import { Projects } from '../components/Projects'
import SEO from '../components/seo'
import { Skills } from '../components/Skills'

const index = () => {
  return (
    <div>
      <SEO />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

export default index
