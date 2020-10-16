import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import * as React from 'react'
import IndexPage from '..'

describe('Home Page', () => {
  beforeEach(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'GatsbyJS',
        },
      },
      placeholderImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
    }))
  })
  test('it renders', () => {
    const { container } = render(<IndexPage />)

    expect(container).toBeTruthy()
  })
})
