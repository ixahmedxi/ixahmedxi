import { Container } from '@shared/Container/Container.component'
import { SectionHeader } from '@shared/SectionHeader/SectionHeader.component'
import { darken } from '@theme-ui/color'
import { Box, Flex, Image, Text } from 'theme-ui'
import { StackBox } from './StackBox.component'

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
        <Flex sx={{ justifyContent: 'center', mt: 6, textAlign: 'left' }}>
          <StackBox
            title='Frontend stack'
            items={[
              'React.js',
              'Next.js or Gatsby',
              'theme-ui or styled-components',
              'Apollo GraphQL',
              'Redux (maybe)'
            ]}
          />
          <StackBox
            isRight
            title='Backend stack'
            items={[
              'Node.js',
              'NestJS or Express',
              'TypeORM or MikroORM',
              'PostgreSQL or MongoDB',
              'GraphQL'
            ]}
          />
        </Flex>
      </Container>
    </Box>
  )
}
