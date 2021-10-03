import React from "react"
import * as S from "./styled"
import MiniWideButton from "../../../Base/MiniWideButton"
import TelegramIcon from "../../../../images/svg/icon-telegram.svg"
import SigIn from "../../../../images/svg/icon-signin.svg"

const ButtonsWrapper = ({ oneButton }) => {
  return (
    <S.ButtonWrapperStyled oneButton={oneButton}>
      {oneButton
        ? [
            <MiniWideButton
              key="0"
              link="https://membros.quadfinancial.com.br/"
              $width={"12rem"}
              $height={"2.5rem"}
              $paddingRight={"2rem"}
            >
              Membros
              <img src={SigIn} alt="Acesse a Área de Membros" height="18rem" />
            </MiniWideButton>,
          ]
        : [
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
            </MiniWideButton>,
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
            </MiniWideButton>,
          ]}
    </S.ButtonWrapperStyled>
  )
}

export default ButtonsWrapper
