import React from "react"
import * as S from "./styled"
import MiniWideButton from "./MiniWideButton"
import TelegramIcon from "../../../../images/svg/icon-telegram.svg"
import SigIn from "../../../../images/svg/icon-signin.svg"

const ButtonsWrapper = () => {
  return (
    <S.ButtonWrapperStyled>
      <MiniWideButton
        color={"--primary-blue"}
        width={"15rem"}
        height={"2rem"}
        gradientColorOne={"--clear"}
        gradientColorTwo={"--clear"}
        gradientPercentOne={"0%"}
        gradientPercentTwo={"100%"}
        gradientDeg={"90deg"}
        borderRadius={"2rem"}
      >
        <img src={TelegramIcon} alt="Acesse o nosso Telegram" height="18rem" />
        Telegram
      </MiniWideButton>
      <MiniWideButton width={"10rem"}>
        Login <img src={SigIn} alt="Acesse a Área de Membros" height="18rem" />
      </MiniWideButton>
    </S.ButtonWrapperStyled>
  )
}

export default ButtonsWrapper
