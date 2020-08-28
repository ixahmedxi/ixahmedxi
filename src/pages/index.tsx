import React, { useEffect, useState } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Landing } from '../components/Landing'
import { LoadingScreen } from '../components/LoadingScreen'
import { Newsletter } from '../components/Newsletter'
import { Projects } from '../components/Projects'
import SEO from '../components/seo'
import { Skills } from '../components/Skills'

const index = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <SEO />
      <LoadingScreen isLoading={isLoading} />
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default index
