/* @jsx jsx */
import { Box, Text, Divider, jsx } from 'theme-ui'
import { darken } from '@theme-ui/color'

interface StackBoxProps {
  isRight?: boolean
  title: string
  items: string[]
}

export const StackBox = ({ title, items, isRight }: StackBoxProps) => {
  return (
    <Box
      sx={{
        width: String(100 / 3) + '%',
        bg: isRight === true ? 'text' : darken('background', 0.05),
        color: isRight === true ? 'background' : 'text',
        mr: 3,
        position: 'relative',
        borderRadius: '15px',
        p: 3,
        '&::before': {
          content: '""',
          position: 'absolute',
          height: 6,
          top: -6,
          left: '50%',
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
          left: isRight === true ? 'calc(50% - 92px)' : '50%'
        }
      }}>
      <Text as='h2' sx={{ textAlign: 'center', fontSize: 2, m: 0, p: 0 }}>
        {title}
      </Text>
      <Divider
        sx={{
          borderColor: isRight === true ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          mx: 8
        }}
      />
      <ul sx={{ lineHeight: 2, m: 0 }}>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Box>
  )
}
