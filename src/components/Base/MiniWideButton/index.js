import React from "react"
import * as S from "./styled"

const MiniWideButton = ({
  link,
  children,
  $externalLink,
  $fontSize,
  $fontWeigth,
  $color,
  $width,
  $height,
  $paddingTop,
  $paddingRight,
  $marginTop,
  $gradientDeg,
  $gradientColor1,
  $gradientColor2,
  $gradientPercent1,
  $gradientPercent2,
  $borderRadius,
}) => {
  if (!$externalLink) {
    return (
      <S.ButtonInternalLink
        to={link}
        $fontSize={$fontSize}
        $fontWeigth={$fontWeigth}
        $color={$color}
        $width={$width}
        $height={$height}
        $paddingTop={$paddingTop}
        $paddingRight={$paddingRight}
        $marginTop={$marginTop}
        $gradientDeg={$gradientDeg}
        $gradientColor1={$gradientColor1}
        $gradientColor2={$gradientColor2}
        $gradientPercent1={$gradientPercent1}
        $gradientPercent2={$gradientPercent2}
        $borderRadius={$borderRadius}
      >
        {children}
      </S.ButtonInternalLink>
    )
  }
  if ($externalLink) {
    return (
      <S.ButtonInternalLink
        as="a"
        href={link}
        $fontSize={$fontSize}
        $fontWeigth={$fontWeigth}
        $color={$color}
        $width={$width}
        $height={$height}
        $paddingTop={$paddingTop}
        $paddingRight={$paddingRight}
        $marginTop={$marginTop}
        $gradientDeg={$gradientDeg}
        $gradientColor1={$gradientColor1}
        $gradientColor2={$gradientColor2}
        $gradientPercent1={$gradientPercent1}
        $gradientPercent2={$gradientPercent2}
        $borderRadius={$borderRadius}
      >
        {children}
      </S.ButtonInternalLink>
    )
  }
}

export default MiniWideButton
