import React from "react"
import * as S from "./styled"
import BigLogoQuad from "../../../../images/svg/logo-Q.svg"
import ImageSection from "../../../../images/home-section2.jpg"

const HomeSectionTwo = ({
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  height,
}) => {
  return (
    <S.SectionTwoWrapper
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition=""
      height=""
    >
      <div class="card">
        <div class="big-logo">
          <div class="big-logo-container">
            <img src={BigLogoQuad} alt="Símbolo gigante da QuadFinancial" />
          </div>
        </div>
        <div class="big-logo-description">
          <S.TitleH4>
            Sua caminhada para obter retornos absolutos no médio prazo começa
            aqui
          </S.TitleH4>
          <p>
            Oferecemos análises e recomendações que vão ajudá-lo a estruturar
            sua carteira de forma adequada para enfrentar cada etapa do ciclo de
            mercado.
          </p>
          <p>
            Seguindo os sinais do Método M4D, compomos estratégias de portfólio
            agressivas quando o risco é baixo e defensivas quando o risco de
            correção nos preços for elevado.
          </p>
        </div>
      </div>
    </S.SectionTwoWrapper>
  )
}

export default HomeSectionTwo
