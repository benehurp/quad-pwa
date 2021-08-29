import React from "react"
import * as S from "./styled"

const MiniWideButton = ({
  link,
  children,
  fontSize,
  fontWeigth,
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
    <S.ButtonRoundStyledLink
      to={link}
      fontSize={fontSize}
      fontWeigth={fontWeigth}
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
    </S.ButtonRoundStyledLink>
  )
}

export default MiniWideButton
