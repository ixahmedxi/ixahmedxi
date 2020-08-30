import React from 'react'
import './styles.scss'

interface Props {
  title: string
  description: string
}

export const Title = ({ title, description }: Props) => {
  return (
    <div className='section-title'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
