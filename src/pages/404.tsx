import React from 'react'
import illustration from '../assets/images/illustration.svg'
import './404.scss'

const NotFound = ({ data }: any) => {
  return (
    <div className='wrapper'>
      <div className='not-found-wrapper'>
        <div className='left-side'>
          <img src={illustration} alt='Illustration' />
        </div>
        <div className='right-side'>
          <h1>
            Oops! ... <br /> 404 Not Found
          </h1>
          <h3>It looks like this page does not exist...the sadness</h3>
        </div>
      </div>
    </div>
  )
}

export default NotFound
