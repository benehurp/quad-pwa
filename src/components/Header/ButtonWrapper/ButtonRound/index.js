import React from "react"
import * as S from "./styled"

const ButtonRound = ({
  children,
  color,
  width,
  height,
  gradientColorOne,
  gradientColorTwo,
  gradientPercentOne,
  gradientPercentTwo,
}) => {
  return (
    <S.ButtonRound
      color={color}
      width={width}
      height={height}
      gradientColorOne={gradientColorOne}
      gradientColorTwo={gradientColorTwo}
      gradientPercentOne={gradientPercentOne}
      gradientPercentTwo={gradientPercentTwo}
    >
      {children}
    </S.ButtonRound>
  )
}

export default ButtonRound
