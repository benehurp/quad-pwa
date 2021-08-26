import React from "react"
import LogoQuad from "../../../images/svg/logoQuadfinancial.svg"

import * as S from "./styled"

const Logo = ({ heigth, alt }) => {
  return (
    <S.LogoLink to="/">
      <S.LogoWrapperStyled src={LogoQuad} heigth={heigth} alt={alt} />
    </S.LogoLink>
  )
}

export default Logo
