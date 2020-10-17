import React from 'react'
import styled from 'styled-components'
import { Container } from '../shared/Container'
import { LeftColumn } from './LeftColumn'
import { ProjectCard } from './ProjectCard'

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

const ProjectsListWrapper = styled('div')`
  padding-left: 30px;
  padding-bottom: 100px;
`

const projects = [
  {
    num: '01',
    title: 'lop.si - url shortener',
    description:
      'lop.si is a simple url shortener made to transform long urls into short alternatives that look good wherever they are used. The project is fully open source and was made to be a practice in using Next.js, theme-ui and Firebase. I have also used this project to try out neumorphism.',
    link: 'https://lop.si',
  },
  {
    num: '02',
    title: 'next-boilerpack',
    description:
      'next-boilerpack is a batteries-included next.js boilerplate, it aims for provide a quick way to start new projects and it included lots of features that are nice to have or lots of devs use in their projects. I made this project as that I wanted to save the time it took to install 3rd party packages and configure the default next.js boilerplate',
    link: 'https://next-boilerpack.vercel.app',
  },
  {
    num: '03',
    title: 'MacOS Big Sur Control Center',
    description:
      'This is a codepen project that I decided to make when the new version of mac of was announced, I was intrigued by the new control center feature and wanted to see how it might look like if it was adopted in a web dev environment. This gives me the possibility of having a similar features for settings in a future project if needed.',
    link: 'https://codepen.io/ixahmedxi/pen/zYrdBKx',
  },
  {
    num: '04',
    title: 'Spotify UI',
    description:
      'This is a codepen based project that I made to try and mimic spotify’s mobile UI using HTML and CSS. This project lead me to get better at flexbox and gave me a better sense of laying out content in CSS. I used Pug as the HTML templating engine because I like the syntax style and also stylus for the awesome features as opposed to normal CSS.',
    link: 'https://codepen.io/ixahmedxi/pen/pqwaBe',
  },
  {
    num: '05',
    title: 'Music Player Design in CSS',
    description:
      'This is a codepen based project that I made when I found an awesome Music player design freebie on dribbble, I decided to create it using HTML and CSS which went well, getting viewed more than 18000 times! Creating this project made me practice a lot of CSS techniques like shadows and overlaps.',
    link: 'https://codepen.io/ixahmedxi/pen/RKbdyJ',
  },
  {
    num: '06',
    title: 'Visual Studio Code UI in React',
    description:
      "This is a project made on Codepen, I decided to tackle Visual Studio Code's UI but using React to get it done. This was quite fun to do and I managed to also implement the functionality of closing the opened file. This project gained a lot of reputation and even Sarah Drasner shared positive feedback about it!",
    link: 'https://codepen.io/ixahmedxi/pen/GQOWqo',
  },
]

export const Work = () => {
  return (
    <WorkSectionWrapper id='#work'>
      <Container>
        <GridLayout>
          <LeftColumn />
          <ProjectsListWrapper>
            {projects.map(project => (
              <ProjectCard
                key={project.num}
                num={project.num}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </ProjectsListWrapper>
        </GridLayout>
      </Container>
    </WorkSectionWrapper>
  )
}
