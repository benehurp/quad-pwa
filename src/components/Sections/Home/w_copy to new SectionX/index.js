import React from "react"
import * as S from "./styled"

const HomeSectionX = ({
  backgroundType,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  gradientDeg,
  gradientColor1,
  gradientColor2,
  gradientPercent1,
  gradientPercent2,
  height,
}) => {
  return (
    <S.SectionWrapper
      backgroundType="color"
      backgroundColor="gray2"
      backgroundImage=""
      backgroundPosition=""
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
      height=""
    >
      <div className="container">
        <div clasName="left"></div>
        <div clasName="right"></div>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSectionX
