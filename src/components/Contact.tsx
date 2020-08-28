import React from 'react'
import { FiRefreshCcw, FiSend } from 'react-icons/fi'
import './Contact.scss'
import { Title } from './shared/Title'

export const Contact = () => {
  return (
    <div className='contact-wrapper container'>
      <Title
        title='Have something to say?'
        description='Feel free to drop me a message, I will try to get back to you
        as soon as possible!'
      />
      <form
        action='https://getform.io/f/69577175-dea7-4b35-95a2-c639d7c6b30b'
        method='POST'>
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
