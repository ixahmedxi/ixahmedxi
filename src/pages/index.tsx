/* @jsx jsx */
import { About } from '@components/About/About.component'
import { Home } from '@components/Home/Home.component'
import { jsx } from 'theme-ui'

const IndexPage = () => {
  return (
    <>
      <Home />
      <About />
    </>
  )
}

export default IndexPage
