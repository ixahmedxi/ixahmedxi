import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FiCodepen, FiCodesandbox, FiGithub } from 'react-icons/fi'
import styled from 'styled-components'
import { Container } from '../shared/Container'

const WorkSectionWrapper = styled('section')`
  min-height: 100vh;
  background-color: #111;
  color: #fff;
`

const GridLayout = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
`

const LeftColumn = styled('div')`
  display: flex;
  align-items: center;
`

const LeftColumnTitle = styled('h1')`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 1.5;
`

const LeftColumnDescription = styled('h3')`
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
`

const AboutButton = styled('a')`
  color: inherit;
  border: 3px solid #fff;
  display: inline-block;
  padding: 15px 60px;
  text-transform: uppercase;
  border-radius: 100px;
  text-decoration: none;
  margin: 30px 0;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #fff;
    color: #111;
  }
  span {
    display: flex;
    align-items: center;
  }
`

const CodingAccountLink = styled('a')`
  color: #fff;
  margin: 15px 15px 0 0;
  display: inline-block;
  opacity: 0.7;
  transition: 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`

export const Work = () => {
  return (
    <WorkSectionWrapper>
      <Container>
        <GridLayout>
          <LeftColumn>
            <div>
              <LeftColumnTitle>Work / Projects</LeftColumnTitle>
              <LeftColumnDescription>
                These are some of the projects that I have created in the past,
                some of these projects I am still actively working on improving
                them further. There are a lot more projects that can be found on
                my different accounts.
              </LeftColumnDescription>
              <AboutButton href='#about'>
                <span>
                  About Me{' '}
                  <FaLongArrowAltRight style={{ marginLeft: '15px' }} />
                </span>
              </AboutButton>
              <div>
                <h5 style={{ opacity: 0.7 }}>My Coding Accounts</h5>
                <div>
                  <CodingAccountLink
                    href='https://github.com/ixahmedxi'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FiGithub size={35} />
                  </CodingAccountLink>
                  <CodingAccountLink
                    href='https://codesandbox.io/ixahmedxi'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FiCodesandbox size={35} />
                  </CodingAccountLink>
                  <CodingAccountLink
                    href='https://codepen.io/ixahmedxi'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FiCodepen size={35} />
                  </CodingAccountLink>
                </div>
              </div>
            </div>
          </LeftColumn>
          <div>projects here</div>
        </GridLayout>
      </Container>
    </WorkSectionWrapper>
  )
}
