import {
  Apollographql,
  Firebase,
  Gatsby,
  Graphql,
  Nestjs,
  NextDotJs,
  ReactJs,
  Svelte,
  Typescript,
} from '@icons-pack/react-simple-icons'
import React from 'react'
import { Title } from '../shared/Title'
import './styles.scss'

const frontend = [
  'TypeScript',
  'React',
  'Next.js or Gatsby',
  'theme-ui, styled-components or sass',
  'Apollo GraphQL',
  'Redux (maybe)',
]

const backend = [
  'TypeScript',
  'Node.js',
  'Nestjs or Express',
  'TypeOrm or MikroORM',
  'PostgreSQL',
  'GraphQL',
]

export const Skills = () => {
  return (
    <div className='skills-wrapper container'>
      <Title
        title='Knowledge & skills'
        description="I have worked with a lot of technologies throughout the years and I'm always open to learning new things."
      />
      <div className='skills-logos'>
        <div className='inner'>
          <Firebase size='50px' />
          <Graphql size='50px' />
          <Svelte size='50px' />
          <Typescript size='50px' />
          <NextDotJs size='50px' />
          <ReactJs size='50px' />
          <Gatsby size='50px' />
          <Apollographql size='50px' />
          <Nestjs size='50px' />
        </div>
      </div>
      <div className='current-stack-wrapper'>
        <h3 className='stack-wrapper-title'>
          A typical stack that I might use today for a project might use the
          following <strong>toolset</strong>, but it all comes down to the needs
          of the project and how large it is.
        </h3>
        <div className='tree' />
        <div className='stack-cards-wrapper'>
          <div className='stack-card'>
            <h3 className='stack-title'>Frontend stack</h3>
            <ul>
              {frontend.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='stack-card dark'>
            <h3 className='stack-title'>Backend stack</h3>
            <ul>
              {backend.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
