import React from "react"
import * as S from "./styled"
import ArrowMark from "../../../../images/svg/arrow-mark.svg"
import ImageSection from "../../../../images/home-section1.jpg"

const HomeSectionOne = ({
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  height,
}) => {
  return (
    <S.SectionOneWrapper
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition=""
      height=""
    >
      <h1 class="hs1-title">
        <span class="text-red">Domine</span> os ciclos dos mercados globais
      </h1>
      <div class="hs1-move-down-container">
        <img src={ArrowMark} alt="Saiba mais" class="hs1-move-down" />
      </div>
    </S.SectionOneWrapper>
  )
}

export default HomeSectionOne
