import { Link } from 'gatsby'
import React from 'react'
import illustration from '../../assets/images/illustration.svg'
import './styles.scss'

const NotFound = ({ data }: any) => {
  return (
    <div className='wrapper'>
      <div className='not-found-wrapper'>
        <div className='left-side'>
          <img src={illustration} alt='Illustration' />
        </div>
        <div className='right-side'>
          <div className='inner-wrapper'>
            <h1>
              Oops! ... <br /> 404 Not Found
            </h1>
            <h3>It looks like this page does not exist...the sadness</h3>
            <div className='button-wrapper'>
              <Link to='/' className='button'>
                Go to home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
