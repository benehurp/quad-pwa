import React from "react"
import styled from "styled-components"
import Logo from "../Layout/Logo/index"
import NavMenu from "../Layout/NavMenu/index"

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
        <div className="header-container-btns">
          <button className="btn-telegram">
            <img
              src="./img/icon-telegram.svg"
              alt="Icone do Telegram"
              className="icon-telegram"
            />
            Telegram
          </button>
          <button className="btn-login">
            Login
            <img
              src="./img/icon-signin.svg"
              alt="Ícone de login"
              className="icon-signin"
            />
          </button>
        </div>
      </HeaderContainerItems>
    </HeaderWrapper>
  )
}

export default Header
