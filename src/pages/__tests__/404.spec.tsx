import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import * as React from 'react'
import NotFoundPage from '../404'

describe('Home Page', () => {
  beforeEach(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'GatsbyJS',
        },
      },
    }))
  })
  test('it renders', () => {
    const { getByText } = render(<NotFoundPage />)

    expect(
      getByText("You just hit a route that doesn't exist... the sadness.")
    ).toBeInTheDocument()
  })
})
