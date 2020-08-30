import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { animateScroll } from 'react-scroll'
import './styles.scss'

export const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <a onClick={() => animateScroll.scrollToTop()} className='top-button'>
        Go back to top
      </a>
      <p>
        <span className='heart'>
          Made with Gatsby and lots of <FiHeart fill='#eee' />
        </span>{' '}
        &copy; Copyright 2020 Ahmed Elsakaan. All Rights Reserved.
      </p>
    </footer>
  )
}
