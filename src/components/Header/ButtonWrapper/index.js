import React from "react"
import ButtonRound from "./ButtonRound"
import * as S from "./styled"

const ButtonsHeader = () => {
  return (
    <S.ButtonWrapper>
      <ButtonRound
        color={""}
        width={""}
        height={""}
        gradientColorOne={""}
        gradientColorTwo={""}
        gradientPercentOne={""}
        gradientPercentTwo={""}
      >
        Telegram
      </ButtonRound>
      <ButtonRound>Login</ButtonRound>
    </S.ButtonWrapper>
  )
}

export default ButtonsHeader
