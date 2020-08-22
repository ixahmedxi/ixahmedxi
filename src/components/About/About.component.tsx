/* @jsx jsx */
import profile from '@images/profile.png'
import { Button } from '@shared/Button/Button.component'
import { Container } from '@shared/Container/Container.component'
import { FaCodepen } from 'react-icons/fa'
import { Box, Flex, Image, jsx, Text } from 'theme-ui'

export const About = () => {
  return (
    <Box sx={{ bg: 'text', color: 'background', py: 12 }}>
      <Container>
        <Flex sx={{ alignItems: 'center' }}>
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Flex sx={{ alignItems: 'center', width: '70%' }}>
              <Box>
                <Text as='h1' sx={{ fontSize: 4, color: 'primary', fontWeight: 'heading' }}>
                  More about me
                </Text>
                <Text as='p' sx={{ lineHeight: 1.5, pt: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium maxime
                  consequatur itaque, sequi aperiam eius laboriosam quas quaerat quae molestias hic
                  eum atque repellendus laborum nam recusandae repellat. Quidem soluta aliquid iure
                  optio! Totam, minus amet corporis blanditiis distinctio eius sit expedita, ratione
                  earum inventore nam quos maxime numquam! Suscipit, repudiandae! Obcaecati,
                  recusandae maiores debitis necessitatibus odit perferendis voluptatem quis neque.
                  Error, voluptatibus eius at incidunt inventore quisquam tempore non quo laudantium
                  mollitia voluptatem ipsam. Quis ipsam quos officia, facere et architecto odit
                  sequi reprehenderit aperiam est necessitatibus asperiores nisi enim porro
                  distinctio ab cum aliquam voluptates! Ab, illum accusamus.
                </Text>
                <Button href='https://codepen.io/ixahmedxi' isLight>
                  <Flex sx={{ alignItems: 'center' }}>
                    <FaCodepen sx={{ mr: 2 }} /> My codepen profile
                  </Flex>
                </Button>
              </Box>
            </Flex>
            <Flex sx={{ alignItems: 'center' }}>
              <Image
                src={profile}
                alt='Profile'
                sx={{
                  transition: '0.2s ease-in-out',
                  '&:hover': { transform: 'rotate(-15deg) scale(1.1)' }
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
