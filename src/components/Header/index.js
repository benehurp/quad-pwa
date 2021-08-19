import React from "react"
import Logo from "../Layout/Logo/index"
import NavMenu from "../Layout/NavMenu/index"
import ButtonsHeader from "./ButtonWrapper"
import * as S from "./styled"

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainerItems>
        <Logo heigth="80px" alt="Logo do Header: Quad Financial" />
        <NavMenu />
        <ButtonsHeader />
      </S.HeaderContainerItems>
    </S.HeaderWrapper>
  )
}

export default Header
