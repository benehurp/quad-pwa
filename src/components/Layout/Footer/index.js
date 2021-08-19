import React from "react"
import * as S from "./styled"
import FooterCopyRight from "./FooterCopyRight"
import Logo from "../Logo"

const Footer = () => {
  return (
    <footer>
      <S.FooterItemsWrapper>
        <S.FooterItems>
          <Logo heigth="65px" alt="Logo do Rodapé: Quad Financial" />
        </S.FooterItems>
      </S.FooterItemsWrapper>
      <FooterCopyRight />
    </footer>
  )
}

export default Footer
