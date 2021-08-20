import React from "react"
import LogoQuad from "../../../images/svg/logoQuadfinancial.svg"

import * as S from "./styled"

const Logo = ({ heigth, alt }) => {
  return <S.LogoWrapperStyled src={LogoQuad} heigth={heigth} alt={alt} />
}

export default Logo
