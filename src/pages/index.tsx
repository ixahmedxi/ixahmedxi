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
    const time = setTimeout(() => setIsLoading(false), 250)
    return () => clearTimeout(time)
  }, [])

  return (
    <div>
      <SEO />
      <LoadingScreen isLoading={isLoading} />
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
