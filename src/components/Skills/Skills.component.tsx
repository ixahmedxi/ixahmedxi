import { Container } from '@shared/Container/Container.component'
import { SectionHeader } from '@shared/SectionHeader/SectionHeader.component'
import { darken } from '@theme-ui/color'
import { Box, Flex, Image, Text } from 'theme-ui'

interface Icon {
  src: string
  alt: string
}

export const Skills = () => {
  const icons: Icon[] = [
    {
      src: 'firebase',
      alt: 'Firebase'
    },
    {
      src: 'graphql',
      alt: 'GraphQL'
    },
    {
      src: 'svelte',
      alt: 'Svelte'
    },
    {
      src: 'next-dot-js',
      alt: 'Next.js'
    },
    {
      src: 'typescript',
      alt: 'TypeScript'
    },
    {
      src: 'nestjs',
      alt: 'Nest.js'
    },
    {
      src: 'react',
      alt: 'ReactJS'
    },
    {
      src: 'apollographql',
      alt: 'Apollo GraphQL'
    },
    {
      src: 'gatsby',
      alt: 'GatsbyJS'
    }
  ]
  return (
    <Box sx={{ py: 12, textAlign: 'center' }}>
      <Container>
        <SectionHeader
          title='Knowledge & skills'
          description='I have worked with a lot of technologies throughout the years, some of them include the following:'
        />
        <Flex sx={{ justifyContent: 'center', mt: 6, mb: 3 }}>
          <Box>
            {icons.map(icon => (
              <Image
                key={icon.src}
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${icon.src}.svg`}
                alt={icon.alt}
                width='50'
                sx={{ mx: 1, opacity: 0.3 }}
              />
            ))}
          </Box>
        </Flex>
        <Text as='p'>
          I use my skills to create websites that are <strong>responsive</strong>,{' '}
          <strong>accessible</strong>, <strong>highly performant</strong> and{' '}
          <strong>SEO friendly</strong>.
        </Text>
        <Text as='p' sx={{ mt: 6, width: '35%', mx: 'auto' }}>
          If I would currently create a new web application project, it would probably use the
          following <strong>tech stack</strong>:
        </Text>
        <Box
          sx={{ width: '12px', height: '12px', borderRadius: '6px', bg: 'text', mx: 'auto', mt: 3 }}
        />
        <Box sx={{ width: '4px', height: '30px', bg: 'text', mx: 'auto' }} />
        <Box sx={{ width: String(100 / 3) + '%', height: '4px', bg: 'text', mx: 'auto' }} />
        <Flex sx={{ justifyContent: 'center', flexDirection: 'row', mt: 6 }}>
          <Box
            sx={{
              width: String(100 / 3) + '%',
              minHeight: '300px',
              bg: darken('background', 0.05),
              mr: 3,
              position: 'relative',
              borderRadius: '15px',
              '&::before': {
                content: '""',
                position: 'absolute',
                height: 6,
                top: -6,
                width: '4px',
                bg: 'text'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: 12,
                height: '4px',
                bg: 'text',
                top: '-52px'
              }
            }}></Box>
          <Box
            sx={{
              width: String(100 / 3) + '%',
              minHeight: '300px',
              bg: 'text',
              position: 'relative',
              borderRadius: '15px',
              '&::before': {
                content: '""',
                position: 'absolute',
                height: 6,
                top: -6,
                width: '4px',
                bg: 'text'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: 12,
                height: '4px',
                bg: 'text',
                top: '-52px',
                left: 'calc(50% - 92px)'
              }
            }}></Box>
        </Flex>
      </Container>
    </Box>
  )
}
