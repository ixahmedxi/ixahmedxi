import { Container } from '@shared/Container/Container.component'
import { Box, Flex, Text } from 'theme-ui'
import { ProjectsButton } from './Button.component'
import { SocialMediaLinks } from './SocialMediaLinks.component'

export const Content = () => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Container>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Text as='h1' sx={{ fontSize: 6, fontWeight: 'heading' }}>
              Hey, I&#39;m Ahmed Elsakaan
            </Text>
            <Text as='p' sx={{ width: '50%', lineHeight: 1.5, py: 2 }}>
              I am a <strong>full stack web developer</strong> from <strong>Egypt</strong> who’s
              currently pursuing a <strong>BSc computer science degree</strong> at{' '}
              <strong>Royal Holloway University of London</strong>. I specialise in{' '}
              <strong>Reactjs</strong> on the frontend and <strong>Nodejs</strong> on the backend.
            </Text>
            <ProjectsButton />
          </Box>
          <SocialMediaLinks />
        </Flex>
      </Container>
    </Flex>
  )
}
