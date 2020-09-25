import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styled from 'styled-components'

const NavWrapper = styled('nav')`
  position: fixed;
  left: 100px;
  top: 50px;
  background-color: white;
`

const NavButton = styled('button')`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  max-height: 30px;
  background-color: transparent;
  cursor: pointer;
`

const NavbarActiveWrapper = styled('div')<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  left: ${props => (props.isOpen ? 0 : '-100vw')};
  top: 0;
  transition: left 0.5s ease-out;
`

const NavbarCloseButton = styled(NavButton)`
  position: absolute;
  right: 25px;
  top: 25px;
`

const NavMenu = styled('ul')`
  padding: 100px;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    a {
      font-size: 72px;
      color: dodgerblue;
      text-decoration: none;
    }
  }
`

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleNavBar = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <NavWrapper>
      <NavButton type='button' onClick={() => toggleNavBar()}>
        <FiMenu size={30} />
      </NavButton>
      <NavbarActiveWrapper isOpen={isOpen}>
        <NavbarCloseButton type='button' onClick={() => toggleNavBar()}>
          <FiX size={30} />
        </NavbarCloseButton>
        <NavMenu>
          <li>
            <a href='#main'>Home</a>
          </li>
          <li>
            <a href='#work'>Work</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </NavMenu>
      </NavbarActiveWrapper>
    </NavWrapper>
  )
}
