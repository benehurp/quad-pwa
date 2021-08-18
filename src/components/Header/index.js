import React from "react"
import Logo from "../Layout/Logo/index"
import NavMenu from "../Layout/NavMenu/index"
import ButtonRound from "./ButtonRound"
import * as S from "./styled"

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainerItems>
        <Logo />
        <NavMenu />
        <ButtonRound />
      </S.HeaderContainerItems>
    </S.HeaderWrapper>
  )
}

export default Header
