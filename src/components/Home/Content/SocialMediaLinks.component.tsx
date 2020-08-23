import { FaCodepen, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Flex, Link } from 'theme-ui'

export const SocialMediaLinks = () => {
  const links = [
    {
      link: 'https://github.com/ixahmedxi',
      Icon: FaGithub
    },
    {
      link: 'https://codepen.io/ixahmedxi',
      Icon: FaCodepen
    },
    {
      link: 'https://twitter.com/ixahmedxii',
      Icon: FaTwitter
    },
    {
      link: 'https://instagram.com/ix.ahmed.xi',
      Icon: FaInstagram
    }
  ]
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Flex sx={{ flexDirection: 'column' }}>
        {links.map(SLink => (
          <Link
            href={SLink.link}
            target='_blank'
            key={SLink.link}
            rel='noreferrer noopener'
            sx={{
              fontSize: 3,
              color: 'currentColor',
              py: 1,
              transition: '0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.15)' }
            }}>
            <SLink.Icon />
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}
