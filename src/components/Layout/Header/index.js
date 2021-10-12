import React from "react"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import ButtonsWrapper from "./ButtonWrapper"
import * as S from "./styled"
import useWindowSize from "../../Utils/useWindowSize"

const Header = () => {
  const { width } = useWindowSize()

  return (
    <S.HeaderWrapper>
      <S.HeaderItems>
        <Logo heigth="70px" alt="Logo do Header: Quad Financial" />
        {width <= 480 && <ButtonsWrapper showButtons="0" />}
        {width > 480 && width < 580 && <ButtonsWrapper showButtons="1" />}
        {width >= 580 && width < 990 && <ButtonsWrapper showButtons="2" />}
        {width >= 990 && <NavMenu />}
        {width >= 990 && <ButtonsWrapper />}
      </S.HeaderItems>
    </S.HeaderWrapper>
  )
}

export default Header
