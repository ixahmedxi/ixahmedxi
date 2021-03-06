import React from 'react'
import { FiRefreshCcw, FiSend } from 'react-icons/fi'
import { Title } from '../shared/Title'
import './styles.scss'

export const Contact = () => {
  return (
    <div className='contact-wrapper container'>
      <Title
        title='Have something to say?'
        description='Feel free to drop me a message, I will try to get back to you
        as soon as possible!'
      />
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        netlify-honeypot='bot-field'
        data-sal='slide-up'>
        <input type='hidden' name='bot-field' />
        <div className='row'>
          <div className='input-wrapper'>
            <label htmlFor='name'>Full name:</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email address:</label>
            <input type='text' name='email' id='name' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='subject'>Subject:</label>
            <input type='text' name='subject' id='subject' />
          </div>
        </div>
        <textarea name='message' id='message'></textarea>
        <div className='buttons'>
          <button type='submit' className='button send'>
            <div className='inner'>
              <FiSend /> Send message
            </div>
          </button>
          <button type='reset' className='button'>
            <div className='inner'>
              <FiRefreshCcw /> Reset form
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}
