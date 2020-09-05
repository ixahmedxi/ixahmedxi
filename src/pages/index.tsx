/* @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { MainContent } from '../components/Home/MainContent'
import { ProfileImage } from '../components/Home/ProfileImage'
import { SocialMediaLinks } from '../components/Home/SocialMediaLinks'
import SEO from '../components/seo'
import { HamburgerIcon } from '../components/shared/HamburgerMenuIcon'
import background from '../images/home-background.svg'

const styles: SxStyleProp = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    background: `url(${background as string}) left center no-repeat`,
    backgroundSize: 'cover',
    px: 12,
    py: 6,
  },
  layout: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    position: 'relative',
  },
}

const IndexPage = () => {
  return (
    <div>
      <SEO title='Home' />
      <div sx={styles.wrapper}>
        <div sx={styles.layout}>
          <ProfileImage />
          <HamburgerIcon />
          <MainContent />
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
