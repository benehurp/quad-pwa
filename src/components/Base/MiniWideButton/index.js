import React from "react"
import * as S from "./styled"

const MiniWideButton = ({
  children,
  color,
  width,
  height,
  gradientDeg,
  gradientColorOne,
  gradientColorTwo,
  gradientPercentOne,
  gradientPercentTwo,
  borderRadius,
}) => {
  return (
    <S.ButtonRoundStyled
      color={color}
      width={width}
      height={height}
      gradientDeg={gradientDeg}
      gradientColorOne={gradientColorOne}
      gradientColorTwo={gradientColorTwo}
      gradientPercentOne={gradientPercentOne}
      gradientPercentTwo={gradientPercentTwo}
      borderRadius={borderRadius}
    >
      {children}
    </S.ButtonRoundStyled>
  )
}

export default MiniWideButton
