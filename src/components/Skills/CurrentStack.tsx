import { lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('div')`
  text-align: center;
`

const Title = styled('h4')`
  font-size: 2rem;
  line-height: 1.5;
  font-weight: bold;
`

const Description = styled('p')`
  max-width: 1000px;
  margin: 0 auto;
`

const Lines = styled('div')`
  width: 16px;
  height: 16px;
  background-color: #6046f1;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 20px;
    background-color: #6046f1;
    left: calc(50% - 1px);
    top: 16px;
  }
`

const CardsWrapper = styled('div')`
  display: flex;
  justify-content: center;
`

const Card = styled('div')<{ left?: boolean }>`
  width: 25%;
  margin: 68px 15px 0 15px;
  background-color: ${lighten(0.1, '#111')};
  position: relative;
  box-sizing: border-box;
  padding: 30px 0;
  border-radius: 25px;

  ul {
    text-align: left;
    margin-top: 30px;
    padding-left: 75px;
    li {
      line-height: 2;
      opacity: 0.7;
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 48px;
    background-color: #6046f1;
    top: -48px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px;
    background-color: #6046f1;
    top: -48px;
    left: ${props => (props.left === true ? '50%' : 'calc(50% - 60%)')};
  }
`

const CardTitle = styled('h3')`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5;
`

export const CurrentStack = () => {
  return (
    <Wrapper>
      <Title>Current Stack</Title>
      <Description>
        This is an example of a web application stack I might use currently but
        at the end of the day every app has it’s own requirements and I am
        highly adaptable to new stacks and technologies when needed.
      </Description>
      <Lines />
      <CardsWrapper>
        <Card left>
          <CardTitle>Frontend</CardTitle>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Gatsby or Next.js</li>
            <li>theme-ui, styled-components or sass</li>
            <li>Apollo GraphQL or Axios</li>
            <li>Context API</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Backend</CardTitle>
          <ul>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Nest.js or Express</li>
            <li>TypeORM or MikroORM</li>
            <li>GraphQL</li>
            <li>PostgreSQL or MongoDB</li>
          </ul>
        </Card>
      </CardsWrapper>
    </Wrapper>
  )
}
