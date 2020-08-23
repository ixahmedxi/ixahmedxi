/* @jsx jsx */
import { jsx, Link } from 'theme-ui'

export const ProjectsButton = () => {
  return (
    <Link
      href='#projects'
      sx={{
        display: 'inline-block',
        position: 'relative',
        color: 'currentColor',
        textDecoration: 'none',
        fontWeight: 'heading',
        px: 4,
        py: 2,
        border: '3px solid',
        borderColor: 'currentColor',
        borderRadius: 3,
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          bg: 'primary',
          zIndex: -1,
          top: '10px',
          left: '10px',
          borderRadius: 3,
          transition: '0.2s ease-in-out'
        },
        '&:hover': {
          '&::before': {
            top: 0,
            left: 0,
            borderRadius: 0
          }
        }
      }}>
      View My Projects
    </Link>
  )
}
