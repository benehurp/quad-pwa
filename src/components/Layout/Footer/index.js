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
import { UserContext } from "../../../UserContext"

const Footer = () => {
  const { useWindowSize } = React.useContext(UserContext)

  const [width] = useWindowSize()

  return (
    <>
      <TelegramFooter />
      <S.FooterWrapper>
        <S.FooterItems>
          <S.FooterLeft>
            <Logo heigth="65px" alt="Logo do Rodapé: Quad Financial" />
            <S.SocialLinksWrapper>
              <SocialLinks />
              <S.SocialLinksDescription>
                Acompanhe nas
                <br />
                redes sociais
              </S.SocialLinksDescription>
            </S.SocialLinksWrapper>
          </S.FooterLeft>
          <S.FooterCenter>
            <S.AddressItem>
              <FooterContacts>
                <Mail width="2rem" />
                11 99621-3970
              </FooterContacts>
              <FooterContacts>
                <PhoneCall width="1.8rem" />
                contato@quadfinancial.com.br
              </FooterContacts>
            </S.AddressItem>
            {width > 768 ? <NavMenu /> : " "}
          </S.FooterCenter>
        </S.FooterItems>
      </S.FooterWrapper>
      <FooterCopyRight />
    </>
  )
}

export default Footer
