import React from 'react'
import { FiHeart } from 'react-icons/fi'
import './styles.scss'

export const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <p>
        <span className='heart'>
          Made with Gatsby and lots of <FiHeart fill='#eee' />
        </span>{' '}
        &copy; Copyright 2020 Ahmed Elsakaan. All Rights Reserved.
      </p>
    </footer>
  )
}
