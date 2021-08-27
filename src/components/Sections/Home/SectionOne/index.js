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
      <h1 class="home-title">
        <span class="title-text-highlight">Domine</span> os ciclos dos mercados
        globais
      </h1>
      <div class="move-down-container">
        <img src={ArrowMark} alt="Saiba mais" class="move-down-icon" />
      </div>
    </S.SectionOneWrapper>
  )
}

export default HomeSectionOne
