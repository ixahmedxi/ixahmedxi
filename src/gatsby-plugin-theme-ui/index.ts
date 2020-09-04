import { Theme } from 'theme-ui'

const theme: Theme = {
  colors: {
    primary: '#6046F1',
    background: '#ffffff',
    text: '#111111',
  },
  fonts: {
    body: 'Metropolis, Arial, Helvetica, sans-serif',
  },
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  fontSizes: [18, 24, 30, 36, 42, 48, 54, 60, 66, 74],
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px'],
  styles: {
    root: {
      fontFamily: 'body',
    },
  },
}

export default theme
