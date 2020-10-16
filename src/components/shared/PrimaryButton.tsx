import { motion, Variants } from 'framer-motion'
import { darken } from 'polished'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styled from 'styled-components'

interface Props {
  text: string
  href: string
  variants: Variants
}

const Link = styled(motion.a)`
  text-decoration: none;
  color: white;
  background-color: #6046f1;
  display: inline-block;
  padding: 15px 35px;
  border-radius: 100px;
  margin-top: 1rem;
  box-shadow: 0px 10px 30px rgba(96, 70, 241, 0.5);
  text-transform: uppercase;
  transition: 0.2s ease-out;
  &:hover {
    background-color: ${darken(0.05, '#6046f1')};
  }
  span {
    display: flex;
    align-items: center;
  }
`

export const PrimaryButton = ({ text, href, variants }: Props) => {
  return (
    <Link href={href} variants={variants}>
      <span>
        {text} <FaLongArrowAltRight size={25} style={{ marginLeft: '15px' }} />
      </span>
    </Link>
  )
}
