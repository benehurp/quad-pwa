import React from "react"
import * as S from "./styled"
import BigLogoQuad from "../../../../images/svg/logo-Q.svg"
import ImageSection from "../../../../images/home-section2.jpg"

const HomeSection2 = ({
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
    <S.Section2Wrapper
      backgroundType="image"
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition=""
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
      height=""
    >
      <div className="container">
        <S.Card width="100%">
          <div className="left">
            <div className="big-logo">
              <img src={BigLogoQuad} alt="Símbolo gigante da QuadFinancial" />
            </div>
          </div>
          <div className="right">
            <S.TitleH4 width="80%">
              Sua caminhada para obter retornos absolutos no médio prazo começa
              aqui
            </S.TitleH4>
            <S.Paragraph width="80%">
              Oferecemos análises e recomendações que vão ajudá-lo a estruturar
              sua carteira de forma adequada para enfrentar cada etapa do ciclo
              de mercado.
            </S.Paragraph>
            <S.Paragraph width="80%">
              Seguindo os sinais do Método M4D, compomos estratégias de
              portfólio agressivas quando o risco é baixo e defensivas quando o
              risco de correção nos preços for elevado.
            </S.Paragraph>
          </div>
        </S.Card>
      </div>
    </S.Section2Wrapper>
  )
}

export default HomeSection2
