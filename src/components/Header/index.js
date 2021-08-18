import React from "react"
import styled from "styled-components"
import Logo from "../Layout/Logo/index"
import NavMenu from "../Layout/NavMenu/index"
import ButtonRound from "./ButtonRound"

const HeaderWrapper = styled.header`
  grid-template-columns: var(--grid);
  display: grid;
  background-color: var(--bg-primary);
`
const HeaderContainerItems = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13rem;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainerItems>
        <Logo />
        <NavMenu />
        <ButtonRound />
      </HeaderContainerItems>
    </HeaderWrapper>
  )
}

export default Header
