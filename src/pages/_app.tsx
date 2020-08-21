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
        title='next-boilerpack - A nextjs boilerplate with some cool stuff added to it'
        description='next-boilerpack is a next.js boilerplate that includes many of the commonly used tools and libraries alongside to make starting a new project fast and effortless'
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
