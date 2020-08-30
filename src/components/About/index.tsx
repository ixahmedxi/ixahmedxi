import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import './styles.scss'

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
      <div className='container' data-sal='slide-up'>
        <div className='inner-content'>
          <h1 className='about-title'>More about me</h1>
          <p className='description'>
            I started programming at around the age of 16. One day, I randomly
            started to wonder as to how websites are made. That's when I started
            playing around with HTML and CSS. It took me a couple of months to
            get comfortable with these two, and that's when I decided to learn
            my first programming language, JavaScript to add to my toolset. I
            didn’t get comfortable with JavaScript until a year of using it.
            This allowed me to dive deeper into the vast world of web
            development, one which I still learn new things in day by day. I
            decided to pursue it as a career, a goal which I am still working on
            towards to this day. I will hopefully earn my computer science
            degree in 2023, from there, I can't wait to see what the future
            holds. I am always striving to improve my skills and to make better
            projects, ones that I am proud of.
          </p>
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
