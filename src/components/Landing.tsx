import React from 'react'
import { FaCodepen, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Wave from 'react-wavify'
import './Landing.scss'

export const Landing = () => {
  return (
    <header className='landing-wrapper' id='landing'>
      <div className='container'>
        <div className='inner-content'>
          <h1 className='title'>Hey! I'm Ahmed Elsakaan</h1>
          <p className='description'>
            I am a <strong>full stack web developer</strong> from{' '}
            <strong>Egypt</strong> who’s currently pursuing a{' '}
            <strong>BSc computer science degree</strong> at{' '}
            <strong>Royal Holloway University of London</strong>. I specialise
            in <strong>Reactjs</strong> on the frontend and{' '}
            <strong>Nodejs</strong> on the backend.
          </p>
          <Link
            to='projects'
            className='projects-button'
            smooth='easeInOutCubic'>
            View my projects
          </Link>
        </div>
        <div className='social-media-links'>
          <a
            href='https://github.com/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a
            href='https://codepen.io/ixahmedxi'
            target='_blank'
            rel='noopener noreferrer'>
            <FaCodepen />
          </a>
          <a
            href='https://twitter.com/ixahmedxii'
            target='_blank'
            rel='noopener noreferrer'>
            <FaTwitter />
          </a>
          <a
            href='https://instagram.com/ix.ahmed.xi'
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='wave'>
        <Wave
          fill='#111'
          options={{ height: 50, amplitude: 30, speed: 0.3, points: 3 }}
        />
      </div>
    </header>
  )
}
