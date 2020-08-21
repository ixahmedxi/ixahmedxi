import { css, Global } from '@emotion/core'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { normalize } from 'polished'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize()}

          @font-face {
            font-family: Metropolis;
            src: url(/fonts/Metropolis-Regular.woff);
            font-display: swap;
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: Metropolis;
            src: url(/fonts/Metropolis-Black.woff);
            font-display: swap;
            font-weight: 900;
            font-style: normal;
          }

          * {
            box-sizing: border-box;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-size: 1rem;
            font-weight: 400;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <DefaultSeo
        title='Ahmed Elsakaan - Full stack web developer'
        description='Hey there! I am a full stack web developer from Egypt who’s currently pursuing a BSc computer science degree at Royal Holloway University of London. I specialise in Reactjs on the frontend and Nodejs on the backend.'
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
