import React from "react"
import * as S from "./styled"

const HomeSectionOne = () => {
  return (
    <S.SectionOneWrapper>
      <h1 class="hs1-title">
        <span class="text-red">Domine</span> os ciclos dos mercados globais
      </h1>
      <div class="hs1-move-down-container">
        <img src="img/move-down.svg" class="hs1-move-down" />
      </div>
    </S.SectionOneWrapper>
  )
}

export default HomeSectionOne
