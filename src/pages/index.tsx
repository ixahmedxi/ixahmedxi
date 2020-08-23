/* @jsx jsx */
import { About } from '@components/About/About.component'
import { Home } from '@components/Home/Home.component'
import { Skills } from '@components/Skills/Skills.component'
import { jsx } from 'theme-ui'

const IndexPage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
    </>
  )
}

export default IndexPage
