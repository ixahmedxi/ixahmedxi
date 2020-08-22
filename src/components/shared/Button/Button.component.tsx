import { ReactNode } from 'react'
import { Link } from 'theme-ui'

interface ButtonProps {
  href: string
  children: ReactNode
  isLight?: boolean
}

export const Button = ({ href, children, isLight }: ButtonProps) => {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      sx={{
        border: '3px solid',
        bg: 'transparent',
        borderColor: isLight === true ? 'background' : 'text',
        color: isLight === true ? 'background' : 'text',
        textDecoration: 'none',
        px: 4,
        py: 2,
        display: 'inline-block',
        mt: 3,
        fontWeight: 'heading',
        borderRadius: 3,
        transition: '0.2s ease-in-out',
        '&:hover': {
          bg: isLight === true ? 'background' : 'text',
          color: isLight === true ? 'text' : 'background'
        }
      }}>
      {children}
    </Link>
  )
}
