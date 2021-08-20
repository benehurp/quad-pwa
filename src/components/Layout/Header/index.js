import React from "react"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import ButtonsWrapper from "./ButtonWrapper"
import * as S from "./styled"

const Header = () => {
  return (
    <S.HeaderWrapperStyled>
      <S.HeaderContainerItemsStyled>
        <Logo heigth="80px" alt="Logo do Header: Quad Financial" />
        <NavMenu />
        <ButtonsWrapper />
      </S.HeaderContainerItemsStyled>
    </S.HeaderWrapperStyled>
  )
}

export default Header
