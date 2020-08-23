/* @jsx jsx */
import wave from '@images/wave.svg'
import { useEffect, useState } from 'react'
import { Box, jsx } from 'theme-ui'

export const Wave = () => {
  const [posX, setPosX] = useState('-350px')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const offset = 350
        setPosX('-' + String(offset + document.documentElement.scrollTop) + 'px')
      })
    }
  })
  return (
    <Box
      sx={{
        mb: '-3px',
        background: `url(${wave}) repeat`,
        backgroundPosition: `${posX} 0px`,
        backgroundSize: 'cover',
        height: 115,
        width: '100%'
      }}
    />
  )
}
