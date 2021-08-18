import React from "react"
import styled from "styled-components"

const MenuWrapper = styled.nav`
  width: auto;
`

const MenuItems = styled.ul`
  display: flex;
  font-size: 1.4rem;
  text-transform: uppercase;
  gap: 1rem;
`
const Items = styled.li`
  padding: 0.5rem;
  color: var(--clear);
  font-weight: 600;
  &:hover {
    color: var(--primary-red);
    cursor: pointer;
    text-decoration: underline;
  }
`

const NavMenu = () => {
  return (
    <MenuWrapper>
      <MenuItems>
        <Items>Home</Items>
        <Items>Sobre</Items>
        <Items>Método</Items>
        <Items>Assinaturas</Items>
        <Items>Artigos</Items>
      </MenuItems>
    </MenuWrapper>
  )
}

export default NavMenu
