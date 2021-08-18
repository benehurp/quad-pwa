import React from "react"
import LogoQuad from "../../../images/svg/logoQuadfinancial.svg"
import styled from "styled-components"

const LogoWrapper = styled.img`
  width: 250px;
  height: 80px;
`

const Logo = () => {
  return (
    <LogoWrapper
      src={LogoQuad}
      alt="Logo Quad Financial"
      className="header-logo"
    />
  )
}

export default Logo
