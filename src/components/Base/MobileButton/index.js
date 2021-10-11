import React from "react"
import * as S from "./styled"
import { UserContext } from "../../../UserContext"
import menuData from "../NavMenu/menuData"
import MiniWideButton from "../MiniWideButton"
import TelegramIcon from "../../../images/svg/icon-telegram.svg"
import SigIn from "../../../images/svg/icon-signin.svg"

const MobileButton = () => {
  const { openMenu, setOpenMenu } = React.useContext(UserContext)

  return (
    <>
      <S.MenuMobileButton
        openMenu={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      />
      {openMenu && (
        <S.MenuMobileContainer>
          <S.MenuList>
            {menuData.map(item =>
              item.url.slice(0, 4) === "http" ? (
                <S.MenuItem key={item.id} disable={item.disable}>
                  <S.MenuLink
                    disable={item.disable}
                    as="a"
                    href={item.url}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    {item.title}
                  </S.MenuLink>
                </S.MenuItem>
              ) : (
                <S.MenuItem key={item.id} disable={item.disable}>
                  <S.MenuLink
                    disable={item.disable}
                    to={item.url}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    {item.title}
                  </S.MenuLink>
                </S.MenuItem>
              )
            )}
            <li className="buttons-wrapper">
              <MiniWideButton
                key="1"
                $externalLink={true}
                link="https://t.me/canaldaquad"
                $fontSize={"small"}
                $color={"blue"}
                $width={"100%"}
                $height={"5rem"}
                $paddingRight={"2rem"}
                $gradientColor1={"whitePure"}
                $gradientColor2={"whitePure"}
                $gradientPercent1={"0%"}
                $gradientPercent2={"100%"}
                $gradientDeg={"90deg"}
                $borderRadius={"2rem"}
              >
                <img
                  src={TelegramIcon}
                  alt="Acesse o nosso Telegram"
                  height="22rem"
                />
                Telegram
              </MiniWideButton>
              <MiniWideButton
                key="2"
                $externalLink={true}
                link="https://membros.quadfinancial.com.br/"
                $fontSize={"small"}
                $width={"100%"}
                $height={"5rem"}
                $paddingRight={"2rem"}
              >
                Membros
                <img
                  src={SigIn}
                  alt="Acesse a Área de Membros"
                  height="18rem"
                />
              </MiniWideButton>
            </li>
          </S.MenuList>
        </S.MenuMobileContainer>
      )}
    </>
  )
}

export default MobileButton
