import React from "react"
import * as S from "./styled"
import FooterCopyRight from "./FooterCopyRight"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import FooterContacts from "./FooterContacts"

const Footer = () => {
  return (
    <footer>
      <S.FooterItemsWrapperStyled>
        <S.FooterItemsStyled>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem 0",
              fontSize: "1rem",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            <Logo heigth="65px" alt="Logo do Rodapé: Quad Financial" />
            Acompanhe nas
            <br />
            redes sociais
          </div>
          <div>
            <div
              style={{
                display: "flex",
                gap: "0 2rem",
                marginTop: "2rem",
                marginBottom: "4rem",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              <FooterContacts />
              <FooterContacts />
            </div>
            <NavMenu />
          </div>
        </S.FooterItemsStyled>
      </S.FooterItemsWrapperStyled>
      <FooterCopyRight />
    </footer>
  )
}

export default Footer
