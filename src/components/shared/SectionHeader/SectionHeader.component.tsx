import { Box, Text } from 'theme-ui'

interface SectionHeaderProps {
  title: string
  description: string
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Text
        as='h1'
        sx={{
          color: 'primary',
          fontSize: 4,
          fontWeight: 'heading',
          mb: 3,
          display: 'inline-block',
          lineHeight: '32px',
          borderRadius: 3
        }}>
        {title}
      </Text>
      <Text as='p' sx={{ width: '45%', m: '0 auto', lineHeight: 1.5 }}>
        {description}
      </Text>
    </Box>
  )
}
