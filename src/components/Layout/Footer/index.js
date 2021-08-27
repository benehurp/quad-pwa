import React from "react"
import * as S from "./styled"
import FooterCopyRight from "./FooterCopyRight"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import FooterContacts from "./FooterContacts"
import SocialLinks from "../../Base/SocialLinks"
import { Mail } from "@styled-icons/heroicons-outline/Mail"
import { PhoneCall } from "@styled-icons/evaicons-solid/PhoneCall"
import TelegramFooter from "./TelegramFooter"

const Footer = () => {
  return (
    <>
      <TelegramFooter />
      <footer>
        <S.FooterItemsWrapper>
          <S.FooterItems>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "1.5rem 0",
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              <Logo heigth="65px" alt="Logo do Rodapé: Quad Financial" />
              <S.SocialLinksWrapper>
                <SocialLinks />
                <S.SocialLinksDescription>
                  Acompanhe nas
                  <br />
                  redes sociais
                </S.SocialLinksDescription>
              </S.SocialLinksWrapper>
            </div>
            <div>
              <address
                style={{
                  display: "flex",
                  gap: "2rem",
                  marginBottom: "3rem",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                <FooterContacts>
                  <Mail width="2rem" />
                  11 99621-3970
                </FooterContacts>
                <FooterContacts>
                  <PhoneCall width="1.8rem" />
                  contato@quadfinancial.com.br
                </FooterContacts>
              </address>
              <NavMenu />
            </div>
          </S.FooterItems>
        </S.FooterItemsWrapper>
        <FooterCopyRight />
      </footer>
    </>
  )
}

export default Footer
