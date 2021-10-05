import React from "react"
import * as S from "./styled"
import MiniWideButton from "../../../Base/MiniWideButton"
import TelegramIcon from "../../../../images/svg/icon-telegram.svg"
import SigIn from "../../../../images/svg/icon-signin.svg"
import MenuMobileButton from "../../../Base/MobileButton"

const ButtonsWrapper = ({ showButtons }) => {
  const buttons = {
    telegram: () => {
      return (
        <MiniWideButton
          key="1"
          $externalLink={true}
          link="https://t.me/canaldaquad"
          $color={"blue"}
          $width={"12rem"}
          $height={"2.5rem"}
          $paddingRight={"2rem"}
          $gradientColor1={"white"}
          $gradientColor2={"white"}
          $gradientPercent1={"0%"}
          $gradientPercent2={"100%"}
          $gradientDeg={"90deg"}
          $borderRadius={"2rem"}
        >
          <img
            src={TelegramIcon}
            alt="Acesse o nosso Telegram"
            height="18rem"
          />
          Telegram
        </MiniWideButton>
      )
    },
    membros: () => {
      return (
        <MiniWideButton
          key="2"
          $externalLink={true}
          link="https://membros.quadfinancial.com.br/"
          $width={"12rem"}
          $height={"2.5rem"}
          $paddingRight={"2rem"}
        >
          Membros
          <img src={SigIn} alt="Acesse a Área de Membros" height="18rem" />
        </MiniWideButton>
      )
    },
    menu: () => {
      return <MenuMobileButton />
    },
  }

  const { telegram, membros, menu } = buttons

  switch (showButtons) {
    case "0":
      return <S.ButtonWrapperStyled>{menu()}</S.ButtonWrapperStyled>
    case "1":
      return (
        <S.ButtonWrapperStyled>
          {membros()}
          {menu()}
        </S.ButtonWrapperStyled>
      )
    case "2":
      return (
        <S.ButtonWrapperStyled>
          {telegram()}
          {membros()}
          {menu()}
        </S.ButtonWrapperStyled>
      )
    default:
      return (
        <S.ButtonWrapperStyled>
          {telegram()}
          {membros()}
        </S.ButtonWrapperStyled>
      )
  }
}

export default ButtonsWrapper
