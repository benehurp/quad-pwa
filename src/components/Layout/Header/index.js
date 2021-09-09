import React from "react"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import ButtonsWrapper from "./ButtonWrapper"
import * as S from "./styled"
import { UserContext } from "../../../UserContext"

const Header = () => {
  const { useWindowSize } = React.useContext(UserContext)

  const [width] = useWindowSize()

  return (
    <S.HeaderWrapperStyled>
      <S.HeaderContainerItemsStyled>
        <Logo heigth="70px" alt="Logo do Header: Quad Financial" />
        {width >= 1024 ? <NavMenu /> : ""}
        {width >= 600 ? <ButtonsWrapper /> : ""}
      </S.HeaderContainerItemsStyled>
    </S.HeaderWrapperStyled>
  )
}

export default Header
