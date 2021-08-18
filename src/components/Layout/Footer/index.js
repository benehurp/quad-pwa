import React from "react"
import * as S from "./styled"
import FooterCopyRight from "./FooterCopyRight"
import Logo from "../Logo"

const Footer = () => {
  return (
    <footer>
      <S.FooterItemsWrapper>
        <S.FooterItems>
          <Logo />
        </S.FooterItems>
      </S.FooterItemsWrapper>
      <FooterCopyRight />
    </footer>
  )
}

export default Footer
