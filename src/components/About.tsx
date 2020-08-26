import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { FaCodepen } from 'react-icons/fa'
import './About.scss'

export const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className='about-wrapper'>
      <div className='container'>
        <div className='inner-content'>
          <h1 className='title'>More about me</h1>
          <p className='description'>
            I am a full stack web developer from Egypt & a computer science
            freshman at Royal Holloway University of London. I have always been
            intriguied as to how websites and applications are made and from the
            age of 16 I started playing around with HTML and CSS. Over the years
            I have accumelated a lot of skills and knowledge in both the
            frontend and the backend side of things. I am currently learning
            React Native and flutter & working on lop.si and next-boilerpack.
            <br /> <br />
            When I am not programming, I like to enjoy doing some of my hobbies,
            these include swimming, football, playing some video games and
            watching Formula 1 or going out with friends :)
          </p>
          <a
            href='https://codepen.io/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'
            className='codepen-button'>
            <div className='inner'>
              <FaCodepen /> My codepen profile
            </div>
          </a>
        </div>
        <div className='profile-wrapper'>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className='image'
          />
        </div>
      </div>
    </section>
  )
}
