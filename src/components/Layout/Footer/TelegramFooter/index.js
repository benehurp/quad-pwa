import React from "react"
import MiniWideButton from "../../../Base/MiniWideButton"
import * as S from "./styled"
import TelegramIcon from "../../../../images/svg/icon-telegram.svg"

const TelegramFooter = () => {
  return (
    <S.TelegramWrapper>
      <div>
        Receba nosso conteúdo no seu celular
        <br />
        gratuitamente e fique por dentro de atualizações.
      </div>
      <MiniWideButton
        link="https://t.me/canaldaquad"
        $color={"blue"}
        $width={"32rem"}
        $paddingRight={"0rem"}
        $height={"3rem"}
        $gradientColor1={"white"}
        $gradientColor2={"white"}
        $gradientPercent1={"0%"}
        $gradientPercent2={"100%"}
        $gradientDeg={"90deg"}
        $borderRadius={"0.7rem"}
      >
        <img
          src={TelegramIcon}
          alt="Acesse o nosso Telegram"
          width="18rem"
          height="18rem"
        />
        Participar do canal no Telegram
      </MiniWideButton>
    </S.TelegramWrapper>
  )
}

export default TelegramFooter
