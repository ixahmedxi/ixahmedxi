/* @jsx jsx */
import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'

export const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <motion.div
      initial={{ top: '100vh' }}
      animate={{ top: '-48px' }}
      transition={{ ease: 'easeOut', duration: 1 }}
      sx={{
        position: 'absolute',
        width: '500px',
        right: 0,
        top: -6,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
      }}>
      <motion.div
        initial={{ scale: 1.6 }}
        animate={{ scale: 1 }}
        transition={{ ease: 'easeOut', delay: 0.5, duration: 0.5 }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </motion.div>
    </motion.div>
  )
}
