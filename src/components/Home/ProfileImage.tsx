/* @jsx jsx */
import { motion, Variants } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { jsx, SxStyleProp } from 'theme-ui'

const styles: SxStyleProp = {
  wrapper: {
    position: 'absolute',
    width: '500px',
    right: 0,
    top: -6,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
}

const variants: { [key: string]: Variants } = {
  wrapper: {
    initial: {
      top: '100vh',
    },
    animate: {
      top: '-48px',
      transition: { ease: 'easeOut', duration: 1 },
    },
  },
  image: {
    initial: {
      scale: 1.5,
    },
    animate: {
      scale: 1,
      transition: { ease: 'easeOut', delay: 0.5, duration: 0.5 },
    },
  },
}

export const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <motion.div
      sx={styles.wrapper}
      variants={variants.wrapper}
      initial='initial'
      animate='animate'>
      <motion.div variants={variants.image} initial='initial' animate='animate'>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </motion.div>
    </motion.div>
  )
}
