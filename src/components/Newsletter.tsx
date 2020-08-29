import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import './Newsletter.scss'

interface FormSubmissionResult {
  result: 'success' | 'error'
  msg: string
}

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [
    submissionData,
    setSubmissionData,
  ] = useState<FormSubmissionResult | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    setSubmissionData(result)
  }

  return (
    <div className='newsletter-wrapper'>
      <div className='content-wrapper'>
        <div className='icon'>
          <FiMail />
        </div>
        <h3>Subscribe to my newsletter!</h3>
        <p>
          Never miss any of my new projects or blog posts when I start that. I
          will not spam, I promise
        </p>
        <form className='newsletter-form' onSubmit={handleSubmit}>
          {submissionData === null && (
            <>
              <input
                type='email'
                name='newsletter-email'
                id='newsletter-email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Your email address...'
              />
              <button type='submit'>Subscribe!</button>
            </>
          )}
          <div
            className={
              submissionData !== null
                ? 'result-message visible'
                : 'result-message'
            }>
            {submissionData?.result && (
              <p className='visible'>
                {submissionData.msg.includes('is already subscribed')
                  ? 'You are already subscribed :)'
                  : submissionData.msg}
              </p>
            )}
          </div>
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
