import React from "react"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import ButtonsWrapper from "./ButtonWrapper"
import * as S from "./styled"
import { UserContext } from "../../../UserContext"
import useWindowSize from "../../Utils/useWindowSize"

const Header = () => {
  const { width } = useWindowSize()

  return (
    <S.HeaderWrapper>
      <S.HeaderItems>
        <Logo heigth="70px" alt="Logo do Header: Quad Financial" />
        {width >= 1024 ? <NavMenu /> : ""}
        {width > 768 ? (
          <ButtonsWrapper oneButton={false} />
        ) : width > 375 ? (
          <ButtonsWrapper oneButton={true} />
        ) : (
          "Menu"
        )}
      </S.HeaderItems>
    </S.HeaderWrapper>
  )
}

export default Header
