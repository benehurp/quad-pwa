import React from "react"
import * as S from "./styled"
import Logo from "../../Base/Logo"
import NavMenu from "../../Base/NavMenu"
import FooterContacts from "./FooterContacts"
import SocialLinks from "../../Base/SocialLinks"
import { Mail } from "@styled-icons/heroicons-outline/Mail"
import { PhoneCall } from "@styled-icons/evaicons-solid/PhoneCall"
import TelegramFooter from "./TelegramFooter"
import useWindowSize from "../../Utils/useWindowSize"

const Footer = () => {
  const { width } = useWindowSize()
  const [logoSize, setLogoSize] = React.useState("65px")

  React.useEffect(() => {
    if (width <= 768) {
      setLogoSize("95px")
    } else {
      setLogoSize("65px")
    }
  }, [width])

  return (
    <>
      <S.Footer>
        <TelegramFooter />
        <div className="footer-wrapper">
          <S.FooterColumn>
            <S.FooterLogo>
              <Logo heigth={logoSize} alt="Logo do Rodapé: Quad Financial" />
              <S.SocialLinksWrapper>
                <SocialLinks />
                <S.SocialLinksDescription>
                  Acompanhe nas
                  <br />
                  redes sociais
                </S.SocialLinksDescription>
              </S.SocialLinksWrapper>
            </S.FooterLogo>
            <S.FooterItems>
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
              {width > 960 ? <NavMenu /> : ""}
            </S.FooterItems>
          </S.FooterColumn>
        </div>
        <S.CopyRight>© 2021 QUAD Financial</S.CopyRight>
      </S.Footer>
    </>
  )
}

export default Footer
