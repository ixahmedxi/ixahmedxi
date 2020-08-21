import { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    primary: '#F4A261',
    text: '#111',
    background: '#eee'
  },
  fonts: {
    body: 'Metropolis, Arial, sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 900
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background'
    }
  },
  fontSizes: [12, 16, 24, 32, 40, 48, 56, 64],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  sizes: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px']
}
