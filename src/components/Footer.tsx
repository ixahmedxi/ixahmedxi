import React from 'react'
import { FiHeart } from 'react-icons/fi'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <p>
        <div className='heart'>
          Made with Gatsby and lots of <FiHeart fill='#eee' />
        </div>{' '}
        &copy; Copyright 2020 Ahmed Elsakaan. All Rights Reserved.
      </p>
    </footer>
  )
}
