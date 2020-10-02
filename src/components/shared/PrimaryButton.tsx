import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styled from 'styled-components'

interface Props {
  text: string
  href: string
}

const Link = styled('a')`
  text-decoration: none;
  color: white;
  background-color: #6046f1;
  display: inline-block;
  padding: 12px 35px;
  border-radius: 100px;
  margin-top: 1rem;
  box-shadow: 0px 10px 30px rgba(96, 70, 241, 0.5);
  span {
    display: flex;
    align-items: center;
  }
`

export const PrimaryButton = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <span>
        {text} <FaLongArrowAltRight size={25} style={{ marginLeft: '15px' }} />
      </span>
    </Link>
  )
}
