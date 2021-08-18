import React from "react"
import LogoQuad from "../../../images/svg/logoQuadfinancial.svg"

import * as S from "./styled"

const Logo = () => {
  return (
    <S.LogoWrapper
      src={LogoQuad}
      alt="Logo Quad Financial"
      className="header-logo"
    />
  )
}

export default Logo
