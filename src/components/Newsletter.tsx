import React from 'react'
import { FiMail } from 'react-icons/fi'
import './Newsletter.scss'

export const Newsletter = () => {
  return (
    <div className='newsletter-wrapper'>
      <div className='filter' />
      <div className='content-wrapper'>
        <div className='icon'>
          <FiMail />
        </div>
        <h3>Subscribe to my newsletter!</h3>
        <p>
          Never miss any of my new projects or blog posts when I start that. I
          will not spam, I promise :)
        </p>
        <form className='newsletter-form'>
          <input
            type='email'
            name='newsletter-email'
            id='newsletter-email'
            placeholder='Your email address...'
          />
          <button type='submit'>Subscribe!</button>
        </form>
      </div>
      <div className='credit'>
        <span>
          Photo by{' '}
          <a
            href='https://unsplash.com/@_imkiran?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            target='_blank'
            rel='noopener noreferrer'>
            Sai Kiran Anagani
          </a>{' '}
          on{' '}
          <a
            href='https://unsplash.com/s/photos/coding?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            target='_blank'
            rel='noopener noreferrer'>
            Unsplash
          </a>
        </span>
      </div>
    </div>
  )
}
