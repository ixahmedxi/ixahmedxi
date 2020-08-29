import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
import './LoadingScreen.scss'

interface Props {
  isLoading: boolean
}

export const LoadingScreen = ({ isLoading }: Props) => {
  return (
    <div className={isLoading ? 'loading-wrapper' : 'loading-wrapper hidden'}>
      <BounceLoader size={100} loading={true} color='#f46843' />
    </div>
  )
}
