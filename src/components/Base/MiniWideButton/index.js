import React from "react"
import * as S from "./styled"

const MiniWideButton = ({
  link,
  children,
  $fontSize,
  $fontWeigth,
  $color,
  $width,
  $height,
  $padding,
  $marginTop,
  $gradientDeg,
  $gradientColor1,
  $gradientColor2,
  $gradientPercent1,
  $gradientPercent2,
  $borderRadius,
}) => {
  return (
    <S.ButtonRoundStyledLink
      to={link}
      $fontSize={$fontSize}
      $fontWeigth={$fontWeigth}
      $color={$color}
      $width={$width}
      $height={$height}
      $padding={$padding}
      $marginTop={$marginTop}
      $gradientDeg={$gradientDeg}
      $gradientColor1={$gradientColor1}
      $gradientColor2={$gradientColor2}
      $gradientPercent1={$gradientPercent1}
      $gradientPercent2={$gradientPercent2}
      $borderRadius={$borderRadius}
    >
      {children}
    </S.ButtonRoundStyledLink>
  )
}

export default MiniWideButton
